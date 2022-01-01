import React from "react";
import { Button } from 'antd';
import { GRAY1, PRIMARY, WHITE } from "colors";
import { Padder } from "@components";
import styled from "styled-components";
import { ColorWrapper, HeaderTitle, HeaderWrapper } from "@styles/shared-styled-components";

const HeaderButtonsWrapper = styled.div`
  @media (width < 768px) {
    margin: 16px 0;
  }
`;

const HeaderButtonLogin = styled(Button)`
  color: ${WHITE};
  margin-right: 30px;
`;

const HeaderButtonTrial = styled(Button)`
  background-color: ${GRAY1};
`;

export const Header: React.FC<{ title: string }> = (props: { title: string }) => {
  return (
    <ColorWrapper backgroundColor={PRIMARY}>
      <Padder>
        <HeaderWrapper backgroundColor={PRIMARY}>
          <HeaderTitle fontSize={40}>{props.title}</HeaderTitle>
          <HeaderButtonsWrapper>
            <HeaderButtonLogin type="link" size="large">
              Log in
            </HeaderButtonLogin>
            <HeaderButtonTrial type="primary" size="large">
              Start your free trial
            </HeaderButtonTrial>
          </HeaderButtonsWrapper>
      </HeaderWrapper>
      </Padder>
    </ColorWrapper>
  );
};
