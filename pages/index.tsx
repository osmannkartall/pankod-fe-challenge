import React from "react";

import { Header, Cards, Footer } from "@components";
import { SubHeader } from "@components/subheader";

const Home: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header title="Demo Streaming" />
      <SubHeader info="Titles" />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
