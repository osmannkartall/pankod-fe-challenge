import React from "react";
import { Searchbar, Select } from "..";

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
      <Select />
    </div>
  );
};
