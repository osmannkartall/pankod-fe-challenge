import React, { useEffect } from "react";
import { Header, SubHeader, Footer, TileCards } from "@components";
import { useStore } from "src/store";

const Home: React.FC = () => {
  const { reset } = useStore();
  
  useEffect(() => {
    reset();
  }, [])

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header title="Demo Streaming" />
      <SubHeader info="Titles" />
      <TileCards />
      <Footer />
    </div>
  );
};

export default Home;
