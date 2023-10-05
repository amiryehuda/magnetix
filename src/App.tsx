import React, { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import {
  AllPhotos,
  AppLayout,
  ContentArea,
  Divider,
  InputSide,
  PhotosSide,
} from "./App-style";
import magnetixLogo from "./assets/photos/magnetix-logo.jpg";
import mockData from "./mock/mock-data.json";
import Photo from "./components/Photo/Photo";
import {
  sendTextToMidjourney,
  getPictures,
  chooseOnVersionButton,
} from "./app/api/webhook/routes";
import { sleep } from "./app/api/assets/utils";
import { Tooltip } from "./components/Tooltip/Tooltip";
import InfoPopup from "./components/Popup/InfoPopup/InfoPopup";
import { HeaderWrapper } from "./global-style";
import Typography from "./components/Typography/Typography";

const App = () => {
  type VersionKey = keyof typeof mockData.versions;
  const [inputText, setInputText] = useState<string>("a cat eat a banana");
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [photoToRender, setPhotoToRender] = useState<string[]>([]);
  const [chosenPhoto, setChosenPhoto] = useState<{ url: string; id: number }>({
    url: "",
    id: 0,
  });

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
    // setPhotoToRender(mockData.photos);

    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await sleep(10000).then(async () => {
        if (messageId && !requestMade) {
          setRequestMade(true);
          const response = await getPictures(messageId as string);
          console.log("out: ", response);
          if (response.progress < 100) {
            // setTimeout(fetchData, 5000);
            fetchData();
          } else {
            console.log("in: ", response);
            setPhotoToRender(response.response.imageUrls);
            setButtonMessageId(response.response.buttonMessageId);
          }
        }
      });
    };
    setRequestMade(false);

    fetchData();
  }, [messageId]);

  useEffect(() => {
    console.log(photoToRender);
  }, [photoToRender]);

  const handleVersiovButtonClick = async (value: VersionKey) => {
    if (value === ("refresh" as VersionKey)) {
      handleSendButtonClick();
      // setPhotoToRender(mockData.refresh);
    } else if (value.includes("u")) {
      //chooseOnVersionButton()
      setPhotoToRender([photoToRender[parseInt(value.slice(-1)) - 1]]);
      // setPhotoToRender([mockData.photos[parseInt(value.slice(-1)) - 1]]);
      // setPhotoToRender([mockData.versions[value]]);
    } else if (value.includes("v")) {
      buttonMessageId &&
        chooseOnVersionButton(buttonMessageId, value.toUpperCase()).then(
          (response) => {
            setMessageId(response.messageId);
          }
        );
      // console.log(value.toUpperCase());

      //get request for v buttons
    }
  };
  const renderTooltipText = (buttonType: string) => {
    if (buttonType.includes("u")) {
      return "u";
    } else if (buttonType.includes("v")) {
      return "v";
    } else {
      return "refresh";
    }
  };
  const renderButtons = () => {
    return clicked ? (
      !loading && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 16px",
            width: 384,
          }}
        >
          {mockData.buttons.map((buttonType) => {
            return (
              <Tooltip title={renderTooltipText(buttonType)}>
                <div>
                  <Button
                    value={buttonType.toUpperCase()}
                    style={{ height: 40, width: 52 }}
                    onClick={() =>
                      handleVersiovButtonClick(buttonType as VersionKey)
                    }
                    key={buttonType}
                  >
                    {buttonType === "refresh" ? "ref" : buttonType}
                  </Button>
                </div>
              </Tooltip>
            );
          })}
        </div>
      )
    ) : (
      <div></div>
    );
  };

  const onPhotoClick = (url: string, id: number) => {
    setIsPopupOpen(true);
    setChosenPhoto({ url: url, id: id });
  };

  return (
    <AppLayout>
      <HeaderWrapper>
        <img
          src={magnetixLogo}
          alt="magnetix logo"
          style={{ height: 40, width: 160 }}
        />
      </HeaderWrapper>
      <ContentArea>
        <PhotosSide>
          <Typography>תוצאות</Typography>
          <AllPhotos>
            {loading ? (
              <div> Loading...</div>
            ) : (
              photoToRender.map((photo, index) => {
                return (
                  <div onClick={() => onPhotoClick(photo, index + 1)}>
                    <Photo
                      url={photo as any}
                      id={index + 1}
                      key={`picture-${index}`}
                    />
                  </div>
                );
              })
            )}
            {renderButtons()}
          </AllPhotos>
        </PhotosSide>
        <Divider />
        <InputSide>
          <Typography>יצירת תמונה</Typography>
          <Input
            sx={{ width: "100%", maxWidth: "644px" }}
            customeHeight={230}
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
        </InputSide>
      </ContentArea>
      <InfoPopup
        customeWidth={400}
        isOpen={isPopupOpen}
        title={`photo number ${chosenPhoto?.id}`}
        subtitle=""
        body={
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Photo
              url={chosenPhoto?.url as any}
              id={chosenPhoto?.id}
              key={`picture-${chosenPhoto?.id}`}
            />
            <Button>send to print</Button>
          </div>
        }
        onCloseHandler={() => setIsPopupOpen(false)}
      />
    </AppLayout>
  );
};

export default App;
