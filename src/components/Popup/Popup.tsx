import { CSSProperties, ElementType, FC } from "react";
import Modal from "@mui/material/Modal";

import {
  Body,
  Container,
  IconContainer,
  TitleContainer,
  ButtonContainer,
  ButtonsContainer,
  Separator,
  HeaderSeparator,
  Title,
  Footer,
} from "./styles";
import Typography from "../Typography/Typography";
import Icon from "../Icon/Icon";
import Button, { IButtonProps } from "../Button/Button";
import { NEUTRAL_SHADES } from "../../global-style";

export interface IPopupProps {
  open: boolean;
  onCloseHandler?: () => void;
  className?: string;
  outsideClick?: boolean;
  customWidth?: number;
  children: React.ReactNode;
  displayCenter?: boolean;
  customBgColor?: string;
}

export interface Compounds {
  Header: FC<{
    handleClose?: () => void;
    children?: React.ReactNode;
    headerSeparator?: boolean;
    style?: CSSProperties;
  }>;
  Body: FC<{ children: React.ReactNode; width?: number }>;
  Footer: FC<{ children: React.ReactNode }>;
  Button: FC<IButtonProps>;
  ButtonsContainer?: FC<{ children: React.ReactNode }>;
}

const Popup: FC<IPopupProps> & Compounds = ({
  open,
  onCloseHandler,
  children,
  className,
  customWidth = 500,
  displayCenter = false,
  customBgColor = NEUTRAL_SHADES.WHITE,
}) => {
  return (
    <Modal
      data-testid="popup"
      open={open}
      onClose={onCloseHandler}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      BackdropProps={{
        style: { backgroundColor: "rgba(0, 0, 0, 0.6))" },
      }}
    >
      <Container
        className={className}
        customWidth={customWidth}
        displayCenter={displayCenter}
        customBgColor={customBgColor}
      >
        {children}
      </Container>
    </Modal>
  );
};

Popup.Header = ({ children, handleClose, headerSeparator = false, style }) => {
  return (
    <>
      <TitleContainer style={{ ...style }}>
        <Title>
          {children && <Typography weight="bold">{children}</Typography>}
        </Title>
        {Boolean(handleClose) && (
          <IconContainer>
            <Icon
              component={"close" as ElementType<any>}
              className="close"
              onClick={handleClose}
              color="action"
              colorIcon="#000"
              data-testid="close-popup"
              size="xxs"
            />
          </IconContainer>
        )}
      </TitleContainer>
      {headerSeparator && <HeaderSeparator />}
    </>
  );
};

Popup.Body = ({ children, width }) => {
  return (
    <Body width={width}>
      <Typography>{children}</Typography>
    </Body>
  );
};
Popup.Footer = ({ children }) => {
  return (
    <Footer>
      <Typography>{children}</Typography>
    </Footer>
  );
};

Popup.Button = ({ children, ...props }) => {
  return (
    <ButtonContainer>
      <Button {...props}>{children}</Button>
    </ButtonContainer>
  );
};

Popup.ButtonsContainer = ({ children }) => {
  return (
    <ButtonsContainer>
      <Separator />
      {children}
    </ButtonsContainer>
  );
};

export default Popup;
