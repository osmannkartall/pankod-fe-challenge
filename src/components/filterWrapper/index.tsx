import React from "react";
import { ProgramFilterOptions } from "@models";
import { useProgramsPageStore } from "@stores";
import { sortByAttribute } from "utils";
import { ProgramFilterSelect } from "..";
import { HORIZONTAL_PADDING } from "src/constants/styles";

const options: ProgramFilterOptions = {
  "yearDesc": {
    title: "Sort by year in descending order.",
    filterAttribute: "releaseYear",
    sortOrder: "desc",
  },
  "yearAsc": {
    title: "Sort by year in ascending order.",
    filterAttribute: "releaseYear",
    sortOrder: "asc",
  },
  "titleDesc": {
    title: "Sort by title in descending order.",
    filterAttribute: "title",
    sortOrder: "desc",
  },
  "titleAsc": {
    title: "Sort by title in ascending order.",
    filterAttribute: "title",
    sortOrder: "asc",
  },
};

export const FilterWrapper: React.FC = ({ children }) => {
  const { programs, setPrograms } = useProgramsPageStore();

  const handleChange = (optionValue: string) => {
    const filterAttribute = options[optionValue].filterAttribute;
    const sortOrder = options[optionValue].sortOrder;
    const sortedPrograms = [ ...programs ];

    sortByAttribute(sortedPrograms, filterAttribute, sortOrder);
    setPrograms(sortedPrograms);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: `20px ${HORIZONTAL_PADDING}px`,
      }}
    >
      {children}
      <ProgramFilterSelect options={options} handleChange={handleChange} />
    </div>
  );
};
