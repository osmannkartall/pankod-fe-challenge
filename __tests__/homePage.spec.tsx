import { mount, ReactWrapper } from "enzyme"
import React from "react";
import Home from "../pages";
import { TileCards, PageWrapper, TileCard } from "@components";
import Title from "antd/lib/typography/Title";
import { act } from "react-dom/test-utils";

describe(`Testing Home Page...`, () => {
  let home: ReactWrapper;

  beforeEach(async () => {
    home = mount(<Home />);
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve));
      home.update();
    });
  });

  it("renders without crashing", () => {
    expect(home).toBeTruthy();
  });

  it("renders a PageWrapper component", () => {
    const pageWrapper = home.find(PageWrapper);

    expect(pageWrapper).toHaveLength(1);
  });

  it("renders a PageWrapper component that have a TileCards component", () => {
    const tileCards = home.find(PageWrapper).find(TileCards);

    expect(tileCards).toHaveLength(1);
  });

  it("renders two TileCard component", () => {
    expect(home.find(TileCard)).toHaveLength(2);
  });

  it(`renders a TileCard component with "MOVIES" title`, () => {
    const tileCards = home.find(TileCard);
    const titles = tileCards.find(Title).filterWhere(title => title.text().includes("MOVIES"));

    expect(titles).toHaveLength(1);
  });

  it(`renders a TileCard component with "SERIES" title`, () => {
    const tileCards = home.find(TileCard);
    const titles = tileCards.find(Title).filterWhere(title => title.text().includes("SERIES"));

    expect(titles).toHaveLength(1);
  });
});

