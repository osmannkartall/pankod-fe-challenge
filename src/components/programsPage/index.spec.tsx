import { mount, ReactWrapper } from "enzyme"
import React from "react";
import ProgramsPage from "."
import { FilterWrapper, ProgramCard, ProgramCards, Searchbar } from "..";
import { act } from "react-dom/test-utils";
import Home from "../../../pages";
import { ProgramType } from "@models/ProgramType";

const simulateAsyncEvent = async (component: ReactWrapper, ms = 0) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, ms));
    component.update();
  });
};

const runDescribeBlock = (programType: ProgramType) => {
  describe(`Testing ProgramsPage component...`, () => {
    let home: ReactWrapper;
    let programsPage: ReactWrapper;
  
    beforeEach(async () => {
      home = mount(<Home />);
      await simulateAsyncEvent(home);
  
      programsPage = mount(<ProgramsPage programType={programType} />);
      await simulateAsyncEvent(programsPage, 100);
    });
  
    it(`renders without crashing when programType="${programType}"`, () => {
      expect(programsPage).toBeTruthy();
    });
  
    it(`renders an FilterWrapper component that have a Searchbar component when programType="${programType}"`, () => {
      const filterWrapperComponent = programsPage.find(FilterWrapper);
  
      expect(filterWrapperComponent).toHaveLength(1);
      expect(filterWrapperComponent.find(Searchbar)).toHaveLength(1);
    });
  
    it(`renders ${programType} cards or "No program found" text when programType="${programType}"`, async () => {
      const hasProgramCards = programsPage.contains(<ProgramCards />);
      const noProgramFound = programsPage.contains("No program found...");
  
      expect(hasProgramCards !== noProgramFound).toBe(true);
    });
  
    it(`renders no "Load More" button if there is no ProgramCards, otherwise it renders 0 or 1 "Load More" button when programType="${programType}"`, async () => {
      const loadMoreButton = programsPage.findWhere(node => {
        return node.type() === 'button' && node.text() === "Load More";
      });
  
      if (!programsPage.contains(<ProgramCards />)) {
        expect(loadMoreButton).toHaveLength(0);
      } else {
        expect(loadMoreButton.length === 1 || loadMoreButton.length === 0).toBe(true);
      }
    });
  
    it(`renders more cards after clicking "Load More" button when programType="${programType}"`, async () => {
      if (programsPage.contains(<ProgramCards />)) {
        const numProgramCardBefore = programsPage.find(ProgramCard).length;
        const loadMoreButton = programsPage.findWhere(node => {
          return node.type() === 'button' && node.text() === "Load More";
        });
  
        if (loadMoreButton.length === 1) {
          loadMoreButton.simulate("click");
          await simulateAsyncEvent(programsPage, 100);
    
          const numProgramCardAfter = programsPage.find(ProgramCard).length;
          
          expect(numProgramCardAfter).toBeGreaterThan(numProgramCardBefore);
        }
      }
    });
  });
}

runDescribeBlock("movie");
runDescribeBlock("series");
