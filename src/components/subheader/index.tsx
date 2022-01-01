import React from "react";
import { GRAY1 } from "colors";
import { Padder } from "@components";
import { ColorWrapper, HeaderTitle, HeaderWrapper } from "@styles/shared-styled-components";

export const SubHeader: React.FC<{ info: string }> = (props: { info: string }) => {
  const titleText = `Popular ${props.info}`;

  return (
    <ColorWrapper backgroundColor={GRAY1}>
      <Padder>
        <HeaderWrapper backgroundColor={GRAY1}>
          <HeaderTitle fontSize={28}>{titleText}</HeaderTitle>
        </HeaderWrapper>
      </Padder>
    </ColorWrapper>
  );
};
