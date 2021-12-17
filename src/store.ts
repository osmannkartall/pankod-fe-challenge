import create from "zustand";
import { Program } from "./models/Program";

interface ProgramState {
  programs: Program[];
  setPrograms: (programs: Program[]) => void;
};

export const useStore = create<ProgramState>(set => ({
  programs: [],
  setPrograms: (programs: Program[]) => set({ programs }),
}));
