import React from "react";
import { Select as AntSelect } from 'antd';
import { ProgramFilterOptions } from "@models";
import { BREAKPOINTS, CARD_PADDING } from "styles";
import styled from "styled-components";

interface ProgramFilterSelectProps {
  options: ProgramFilterOptions;
  handleChange: (value: string) => void;
}

const SelectStyle = styled(AntSelect)`
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

export const ProgramFilterSelect: React.FC<ProgramFilterSelectProps> = (
  { options, handleChange }
) => {
  return (
    // TODO: fix the ts warning
    <SelectStyle placeholder="Sort by" onChange={handleChange}>
      {
        Object.entries(options).map(([optionKey, optionValue]) => (
          <AntSelect.Option key={optionKey} value={optionKey}>{optionValue.title}</AntSelect.Option>
        ))
      }
    </SelectStyle>
  );
};