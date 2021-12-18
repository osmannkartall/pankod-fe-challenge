import React, { useEffect } from "react";
import { Header, SubHeader, FilterWrapper, Footer, ProgramCards, Searchbar } from "@components";
import { getPrograms, searchPrograms } from "src/services/programsService";
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

  const onSearch = async (searchText: string) => {
    if (searchText.length > 2) {
      const results = await searchPrograms("series", searchText);
  
      if (Array.isArray(results)) {
        setPrograms(results);
      }
    }
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header title="Demo Streaming" />
      <SubHeader info="Titles" />
      <FilterWrapper>
        <Searchbar onSearch={onSearch} />
      </FilterWrapper>
      <ProgramCards />
      <Footer />
    </div>
  );
};

export default Series;