import React from "react";

import { StyledTypography } from "./styles";
import { NEUTRAL_SHADES } from "../../global-style";

export type typographyTypes =
  | "body"
  | "body-semibold"
  | "caption"
  | "x-small"
  | "btn-medium-big"
  | "button-sm"
  | "subheading-xl"
  | "heading-xxl";

export type weightType = "regular" | "semibold" | "bold" | "lighter";

export interface TypographyProps {
  type?: typographyTypes;
  weight?: weightType;
  color?: string;
  className?: string;
  children: React.ReactNode;
}
const Typography: React.FC<TypographyProps> = ({
  children,
  type = "body",
  weight = "regular",
  color = NEUTRAL_SHADES.BLACK,
  className,
}) => {
  return (
    <StyledTypography
      data-testid="typography"
      className={className}
      type={type}
      weight={weight}
      color={color}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
