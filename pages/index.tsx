import React, { useEffect } from "react";
import { TileCards, PageWrapper } from "@components";
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

  return <PageWrapper><TileCards /></PageWrapper>;
};

export default Home;
