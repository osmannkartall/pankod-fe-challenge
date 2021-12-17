import React, { useEffect } from "react";
import { Header, SubHeader, FilterWrapper, Footer, ProgramCards } from "@components";
import { getPrograms } from "src/services/programsService";
import { useStore } from "src/store";

const Series: React.FC = () => {
  const { setPrograms } = useStore();

  useEffect(() => {
    let mounted = true;
    
    const fetchSeries = async () => {
      const series = await getPrograms("series");

      if (mounted && Array.isArray(series)) {
        setPrograms(series);
      }
    }

    fetchSeries();

    return () => {
      mounted = false;
    }
  }, [])

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header title="Demo Streaming" />
      <SubHeader info="Titles" />
      <FilterWrapper />
      <ProgramCards />
      <Footer />
    </div>
  );
};

export default Series;