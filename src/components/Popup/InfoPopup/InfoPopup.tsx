import { FC } from "react";

import Popup from "../Popup";
import Typography from "../../Typography/Typography";
import { Container, DisplayCenterContainer } from "./styles";
import { PRIMARY_SHADES } from "../../../global-style";

interface InfoPopupProps {
  isOpen: boolean;
  onCloseHandler: () => void;
  title: string;
  subtitle: string;
  body: JSX.Element;
  customeWidth?: number;
}

const InfoPopup: FC<InfoPopupProps> = ({
  isOpen,
  onCloseHandler,
  title,
  subtitle,
  body,
  customeWidth,
}) => {
  return (
    <Popup
      open={isOpen}
      displayCenter={true}
      customWidth={customeWidth ? customeWidth : 992}
      customBgColor={PRIMARY_SHADES.LIGHT_GRAY}
      onCloseHandler={onCloseHandler}
    >
      <Popup.Header handleClose={onCloseHandler}>
        <DisplayCenterContainer>
          {title}
          <Typography>{subtitle}</Typography>
        </DisplayCenterContainer>
      </Popup.Header>
      <Popup.Body>
        <Container>{body}</Container>
      </Popup.Body>
    </Popup>
  );
};

export default InfoPopup;
