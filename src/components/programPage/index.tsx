import React, { useEffect, useState } from "react";
import { Header, SubHeader, FilterWrapper, Footer, ProgramCards, Searchbar } from "@components";
import { useProgramsDB, useProgramsPageStore } from "src/store";
import { Button } from "antd";
import { Program } from "src/models/Program";

const numEntriesInPage = 7;

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
    reset,
  } = useProgramsPageStore();

  const { programsDB } = useProgramsDB();

  const [searchText, setSearchText] = useState("");

  const [startToSearch, setStartToSearch] = useState(false);

  const filterPrograms = () : { hasMoreEntries: boolean, entries: Program[] } => {
    if (page < 1 || numEntriesInPage < 1) {
      throw new Error("Current page number and numbber of entries in a page should be positive.");
    }

    const entries = programsDB.filter(
      (item: Program) => (
        item.programType === programType
          && (!searchText || item.title.toLowerCase().includes(searchText.toLowerCase()))
      )
    );

    const isSearchResultEmpty = searchText && !entries.length;
    const hasMoreEntries = page * numEntriesInPage <= entries.length && !isSearchResultEmpty;

    const start = (page - 1) * numEntriesInPage;
    const end = hasMoreEntries ? page * numEntriesInPage % entries.length : entries.length;

    return {
      hasMoreEntries,
      entries: entries.sort((a, b) => a.title.localeCompare(b.title)).slice(start, end),
    };
  };

  const fetchPrograms = () => {
    try {
      const { hasMoreEntries, entries } = filterPrograms();
      const areEntriesInFirstPage = page === 1 && hasMore;
      
      if (areEntriesInFirstPage) {
        setPrograms(entries);
      } else {
        setPrograms([...programs, ...entries]);
      }
      setPage(page + 1);
      setHasMore(hasMoreEntries);

    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
      setStartToSearch(false);
    }
  }

  const simulateFetch = () => {
    if (hasMore) {
      setLoading(true);
      setTimeout(fetchPrograms, 1000);
    }
  }

  useEffect(() => {
    const getFirstProgramsOnLoad = () => {
      simulateFetch();
    }

    getFirstProgramsOnLoad();
  }, [])

  useEffect(() => {
    const getSearchResults = () => {
      if (hasMore && startToSearch) {
        simulateFetch();
      }
    }

    getSearchResults();
  }, [startToSearch, hasMore])

  const onSearch = (searchText: string) => {
    reset();
    setStartToSearch(true);
    setSearchText(searchText);
  }

  return (
    <div style={{ flex: 1, flexDirection: "column" }}>
      <Header title="DEMO Streaming" />
      <SubHeader info="Titles" />
      <div style={{ flex: 1, flexDirection: "column", minHeight: "100vh" }}>
      <FilterWrapper>
        <Searchbar onSearch={onSearch} />
      </FilterWrapper>
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
