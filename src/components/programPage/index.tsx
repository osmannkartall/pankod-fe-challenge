import React, { useEffect } from "react";
import { Header, SubHeader, FilterWrapper, Footer, ProgramCards, Searchbar } from "@components";
import { useProgramsDB, useProgramsPageStore } from "src/store";
import { searchPrograms } from "src/services/programsService";
import { Button } from "antd";
import { filterByAttribute } from "src/utils";

// TODO: create enum for programType
const ProgramPage: React.FC<{ programType: "movie" | "series" }> = ({ programType })  => {
  const {
    programs,
    setPrograms,
    page,
    setPage,
    loading,
    setLoading,
    error,
    setError,
    hasMore,
    setHasMore,
  } = useProgramsPageStore();

  const { programsDB } = useProgramsDB();

  const fetchPrograms = async () => {
    try {
      const { hasMoreEntries, entries } = await filterByAttribute(programsDB, "programType", programType, page);
      
      setPrograms([...programs, ...entries]);
      setPage(page + 1);
      setHasMore(hasMoreEntries);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const simulateFetch = async () => {
    if (hasMore) {
      setLoading(true);
      setTimeout(fetchPrograms, 1000);
    }
  }

  useEffect(() => {
    simulateFetch();
  }, [])

  const onSearch = async (searchText: string) => {
    if (searchText.length > 2) {
      const results = await searchPrograms(programType, searchText);
  
      if (Array.isArray(results)) {
        setPrograms(results);
      }
    }
  }

  return (
    <div style={{ flex: 1, flexDirection: "column" }}>
      <Header title="DEMO Streaming" />
      <SubHeader info="Titles" />
      <div style={{ flex: 1, flexDirection: "column", minHeight: "100vh" }}>
        { !loading && <FilterWrapper><Searchbar onSearch={onSearch} /></FilterWrapper> }
        { programs?.length ? <ProgramCards /> : null }
        { loading && <div style={{ fontSize: 20, padding: "40px 200px" }}>Loading...</div> }
        { 
          error && (
            <div style={{ fontSize: 20, padding: "40px 200px" }}>Oops, something went wrong...</div>
          )
        }
        {
          hasMore && programs?.length && !loading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 50,
              }}
            >
              <Button type="primary" onClick={simulateFetch} style={{ width: 150 }}>
                Load More
              </Button>
            </div>
          ) : null
        }
        {
          !hasMore && !programs?.length ? (
            <div style={{ fontSize: 20, padding: "40px 200px" }}>No program found...</div>
          ) : null
        }
      </div>

      <Footer />
    </div>
  );
};

export default ProgramPage;
