import { mount } from "enzyme"
import ProgramsPage from "."

describe("Testing ProgramsPage component...", () => {
  it("renders without crashing with programType=\"movie\"", () => {
    const component = mount(<ProgramsPage programType="movie" />);

    expect(component).toBeTruthy();
  });

  it("renders without crashing with programType=\"series\"", () => {
    const component = mount(<ProgramsPage programType="series" />);

    expect(component).toBeTruthy();
  });
})