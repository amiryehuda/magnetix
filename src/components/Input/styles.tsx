import { SxProps, Theme } from "@mui/material/styles";
import {
  BORDER_RADIUS,
  ERROR_SHADES,
  NEUTRAL_SHADES,
  PRIMARY_COLOR,
  BgColors,
} from "../../global-style";
import { InputProps } from "./Input";

export const sxStyles = (
  sx: SxProps<Theme>,
  props: InputProps,
  customeWidth?: number
): SxProps<Theme> => {
  const defaultStyles = {
    fontSize: 14,
    width: customeWidth ? customeWidth : props.fullWidth ? "100%" : 265,
    input: {
      padding: 2,
      "&::placeholder": {
        opacity: 1,
        color: `${NEUTRAL_SHADES[800]}`,
      },
    },
    "& .MuiInputLabel-root:not(.Mui-error)": {
      color: NEUTRAL_SHADES[900],
    },
    "& label": {
      "&.Mui-focused:not(.Mui-error)": {
        marginLeft: 0,
        color: `${NEUTRAL_SHADES[1000]}`,
      },
      "&.Mui-focused.Mui-error": {
        marginLeft: 0,
        color: `${ERROR_SHADES[80]} !important`,
      },
    },
    "& textarea": {
      "&::placeholder": {
        color: `${NEUTRAL_SHADES[800]}`,
        opacity: 1,
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: `1px solid ${NEUTRAL_SHADES[500]}`,
        borderRadius: `${BORDER_RADIUS}px`,
      },
      "&:hover:not(.Mui-disabled):not(.Mui-error) fieldset": {
        borderColor: `${NEUTRAL_SHADES[1000]}`,
        background: `${NEUTRAL_SHADES[500]}`,
        opacity: 0.3,
      },
      "&.Mui-focused:not(.Mui-disabled):not(.Mui-error) fieldset": {
        border: `1px solid ${PRIMARY_COLOR}`,
        background: "none",
        opacity: 1,
      },
      "input:-webkit-autofill": {
        boxShadow: `0 0 0 30px ${NEUTRAL_SHADES.WHITE} inset !important`,
        fontSize: "14px !important",
        "&:hover": {
          boxShadow: `0 0 0 30px ${NEUTRAL_SHADES.WHITE} inset !important`,
          fontSize: "14px !important",
        },
        "&:focus": {
          boxShadow: `0 0 0 30px ${NEUTRAL_SHADES.WHITE} inset !important`,
          fontSize: "14px !important",
        },
      },
    },
  };

  const focusedStyles = {
    "&&.Mui-focused": {},
  };
  const disabledStyles = {
    "& .MuiOutlinedInput-root.Mui-disabled": {
      "& fieldset": {
        background: `${NEUTRAL_SHADES[100]}`,
        border: `1px solid ${NEUTRAL_SHADES[500]}`,
        opacity: 0.3,
      },
    },
    "& .MuiInputLabel-root.Mui-disabled": {
      color: `${NEUTRAL_SHADES[600]}`,
    },
  };
  const errorStyles = {
    "& .MuiInputLabel-root": {
      color: `${NEUTRAL_SHADES[900]} !important`,
      marginBlock: "-3px",
    },
    "& .MuiInputLabel-shrink": {
      marginBlock: 0,
    },
    "& label": {
      "&.Mui-focused": {
        color: `${ERROR_SHADES[80]}`,
      },
    },
    ".MuiOutlinedInput-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        border: `1px solid ${ERROR_SHADES[80]}`,
      },
  };

  return [
    defaultStyles,
    focusedStyles,
    disabledStyles,
    errorStyles,
    ...(Array.isArray(sx) ? sx : [sx]),
  ];
};

export const typeInputStyles = (bgColor: BgColors) => {
  return bgColor === BgColors.GRAY_BG
    ? `${NEUTRAL_SHADES[100]}`
    : `${NEUTRAL_SHADES.WHITE}`;
};
