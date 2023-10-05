import styled from "styled-components";
import { createTheme, Theme } from "@mui/material/styles";

export const TableCellHeight = "52.6px";

export enum BgColors {
  WHITE_BG = "whiteBg",
  GRAY_BG = "grayBg",
}

export const colors = {
  white: "#ffff",
  black: "black",
  blue: "#0A66C2",
  green: "#B8C248",
  feedBG: "#1E1E1E",
  gray: "#737877",
  lightGray: "#949796",
  tabs: "#2DB8A1",
};

export const SPACING = {
  1: "4px",
  2: "8px",
  3: "16px",
  4: "24px",
  5: "32px",
  6: "40px",
  7: "48px",
  8: "64px",
  9: "128px",
  10: "256px",
  11: "512px",
};

export const FONT_WEIGHT = {
  1: "400",
  2: "600",
  3: "700",
};

export const BORDER_RADIUS = 6;
export const BOX_SHADOW = "rgba(0, 0, 0, 0.16)";

export const PRIMARY_COLOR = "#5B4DA3";
export const SECONDARY_COLOR = "#102465";
export const SUCCESS_COLOR = "#26A871";
export const ERROR_COLOR = "#DD3249";

export const PRIMARY_SHADES = {
  LIGHT_GRAY: "#FBFAFF",
  100: "#EFEDF6",
  200: "#DEDBED",
  300: "#CECAE3",
  400: "#ADA6D1",
  500: "#8C82BF",
  600: "#7C71B5",
  700: "#5B4DA3",
  800: "#493E82",
  900: "#372E62",
  DARK_PURPLE: "#E8E5F2",
};

export const WARNING_SHADES = {
  100: "#FCF5E3",
  200: "#F2D891",
  300: "#E8AF1B",
  400: "#F5CD68",
};

export const SECONDARY_SHADES = {
  100: "#F6FFFD",
  200: "#EEFFFB",
  300: "#DCFFF7",
  400: "#C2FFF2",
  500: "#A8FFEC",
  600: "#97E6D4",
  700: "#76B3A5",
  800: "#548076",
  900: "#324C47",
};

export const SUCCESS_SHADES = {
  50: "#EEF9F3",
  70: "#83CAA5",
  80: "#45BF8B",
  100: "#D4EEE3",
  200: "#A8DCC6",
  300: "#7DCBAA",
  400: "#51B98D",
  500: "#26A871",
  600: "#1E865A",
  700: "#176544",
  800: "#135439",
  900: "#4ECB71",
};

export const ERROR_SHADES = {
  50: "#FCE9E8",
  70: "#E45145",
  80: "#DD2617",
  100: "#F8D6DB",
  200: "#F1ADB6",
  300: "#EB8492",
  400: "#E45B6D",
  600: "#B1283A",
  700: "#851E2C",
  800: "#58141D",
};
export const NEUTRAL_SHADES = {
  WHITE: "#FFFFFF",
  50: "#FCFCFC",
  100: "#F9F9F9",
  150: "#F3F3F3",
  200: "#ECECEC",
  300: "#E6E6E6",
  400: "#E0E0E0",
  500: "#CACACA",
  600: "#B3B3B3",
  700: "#9D9D9D",
  800: "#868686",
  900: "#707070",
  1000: "#5A5A5A",
  1100: "#434343",
  1200: "#323232",
  GRAY: "#6C6C6C",
  TEXT_GRAY: "#5F5F5F",
  TEXT_DARK_GRAY: "#0A0A0A",
  LIGHT_GREY: "#f7f7f7",
  LIGHT_BLACK: "#333333",
  BLACK: "#000000",
};
export const LABELS_COLORS = {
  PINK: "#F8D8D7",
  YELLOW: "#FFFBC1",
  LIGHTBLUE: "#E2FEF8",
  LIGHTPURPLE: "#E6E2FE",
  ORANGE: "#FFE3D3",
  BLUE: "#3457D5",
  Hover_BLUE: "#0047AB",
  Dark_BLUE: "#0039a6",
};

export const ALERT_ICON_COLORS = {
  error: ERROR_SHADES[80],
  info: PRIMARY_SHADES[700],
  success: SUCCESS_SHADES[80],
  warning: WARNING_SHADES[400],
};

export const helperTextStyles = {
  color: "error.main",
  marginLeft: "8px",
  position: "absolute",
};

export const globaltheme: Theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    success: {
      main: SUCCESS_COLOR,
    },
    error: {
      main: ERROR_COLOR,
    },
    info: {
      main: NEUTRAL_SHADES.WHITE,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        a: {
          color: PRIMARY_COLOR,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          "&.MuiInputLabel-shrink": {
            color: `${NEUTRAL_SHADES[900]}`,
          },
        },
      },
    },
  },
  shape: {
    borderRadius: BORDER_RADIUS,
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
  },
});

export const AppWrapper = styled.div`
  @font-face {
    font-family: "Open Sans", sans-serif;
    src: url("./assets/fonts/openSans/OpenSans-Regular.ttf") format("opentype");
  }
  min-height: 100vh;
  max-width: 100%;
  font-size: 16px;
  /* background-color: ${NEUTRAL_SHADES[100]}; */
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  padding: 16px 80px 40px 80px;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 6px 40px;
  width: 100%;
  max-width: 1280px;
`;
