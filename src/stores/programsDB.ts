import create from "zustand";
import { persist } from "zustand/middleware"
import { Program } from "@models";
import { ProgramsService } from "@services";

interface ProgramsDBState {
  programsDB: Program[];
  createProgramsDB: () => void;
}

export const useProgramsDB = create<ProgramsDBState>(
  persist(
    (set, _) => ({
      programsDB: [],
      createProgramsDB: async () => {
        const programsService = new ProgramsService();
        const programs = await programsService.getAllPrograms();
        set({ programsDB: programs });
      }
    }),
    {
      name: "programs-db",
    }
  )
);
