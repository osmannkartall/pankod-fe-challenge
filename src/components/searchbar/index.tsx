import React from "react";
import { Input } from 'antd';
const { Search } = Input;

const cardWidth = 150;
const numCardForAlignment = 3;
const paddingForCard = 10;

export const Searchbar: React.FC = () => {

  const onSearch = (value: string) => console.log(value);

  return (
    <Search
      placeholder="Search..."
      allowClear
      enterButton
      onSearch={onSearch}
      style={{ width: cardWidth * numCardForAlignment +(numCardForAlignment - 1) * paddingForCard }}
    />
  );
};
