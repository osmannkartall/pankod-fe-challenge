import React, { useEffect } from "react";
import { Header, SubHeader, FilterWrapper, Cards, Footer } from "@components";
import { filterByAttribute } from "src/utils";

const programsPath = 'mock/sample.json';

const headers = { 
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const Movies: React.FC = () => {

  useEffect(() => {
    let mounted = true;
    
    const getMovies = async () => {
      try {
        const response = await fetch(programsPath, { headers })
        const programs = await response.json();      

        if (Array.isArray(programs?.entries)) {
          const movies = filterByAttribute(programs.entries, "programType", "movie")
          console.log(movies);
        } else {
          throw Error("An error occured");
        }
      } catch (err) {
        console.error(new Date().toLocaleString(), err);
      }
    }

    if (mounted) {
      getMovies();
    }

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
      <Cards />
      <Footer />
    </div>
  );
};

export default Movies;