import { FC } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import {
  LoadingButton as MuiLoadingButton,
  LoadingButtonProps as MuiLoadingButtonProps,
} from "@mui/lab";
import { SxProps, Theme } from "@mui/system";

import { useButton } from "./useButton";
import {
  buttonFontSizes,
  buttonStyle,
  ButtonTypography,
  loaderStyles,
} from "./styles";
import { StyledIconProps } from "../Icon/styles";

export type buttonTypes =
  | "primary"
  | "secondary"
  | "secondaryGrayOnGray"
  | "secondaryGrayOnWhite"
  | "tertiary"
  | "tertiaryGrayOnGray"
  | "tertiaryGrayOnWhite"
  | "link"
  | "linkOnDark";

export type iconPositionTypes = "center" | "start" | "end";

export interface IButtonProps extends MuiLoadingButtonProps {
  buttonType?: buttonTypes;
  children?: JSX.Element | string;
  textColor?: string;
  disabled?: boolean;
  title?: string;
  isLoading?: boolean;
  sourceIcon?: boolean;
  iconPosition?: iconPositionTypes;
  className?: string;
  iconSize?: StyledIconProps;
}

const Button: FC<IButtonProps> = ({
  textColor = "white",
  size = "medium",
  sx = buttonStyle,
  variant = "text",
  disabled = false,
  title = "Button",
  isLoading = false,
  sourceIcon = false,
  iconPosition = "start",
  buttonType = "primary",
  children,
  className,
  iconSize,
  ...props
}) => {
  const { typographyColor } = useButton(
    disabled,
    isLoading,
    buttonType,
    textColor
  );

  const customSx = { ...buttonStyle, ...sx } as SxProps<Theme>;

  return (
    <MuiLoadingButton
      data-testid="button"
      loading={isLoading}
      loadingIndicator={
        <CircularProgress color={loaderStyles[buttonType]} size={20} />
      }
      sx={[buttonStyle[buttonType]]}
      size={size}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      <ButtonTypography
        isLoading={isLoading}
        isDisable={disabled}
        buttonType={buttonType}
        type={buttonFontSizes[size]}
        color={typographyColor}
      >
        {children}
      </ButtonTypography>
    </MuiLoadingButton>
  );
};

export default Button;
