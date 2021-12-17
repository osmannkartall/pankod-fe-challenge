import React, { useEffect } from "react";
import { Header, SubHeader, FilterWrapper, Footer, ProgramCards } from "@components";
import { useStore } from "src/store";
import { getPrograms } from "src/services/programsService";

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

export default Movies;