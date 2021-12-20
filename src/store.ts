import create from "zustand";
import { Program } from "./models/Program";
import { persist } from "zustand/middleware"
import { getAllPrograms } from "./services/programsService";

const initialProgramsState = {
  programs: [],
  page: 1,
  loading: true,
  error: false,
  hasMore: true,
};

interface ProgramState {
  programs: Program[];
  setPrograms: (programs: Program[]) => void;
  page: number;
  setPage: (page: number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: boolean;
  setError: (error: boolean) => void;
  hasMore: boolean;
  setHasMore: (hasMore: boolean) => void;
  reset: () => void;
};

interface ProgramDBState {
  programsDB: Program[];
  createProgramsDB: () => void;
};

export const useStore = create<ProgramState>(
  set => ({
    programs: [],
    setPrograms: (programs: Program[]) => set({ programs }),
    page: 1,
    setPage: (page: number) => set({ page }),
    loading: true,
    setLoading: (loading: boolean) => set( { loading }),
    error: false,
    setError: (error: boolean) => set( { error }),
    hasMore: true,
    setHasMore: (hasMore: boolean) => set( { hasMore }),
    reset: () => set( initialProgramsState ),
  }),
);

export const useProgramsDB = create<ProgramDBState>(
  persist(
    (set, _) => ({
      programsDB: [],
      createProgramsDB: async () => {
        const programs = await getAllPrograms();
        set({ programsDB: programs });
      }
    }),
    {
      name: "programs-db",
    }
  )
);
