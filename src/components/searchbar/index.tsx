import React from "react";
import { Input } from 'antd';
import { CARD_WIDTH } from "styles";
const { Search } = Input;

const numCardForAlignment = 2;

interface Searchbar {
  onSearch: (value: string) => void;
}

export const Searchbar: React.FC<Searchbar> = ({ onSearch }) => {
  return (
    <Search
      placeholder="Search..."
      allowClear
      enterButton
      onSearch={onSearch}
      style={{ width: CARD_WIDTH * numCardForAlignment }}
    />
  );
};
