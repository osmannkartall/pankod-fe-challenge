import React from "react";
import styled from "styled-components";

const FetchResultWrapper = styled.div`
  font-size: 25px;
  padding: 40px 0;
`;

export const FetchResult: React.FC = ({ children }) => (
  <FetchResultWrapper>{children}</FetchResultWrapper>
);
