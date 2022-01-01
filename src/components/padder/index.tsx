import React from "react";
import styled from "styled-components";
import { BREAKPOINTS, HORIZONTAL_PADDING } from "styles";

interface Padder {
  vertical?: number;
  horizontal?: number;
}

const PadderWrapper = styled("div")<Padder>`
  padding: ${(props) =>  `${props.vertical}px ${props.horizontal}px`};

  @media (width < ${BREAKPOINTS.lg}) {
    padding: ${(props) => `${props.vertical}px ${props.horizontal ? props.horizontal - 120 : 0}px`};
  }

  @media (width < ${BREAKPOINTS.md}) {
    padding: ${(props) => `${props.vertical}px ${props.horizontal ? props.horizontal - 160 : 0}px`};
  }

  @media (width < ${BREAKPOINTS.sm}) {
    padding: ${(props) => `${props.vertical}px ${props.horizontal ? props.horizontal - 180 : 0}px`};
  }
`;

export const Padder: React.FC<Padder> = ({ 
  children,
  vertical = 0,
}) => (
  <PadderWrapper vertical={vertical} horizontal={HORIZONTAL_PADDING}>{children}</PadderWrapper>
);

export const CardsPadder: React.FC<Padder> = ({ 
  children,
  vertical = 0,
  horizontal,
}) => (
  <PadderWrapper vertical={vertical} horizontal={horizontal}>{children}</PadderWrapper>
);
