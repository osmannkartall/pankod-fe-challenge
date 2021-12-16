import React from "react";
import { Header, FilterWrapper, Cards, Footer } from "@components";
import { SubHeader } from "@components/subheader";

const Movies: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header title="Demo Streaming" />
      <SubHeader info="Titles" />
      <FilterWrapper />
      <Cards />
      <Footer />
    </div>
  );
};

export default Movies;