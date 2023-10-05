import styled from "styled-components";

import { buttonTypes } from "./Button";
import {
  LABELS_COLORS,
  NEUTRAL_SHADES,
  PRIMARY_COLOR,
  PRIMARY_SHADES,
} from "../../global-style";
import Typography, { typographyTypes } from "../Typography/Typography";
import { ButtonProps } from "@mui/material";

export const buttonStyle = {
  textTransform: "none",
  whiteSpace: "nowrap",
  "&.Mui-disabled": {
    pointerEvents: "unset",
    cursor: "not-allowed",
    backgroundColor: NEUTRAL_SHADES[200],
  },
  "&:hover": {
    backgroundColor: NEUTRAL_SHADES[200],
  },
  primary: {
    backgroundColor: LABELS_COLORS.BLUE,
    border: `1px solid transparent`,
    boxShadow: "none",
    "&:hover:not(.Mui-disabled)": {
      backgroundColor: LABELS_COLORS.Hover_BLUE,
    },
    "&:focus:not(.Mui-disabled)": {
      backgroundColor: LABELS_COLORS.Dark_BLUE,
    },
    "&&.MuiLoadingButton-loading": {
      backgroundColor: PRIMARY_COLOR,
      border: `1px solid transparent`,
    },
  },
  secondary: {
    backgroundColor: PRIMARY_SHADES[100],
    border: `1px solid ${PRIMARY_COLOR}`,
    "&:hover:not(.Mui-disabled)": {
      backgroundColor: PRIMARY_SHADES[100],
    },
    "&&.MuiLoadingButton-loading": {
      backgroundColor: PRIMARY_SHADES[100],
    },
    "&&.Mui-disabled:not(.MuiLoadingButton-loading)": {
      backgroundColor: NEUTRAL_SHADES[100],
      border: `1px solid ${NEUTRAL_SHADES[300]}`,
    },
  },
  secondaryGrayOnGray: {
    backgroundColor: "transparent",
    border: `1px solid ${NEUTRAL_SHADES[500]}`,
    "&:hover:not(.Mui-disabled)": {
      backgroundColor: NEUTRAL_SHADES[200],
    },
    "&:focus:not(.Mui-disabled)": {
      backgroundColor: NEUTRAL_SHADES[300],
      boxShadow: `inset 0px 0px 6px ${NEUTRAL_SHADES.BLACK}1A`,
    },
    "&&.Mui-disabled:not(.MuiLoadingButton-loading)": {
      backgroundColor: NEUTRAL_SHADES[100],
      border: `1px solid ${NEUTRAL_SHADES[200]}`,
    },
  },
  secondaryGrayOnWhite: {
    backgroundColor: "transparent",
    border: `1px solid ${NEUTRAL_SHADES[500]}`,
    "&:hover:not(.Mui-disabled)": {
      backgroundColor: NEUTRAL_SHADES[150],
      border: `1px solid ${NEUTRAL_SHADES[700]}`,
    },
    "&:focus:not(.Mui-disabled)": {
      backgroundColor: NEUTRAL_SHADES[200],
      border: `1px solid ${NEUTRAL_SHADES[700]}`,
      boxShadow: `inset 0px 0px 6px ${NEUTRAL_SHADES.BLACK}1A`,
    },
    "&&.Mui-disabled": {
      backgroundColor: "transparent",
      border: `1px solid ${NEUTRAL_SHADES[200]}`,
    },
  },
  tertiary: {
    backgroundColor: "transparent",
    border: `1px solid transparent`,

    "&:hover:not(.Mui-disabled)": {
      backgroundColor: PRIMARY_SHADES[100],
    },
    "&:focus:not(.Mui-disabled)": {
      backgroundColor: PRIMARY_SHADES[100],
      boxShadow: `inset 0px 0px 6px ${PRIMARY_SHADES[100]}14`,
    },
    "&&.Mui-disabled": {
      backgroundColor: NEUTRAL_SHADES[100],
    },
    "&&.MuiLoadingButton-loading": {
      backgroundColor: "transparent",
    },
  },
  tertiaryGrayOnGray: {
    backgroundColor: "transparent",
    border: `1px solid transparent`,

    "&:hover:not(.Mui-disabled)": {
      backgroundColor: NEUTRAL_SHADES[300],
    },
    "&&.Mui-disabled": {
      backgroundColor: "transparent",
      color: NEUTRAL_SHADES[600],
    },
  },
  tertiaryGrayOnWhite: {
    backgroundColor: "transparent",
    border: `1px solid transparent`,

    "&:hover:not(.Mui-disabled)": {
      backgroundColor: NEUTRAL_SHADES[150],
    },
    "&:focus:not(.Mui-disabled)": {
      backgroundColor: NEUTRAL_SHADES[200],
      boxShadow: `inset 0px 0px 6px ${NEUTRAL_SHADES.BLACK}14`,
    },
    "&&.Mui-disabled": {
      backgroundColor: "transparent",
      color: NEUTRAL_SHADES[600],
    },
  },
  link: {
    backgroundColor: "transparent",
    border: `1px solid transparent`,
    textDecoration: `underline ${PRIMARY_SHADES[800]}`,

    "&:hover:not(.Mui-disabled)": {
      backgroundColor: "transparent",
      textDecoration: `underline ${PRIMARY_SHADES[800]}`,
    },
    "&:focus:not(.Mui-disabled)": {
      backgroundColor: "transparent",
      textDecoration: `underline ${PRIMARY_SHADES[800]}`,
    },
    "&&.Mui-disabled": {
      backgroundColor: "transparent",
      color: NEUTRAL_SHADES[600],
      textDecoration: "none",
      textDecorationLine: "none",
    },
  },
  linkOnDark: {
    backgroundColor: "transparent",
    border: `1px solid transparent`,

    "&:hover:not(.Mui-disabled)": {
      backgroundColor: "transparent",
      textDecorationLine: "underline",
      textDecorationColor: NEUTRAL_SHADES.WHITE,
    },
    "&:focus:not(.Mui-disabled)": {
      backgroundColor: "transparent",
      textDecoration: `underline ${NEUTRAL_SHADES.WHITE}`,
    },
    "&&.Mui-disabled": {
      backgroundColor: "transparent",
      color: NEUTRAL_SHADES[800],
      textDecorationLine: "none",
    },
  },
};

