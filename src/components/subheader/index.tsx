import React from "react";
import { GRAY1, WHITE } from "src/constants/colors";

export const SubHeader: React.FC<{ info: string }> = (props: { info: string }) => {
  const titleText = `Popular ${props.info}`;

  return (
    <div
      style={{
        backgroundColor: GRAY1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 0px 10px 200px",
      }}
    >
      <div style={{ fontSize: 28, color: WHITE }}>{titleText}</div>
    </div>
  );
};
