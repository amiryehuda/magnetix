import React, { useState } from "react";
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
import { sendTextToMidjourney } from "./app/api/webhook/routes";

/*
Your Auth Token: 0066d704-fecc-46a7-aa8e-70f13cc2f55a
Account ID: qlxzNdultfBp4Y9sMUUd
Current Period End: Wed Oct 18 2023
API URL: https://api.thenextleg.io/v2
*/

const App = () => {
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [photoToRender, setPhotoToRender] = useState<
    { id: number; image_url: string }[]
  >(mockData.response);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value as string);
  };

  const handleSendButtonClick = async () => {
    console.log("res");
    const res = await sendTextToMidjourney(inputText);

    console.log(res);

    setClicked(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

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
          <Button onClick={handleSendButtonClick}>send</Button>
          {renderButtons()}
        </InputSide>
        <PhotosSide>
          {clicked ? (
            <AllPhotos>
              {loading ? (
                <div> Loading...</div>
              ) : (
                photoToRender.map((photo) => {
                  return <Photo url={photo.image_url} id={photo.id} />;
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
