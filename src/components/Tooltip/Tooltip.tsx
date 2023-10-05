import { FC, ReactElement, ReactNode } from "react";
import { Tooltip as MuiTooltip, TooltipProps } from "@mui/material";
import { tooltipPopperStyles } from "./styles";

export interface ITooltipProps extends TooltipProps {
  title: string | number;
  children: ReactElement;
}

export const Tooltip: FC<ITooltipProps> = ({ title, children, ...props }) => {
  return (
    <MuiTooltip
      data-testid="tooltip"
      title={title}
      arrow
      placement="top"
      PopperProps={{
        sx: tooltipPopperStyles,
      }}
      sx={{
        maxWidth: "300px",
      }}
      {...props}
    >
      {children}
    </MuiTooltip>
  );
};
