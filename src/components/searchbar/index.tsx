import React from "react";
import { Input } from 'antd';
import { BREAKPOINTS, CARD_PADDING } from "styles";
import styled from "styled-components";
const { Search } = Input;

interface Searchbar {
  onSearch: (value: string) => void;
}

const SearchbarWrapper = styled(Search)`
  flex: calc(200% / 7 - ${CARD_PADDING}px);
  max-width: calc(200% / 7 - ${CARD_PADDING}px);

  @media (width < ${BREAKPOINTS.md}) {
    flex: calc(200% / 6 - ${CARD_PADDING}px);
    max-width: calc(200% / 6 - ${CARD_PADDING}px);
  }

  @media (width < ${BREAKPOINTS.sm}) {
    flex: calc(100% / 3 - ${CARD_PADDING}px);
    max-width: calc(100% / 3 - ${CARD_PADDING}px);
  }

  @media (width < ${BREAKPOINTS.xs}) {
    flex: calc(100% / 2 - ${CARD_PADDING}px);
    max-width: calc(100% / 2 - ${CARD_PADDING}px);
  }
`;

export const Searchbar: React.FC<Searchbar> = ({ onSearch }) => {
  return (
    <SearchbarWrapper
      placeholder="Search..."
      allowClear
      enterButton
      onSearch={onSearch}
    />
  );
};
