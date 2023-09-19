import { LoadingButtonProps as MuiLoadingButtonProps } from "@mui/lab";

import { buttonTypes } from "./Button";
import { textColorDictionary } from "./styles";
import { NEUTRAL_SHADES } from "../../global-style";

export const useButton = (
  disabled: boolean,
  isLoading: boolean,
  buttonType: buttonTypes,
  textColor: string
) => {
  const typographyFontColor = disabled
    ? NEUTRAL_SHADES[600]
    : textColor || textColorDictionary[buttonType];
  const typographyColor = isLoading ? "transparent" : typographyFontColor;

  const iconColor = isLoading
    ? "transparent"
    : disabled
    ? NEUTRAL_SHADES[600]
    : textColor || textColorDictionary[buttonType];

  return {
    typographyColor,
    iconColor,
  };
};
