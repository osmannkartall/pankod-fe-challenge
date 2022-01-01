import { WHITE } from "colors";
import styled from "styled-components";
import { BREAKPOINTS } from "styles";

export const HeaderWrapper = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  color: ${WHITE};
  padding-top: 16px;
  background-color: ${props => props.backgroundColor};
  justify-content: space-between;

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 16px 0;
  }
`;

export const HeaderTitle = styled.div<{ fontSize: number }>`
  font-size: ${props => props.fontSize}px;
`;

export const ColorWrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
`;

export const FlexColumn = styled.div`
  flex: 1;
  flex-direction: column;
`;
