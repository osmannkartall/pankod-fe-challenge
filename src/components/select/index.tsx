import React from "react";
import { Select as AntSelect } from 'antd';
import { ProgramFilterOptions } from "@models";

const { Option } = AntSelect;

const cardWidth = 150;
const numCardForAlignment = 2;
const paddingForCard = 10;

interface ProgramFilterSelectProps {
  options: ProgramFilterOptions;
  handleChange: (value: string) => void;
};

export const ProgramFilterSelect: React.FC<ProgramFilterSelectProps> = (
  { options, handleChange }
) => {
  return (
    <AntSelect
      placeholder="Sort by"
      style={{
        width: cardWidth * numCardForAlignment + (numCardForAlignment - 1) * paddingForCard
      }}
      onChange={handleChange}
    >
      {
        Object.entries(options).map(([optionKey, optionValue]) => (
          <Option key={optionKey} value={optionKey}>{optionValue.title}</Option>
        ))
      }
    </AntSelect>
  );
};