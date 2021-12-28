import React from "react";
import { Row, Col } from "antd";
import { ProgramCard, TileCard } from "@components";
import { useProgramsPageStore } from "@stores";
import { CARD_WIDTH, HORIZONTAL_PADDING } from "src/constants/styles";
import { numEntriesInPage } from "@components/programsPage";

const streamItems = ["series", "movies"]

const cardsRowStyle: React.CSSProperties = {
  flex: 1,
  padding: `20px ${HORIZONTAL_PADDING}px`,
};

export const TileCards: React.FC = () => {
  return (
    <Row style={cardsRowStyle}>
      {(streamItems ?? []).map((streamItem) => (
        <Col
          style={{
            margin: "40px 0px",
            paddingRight: `calc(calc(100% - ${numEntriesInPage * CARD_WIDTH}px) / ${numEntriesInPage - 1})`,
          }}
          key={streamItem}
        >
          <TileCard title={streamItem} />
        </Col>
      ))} 
    </Row>
  );
};

export const ProgramCards: React.FC = () => {
  const { programs } = useProgramsPageStore();

  return (
    <Row style={cardsRowStyle}>
      {(programs ?? []).map((program, i) => (
        <Col
          style={{
            marginBottom: 50,
            paddingRight:
              (i + 1) % numEntriesInPage === 0
                ? 0
                : `calc(calc(100% - ${numEntriesInPage * CARD_WIDTH}px) / ${numEntriesInPage - 1})`,
          }}
          key={program.title}
        >
          <ProgramCard
            title={`${program.title.substring(0, 20)}...`}
            imageUrl={program.images["Poster Art"].url}
          />
        </Col>
      ))} 
    </Row>
  );
};