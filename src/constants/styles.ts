import React from "react";
import { PRIMARY, WHITE } from "./colors";

export const CARD_WIDTH = 192;

export const CARD_HEIGHT = 250;

export const HORIZONTAL_PADDING = 200;

export const headerWrapperStyle: React.CSSProperties = {
  backgroundColor: PRIMARY,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `10px ${HORIZONTAL_PADDING}px 0px ${HORIZONTAL_PADDING}px`,
  color: WHITE,
};
