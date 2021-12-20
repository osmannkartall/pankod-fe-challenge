import React from "react";
import { Row, Col } from "antd";
import { ProgramCard, TileCard } from "@components";
import { useProgramsPageStore } from "src/store";

const streamItems = ["series", "movies"]

export const TileCards: React.FC = () => {
  return (
    <Row
      style={{
        flex: 1,
        padding: "20px 200px",
      }}
    >
      {(streamItems ?? []).map((streamItem) => (
        <Col
          style={{
            marginBottom: 30,
            paddingRight: 20,
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
    <Row
      style={{
        flex: 1,
        padding: "20px 200px",
      }}
    >
      {(programs ?? []).map((program) => (
        <Col
          style={{
            marginBottom: 50,
            paddingRight: 20,
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