export const buttonSizes: {
  small: { padding: string; height: number };
  medium: { padding: string; height: number };
  large: { padding: string; height: number };
  smallOnlyIcon: { padding: string; height: number; minWidth: number };
  mediumOnlyIcon: { padding: string; height: number; minWidth: number };
  largeOnlyIcon: { padding: string; height: number; minWidth: number };
} = {
  small: {
    padding: "9px 16px",
    height: 32,
  },
  smallOnlyIcon: {
    padding: "8px",
    height: 32,
    minWidth: 32,
  },
  medium: {
    padding: "8px 16px",
    height: 36,
  },
  mediumOnlyIcon: {
    padding: "8px",
    height: 36,
    minWidth: 36,
  },
  large: {
    padding: "10px 20px",
    height: 40,
  },
  largeOnlyIcon: {
    padding: "8px",
    height: 40,
    minWidth: 40,
  },
};

export const buttonFontSizes: {
  [size in ButtonProps["size"] as any]: typographyTypes;
} = {
  small: "button-sm",
  medium: "btn-medium-big",
  large: "btn-medium-big",
};

export const textColorDictionary = {
  primary: NEUTRAL_SHADES.WHITE,
  secondary: PRIMARY_COLOR,
  secondaryGrayOnGray: NEUTRAL_SHADES[1100],
  secondaryGrayOnWhite: NEUTRAL_SHADES[1100],
  tertiary: PRIMARY_COLOR,
  tertiaryGrayOnGray: NEUTRAL_SHADES[1100],
  tertiaryGrayOnWhite: NEUTRAL_SHADES[1100],
  link: PRIMARY_COLOR,
  linkOnDark: NEUTRAL_SHADES.WHITE,
};

export const textColorOnHoverDictionary = {
  ...textColorDictionary,
  primary: textColorDictionary.primary,
  secondary: PRIMARY_SHADES[800],
  tertiary: PRIMARY_SHADES[800],
  link: PRIMARY_SHADES[800],
};

export const textColorOnFocusDictionary = {
  ...textColorDictionary,
  secondaryGrayOnGray: NEUTRAL_SHADES.BLACK,
  secondaryGrayOnWhite: NEUTRAL_SHADES.BLACK,
  tertiary: PRIMARY_SHADES[900],
  tertiaryGrayOnGray: NEUTRAL_SHADES.BLACK,
  tertiaryGrayOnWhite: NEUTRAL_SHADES.BLACK,
  link: PRIMARY_SHADES[900],
};

export const loaderStyles: {
  primary: "info";
  secondary: "primary";
  secondaryGrayOnGray: "secondary";
  secondaryGrayOnWhite: "secondary";
  tertiary: "primary";
  tertiaryGrayOnWhite: "secondary";
  tertiaryGrayOnGray: "secondary";
  link: "primary";
  linkOnDark: "primary";
} = {
  primary: "info",
  secondary: "primary",
  secondaryGrayOnGray: "secondary",
  secondaryGrayOnWhite: "secondary",
  tertiary: "primary",
  tertiaryGrayOnGray: "secondary",
  tertiaryGrayOnWhite: "secondary",
  link: "primary",
  linkOnDark: "primary",
};

export const ButtonTypography = styled(Typography)<{
  buttonType: buttonTypes;
  isLoading?: boolean;
  isDisable?: boolean;
  typographyColor?: string;
}>`
  color: ${(props) =>
    props.isLoading
      ? "transparent"
      : props.isDisable
      ? NEUTRAL_SHADES[600]
      : textColorDictionary[props.buttonType]};

  &:disabled {
    color: ${NEUTRAL_SHADES[600]};
  }

  &:hover {
    color: ${(props) =>
      !props.isLoading &&
      !props.isDisable &&
      textColorOnHoverDictionary[props.buttonType]};
  }

  &:focus {
    color: ${(props) =>
      !props.isLoading &&
      !props.isDisable &&
      textColorOnFocusDictionary[props.buttonType]};
  }
`;
