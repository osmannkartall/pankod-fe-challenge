import React, { useEffect, useState } from "react";
import { FilterWrapper, ProgramCards, Searchbar, PageWrapper } from "@components";
import { useProgramsPageStore, useProgramsDB } from "@stores";
import { Button } from "antd";
import { Program } from "@models";

const numEntriesInPage = 7;

const ProgramsPage: React.FC<{ programType: "movie" | "series" }> = ({ programType })  => {
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
    let timeoutId;

    if (hasMore) {
      setLoading(true);
      timeoutId = setTimeout(fetchPrograms, 100);
    }

    return timeoutId;
  }

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const getFirstProgramsOnLoad = () => {
      timeoutId = simulateFetch();
    }

    getFirstProgramsOnLoad();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [])

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const getSearchResults = () => {
      if (hasMore && startToSearch) {
        timeoutId = simulateFetch();
      }
    }

    getSearchResults();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [startToSearch, hasMore])

  const onSearch = (searchText: string) => {
    reset();
    setStartToSearch(true);
    setSearchText(searchText);
  }
  
  const NoProgramFoundText = () => {
    if (!hasMore && !programs?.length) {
      return <div style={{ fontSize: 20, padding: "40px 200px" }}>No program found...</div>;
    }

    return null;
  };

  const ErrorText = () => {
    if (error) {
      return <div style={{ fontSize: 20, padding: "40px 200px" }}>Oops, something went wrong...</div>
    }
    return null;
  }

  const LoadMoreButton = () => {
    if (hasMore && programs?.length && !loading) {
      return (
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
      );
    }

    return null;
  };

  return (
    <PageWrapper>
      <FilterWrapper>
        <Searchbar onSearch={onSearch} />
      </FilterWrapper>
      <NoProgramFoundText />
      <ErrorText />
      { programs?.length ? <ProgramCards /> : <div style={{ flex: 1, flexDirection: "column" }} /> }
      { loading && <div style={{ fontSize: 20, padding: "40px 200px" }}>Loading...</div> }
      <LoadMoreButton />
    </PageWrapper>
  );
};

export default ProgramsPage;
