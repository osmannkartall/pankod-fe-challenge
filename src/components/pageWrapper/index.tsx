import React from "react";
import { Header, SubHeader, Footer } from "@components";

export const PageWrapper: React.FC = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header title="DEMO Streaming" />
      <SubHeader info="Titles" />
      {children}
      <Footer />
    </div>
  );
};
