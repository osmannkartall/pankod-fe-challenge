import React, { useEffect } from "react";
import { Header, SubHeader, Footer, TileCards } from "@components";
import { useProgramsDB, useProgramsPageStore } from "@stores";

const Home: React.FC = () => {
  const { reset } = useProgramsPageStore();
  const { programsDB, createProgramsDB } = useProgramsDB();
  
  useEffect(() => {
    reset();
  }, [])
  
  useEffect(() => {
    if (!programsDB.length) {
      createProgramsDB();
    }
  }, [])

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header title="DEMO Streaming" />
      <SubHeader info="Titles" />
      <TileCards />
      <Footer />
    </div>
  );
};

export default Home;
