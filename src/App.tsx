import React, { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import {
  AllPhotos,
  AppLayout,
  ContentArea,
  InputSide,
  PhotosSide,
} from "./App-style";
import magnetixLogo from "./assets/photos/magnetix-logo.jpg";
import mockData from "./mock/mock-data.json";
import Photo from "./components/Photo/Photo";
import { sendTextToMidjourney, getPictures } from "./app/api/webhook/routes";

const App = () => {
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [photoToRender, setPhotoToRender] = useState<
    { id: number; image_url: string }[]
  >([]);

  //api states
  const [messageId, setMessageId] = useState<string>();
  const [buttonMessageId, setButtonMessageId] = useState<string>();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value as string);
  };

  const handleSendButtonClick = async () => {
    setClicked(true);
    setLoading(true);
    const res = await sendTextToMidjourney(inputText).then((res) => {
      setMessageId(res.messageId);
    });

    console.log(res);

    setLoading(false);
  };

  useEffect(() => {
    let intervalId: any;

    const fetchData = async () => {
      if (messageId !== null) {
        try {
          const data = await getPictures(messageId as string);
          console.log(data);

          if (data.progress < 100) {
            // If the progress is less than 100, set a new interval
            intervalId = setInterval(fetchData, 5000); // Send the request every 3 seconds
          } else if (data.progress === 100) {
            // If the progress is 100 , set the images
            setPhotoToRender(data.response.imageUrls);
            setButtonMessageId(data.response.buttonMessageId);
          } else {
            // If the progress is 100 or more, clear the interval
            clearInterval(intervalId);
          }
        } catch (error) {
          // Handle errors here
          console.error(error);
        }
      }
    };

    if (clicked) {
      fetchData(); // Start fetching data when the button is clicked
    }

    return () => {
      // Cleanup: clear the interval when the component unmounts or messageId changes
      clearInterval(intervalId);
    };
  }, [messageId]);

  type VersionKey = keyof typeof mockData.versions;

  const handleVersiovButtonClick = async (value: VersionKey) => {
    if (value === ("refresh" as VersionKey)) {
      setPhotoToRender(mockData.refresh);
    } else {
      setPhotoToRender([mockData.versions[value]]);
    }
  };

  const renderButtons = () => {
    return clicked ? (
      !loading && (
        <div style={{ display: "flex", gap: 4, paddingTop: 40 }}>
          {mockData.buttons.map((buttonType) => {
            return (
              <Button
                value={buttonType}
                onClick={() =>
                  handleVersiovButtonClick(buttonType as VersionKey)
                }
                key={buttonType}
              >
                {buttonType === "refresh" ? "ref" : buttonType}
              </Button>
            );
          })}
        </div>
      )
    ) : (
      <div></div>
    );
  };

  return (
    <AppLayout>
      <img src={magnetixLogo} alt="magnetix logo" />
      <ContentArea>
        <InputSide>
          <Input
            sx={{ width: "600px" }}
            customeHeight={200}
            rows={8}
            value={inputText}
            placeholder="Create your photo"
            onChange={(e) =>
              onInputChange(e as React.ChangeEvent<HTMLInputElement>)
            }
          />
          <Button onClick={handleSendButtonClick} disabled={!inputText.length}>
            send
          </Button>
          {renderButtons()}
        </InputSide>
        <PhotosSide>
          {clicked ? (
            <AllPhotos>
              {loading ? (
                <div> Loading...</div>
              ) : (
                photoToRender.map((photo) => {
                  return (
                    <Photo
                      url={photo.image_url}
                      id={photo.id}
                      key={photo.image_url}
                    />
                  );
                })
              )}
            </AllPhotos>
          ) : (
            <div>creatr photos</div>
          )}
        </PhotosSide>
      </ContentArea>
    </AppLayout>
  );
};

export default App;
