import { Program } from "@models";
import create from "zustand";

const programsPageInitialState = {
  programs: [],
  page: 1,
  loading: true,
  error: false,
  hasMore: true,
};

interface ProgramsPageState {
  programs: Program[];
  page: number;
  loading: boolean;
  error: boolean;
  hasMore: boolean;

  setPrograms: (programs: Program[]) => void;

  setPage: (page: number) => void;

  setLoading: (loading: boolean) => void;

  setError: (error: boolean) => void;

  setHasMore: (hasMore: boolean) => void;

  reset: () => void;
}

export const useProgramsPageStore = create<ProgramsPageState>(
  set => ({
    programs: programsPageInitialState.programs,
    page: programsPageInitialState.page,
    loading: programsPageInitialState.loading,
    error: programsPageInitialState.error,
    hasMore: programsPageInitialState.hasMore,

    setPrograms: (programs: Program[]) => set({ programs }),

    setPage: (page: number) => set({ page }),

    setLoading: (loading: boolean) => set( { loading }),

    setError: (error: boolean) => set( { error }),

    setHasMore: (hasMore: boolean) => set( { hasMore }),

    reset: () => set(
      (actions) => ({
        ...actions, 
        programs: programsPageInitialState.programs,
        page: programsPageInitialState.page,
        loading: programsPageInitialState.loading,
        error: programsPageInitialState.error,
        hasMore: programsPageInitialState.hasMore,
      }),
    ),
  }),
);
