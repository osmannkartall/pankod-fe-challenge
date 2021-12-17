import React from "react";
import { ProgramFilterOptions } from "src/models/ProgramFilterOptions";
import { Searchbar, ProgramFilterSelect } from "..";

const options: ProgramFilterOptions = {
  "yearDesc": {
    title: "Sort by year in descending order.",
    filterAttribute: "year",
    sortOrder: "desc",
  },
  "yearAsc": {
    title: "Sort by year in ascending order.",
    filterAttribute: "year",
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

function handleChange(optionValue: string) {
  console.log(options[optionValue].filterAttribute, options[optionValue].sortOrder);
}

export const FilterWrapper: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 200px",
      }}
    >
      <Searchbar />
      <ProgramFilterSelect options={options} handleChange={handleChange} />
    </div>
  );
};
