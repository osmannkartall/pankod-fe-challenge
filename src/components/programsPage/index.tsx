import React, { useEffect, useState } from "react";
import {
  FilterWrapper,
  ProgramCards,
  Searchbar,
  PageWrapper,
  Padder,
  FetchResult,
} from "@components";
import { useProgramsPageStore, useProgramsDB } from "@stores";
import { Button } from "antd";
import { Program, ProgramType } from "@models";
import { PRIMARY } from "colors";
import { FlexColumn } from "@styles/shared-styled-components";
import styled from "styled-components";

const numEntriesInPage = 7;

const FlexWrapper: React.FC = ({ children }) => <FlexColumn>{children}</FlexColumn>;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
`;

const ButtonWrapper = styled(Button)`
  width: 150px;
  background-color: ${PRIMARY};
  border-color: ${PRIMARY};
`;

const ProgramsPage: React.FC<{ programType: ProgramType }> = ({ programType })  => {
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
    const hasMoreEntries = page * numEntriesInPage < entries.length && !isSearchResultEmpty;

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
      return <Padder><FetchResult>No program found...</FetchResult></Padder>;
    }

    return null;
  };

  const ErrorText = () => {
    if (error) {
      return <Padder><FetchResult>Oops, something went wrong...</FetchResult></Padder>
    }
    return null;
  }

  const LoadMoreButton = () => {
    if (hasMore && programs?.length && !loading) {
      return (
        <ButtonRow>
          <ButtonWrapper type="primary" onClick={simulateFetch}>
            Load More
          </ButtonWrapper>
        </ButtonRow>
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
      { !programs?.length && loading ? <Padder><FetchResult>Loading...</FetchResult></Padder> : null }
      { programs?.length ? <FlexWrapper><ProgramCards /></FlexWrapper> : <FlexWrapper /> }
      <LoadMoreButton />
    </PageWrapper>
  );
};

export default ProgramsPage;
