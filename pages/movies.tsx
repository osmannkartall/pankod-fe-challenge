import React, { useEffect } from "react";
import { Header, SubHeader, FilterWrapper, Footer, ProgramCards, Searchbar } from "@components";
import { useStore } from "src/store";
import { getPrograms, searchPrograms } from "src/services/programsService";

const Movies: React.FC = () => {
  const { setPrograms } = useStore();

  useEffect(() => {
    let mounted = true;
    
    const fetchMovies = async () => {
      const movies = await getPrograms("movie");

      if (mounted && Array.isArray(movies)) {
        setPrograms(movies);
      }
    }

    fetchMovies();

    return () => {
      mounted = false;
    }
  }, [])

  const onSearch = async (searchText: string) => {
    if (searchText.length > 2) {
      const results = await searchPrograms("movie", searchText);
  
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

export default Movies;