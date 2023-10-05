import styled, { css } from "styled-components";

import { SPACING, NEUTRAL_SHADES, BORDER_RADIUS } from "../../global-style";

export const Container = styled.div<{
  customWidth: number;
  displayCenter: boolean;
  customBgColor: string;
}>`
  ${({ customWidth, displayCenter, customBgColor }) => css`
    display: flex;
    align-items: ${displayCenter ? "center" : "flex-start"};
    flex-direction: column;
    padding: ${SPACING[3]} ${SPACING[4]};
    background-color: ${customBgColor};
    border-radius: ${SPACING[3]};
    outline: none;
    border-radius: ${SPACING[1]};
    position: relative;
    width: ${customWidth}px;
  `}
`;

export const IconContainer = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: ${NEUTRAL_SHADES[300]};
    border-radius: ${`${BORDER_RADIUS}px`};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 90%;
`;

export const Body = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

export const Footer = styled.div`
  margin-bottom: ${SPACING[3]};
`;

export const ButtonContainer = styled.div`
  margin: ${SPACING[3]} 0 0 ${SPACING[3]};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

export const Separator = styled.hr`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: ${NEUTRAL_SHADES[300]};
  border: none;
  margin: 0;
  padding: 0;
  right: 0;
`;

export const HeaderSeparator = styled(Separator)`
  position: block;
  margin-top: 48px;
`;
