import React from "react";
import { Select as AntSelect } from 'antd';

const { Option } = AntSelect;

const cardWidth = 150;
const numCardForAlignment = 2;
const paddingForCard = 10;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

export const Select: React.FC = () => {

  return (
    <AntSelect
      placeholder="Sort by"
      style={{ width: cardWidth * numCardForAlignment +(numCardForAlignment - 1) * paddingForCard }}
      onChange={handleChange}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </AntSelect>
  );
};
