import React from "react";
import { Select as AntSelect } from 'antd';
import { ProgramFilterOptions } from "@models";
import { CARD_WIDTH } from "styles";

const { Option } = AntSelect;

const numCardForAlignment = 2;

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
      style={{ width: CARD_WIDTH * numCardForAlignment }}
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