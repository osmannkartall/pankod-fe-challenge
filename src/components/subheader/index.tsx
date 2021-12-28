import React from "react";
import { GRAY1 } from "colors";
import { headerWrapperStyle } from "styles";

export const SubHeader: React.FC<{ info: string }> = (props: { info: string }) => {
  const titleText = `Popular ${props.info}`;

  return (
    <div style={{...headerWrapperStyle, backgroundColor: GRAY1 }}>
      <div style={{ fontSize: 28 }}>{titleText}</div>
    </div>
  );
};
