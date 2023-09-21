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
import { PhotoType } from "./assets/types";
import { sleep } from "./app/api/assets/utils";

const App = () => {
  type VersionKey = keyof typeof mockData.versions;
  const [inputText, setInputText] = useState<string>("a cat eat a banana");
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [photoToRender, setPhotoToRender] = useState<PhotoType[]>([]);

  //api states
  const [messageId, setMessageId] = useState<string | null>(null);
  const [buttonMessageId, setButtonMessageId] = useState<string>();
  const [requestMade, setRequestMade] = useState(false);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value as string);
  };

  const handleSendButtonClick = async () => {
    setClicked(true);
    setLoading(true);
    await sendTextToMidjourney(inputText).then((res) => {
      setMessageId(res.messageId);
    });

    setLoading(false);
  };

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      await sleep(3000);
      if (messageId && !requestMade) {
        try {
          console.error("messageId:", messageId);

          setRequestMade(true);
          const data = await getPictures(messageId as string);
          setPhotoToRender(data.response.imageUrls);
          setButtonMessageId(data.response.buttonMessageId);
        } catch (error) {
          console.error("Error fetching pictures:", error);
        }
      }
    };

    fetchData();
  }, [messageId]);

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
                photoToRender.map((photo, index) => {
                  return (
                    <Photo
                      url={photo.image_url}
                      id={photo.id}
                      key={`picture-${index}`}
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

/*
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    const fetchData = async () => {
      if (messageId) {
        try {
          console.log("befor getPictures ");
          const data = await getPictures(messageId as string);
          // console.log("getPictures: ", data);
          console.log("urls: ", data.response.imageUrls);

          if (data.progress < 100 && data) {
            intervalId = setInterval(fetchData, 5000);
          } else if (data.progress === 100 && data) {
            setPhotoToRender(data.response.imageUrls);
            setButtonMessageId(data.response.buttonMessageId);
          } else {
            clearInterval(intervalId);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    if (clicked) {
      fetchData();
    }

    return () => {
      // Cleanup: clear the interval when the component unmounts or messageId changes
      clearInterval(intervalId);
    };
  }, [messageId, clicked]);
*/
