import React from "react";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { SxProps, TextField, Theme } from "@mui/material";
import { BgColors, helperTextStyles } from "../../global-style";
import { sxStyles, typeInputStyles } from "./styles";

export interface InputProps extends Omit<OutlinedInputProps, "error"> {
  bgColor?: BgColors;
  customeHeight?: number;
  customeWidth?: number;
  iconComponent?: JSX.Element;
  showError?: boolean | undefined;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  className,
  iconComponent,
  sx,
  type = "text",
  multiline = true,
  bgColor = BgColors.WHITE_BG,
  customeHeight,
  customeWidth,
  errorMessage,
  showError = false,
  onChange,
  ...props
}) => {
  return (
    <TextField
      data-testid="input"
      multiline={multiline}
      type={type}
      label={label}
      classes={{ root: className }}
      error={showError}
      fullWidth
      onChange={onChange}
      sx={sxStyles(sx as SxProps<Theme>, props as InputProps, customeWidth)}
      InputProps={{
        sx: {
          height: customeHeight ? customeHeight : "48px",
          background: typeInputStyles(bgColor),
        },
        ...props,
      }}
      helperText={showError && errorMessage}
      FormHelperTextProps={{ sx: { helperTextStyles } }}
    />
  );
};

export default Input;
