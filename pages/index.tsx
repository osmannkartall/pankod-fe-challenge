import React, { useEffect } from "react";
import { TileCards, PageWrapper } from "@components";
import { useProgramsDB, useProgramsPageStore } from "@stores";
import { FlexColumn } from "@styles/shared-styled-components";

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

  return <PageWrapper><FlexColumn><TileCards /></FlexColumn></PageWrapper>;
};

export default Home;
