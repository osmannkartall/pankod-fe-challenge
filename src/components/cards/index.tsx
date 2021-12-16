import React from "react";
import { Row, Col } from "antd";
import { Card } from "@components";

const streamItems = ["series", "movies"]

export const Cards: React.FC = () => {
  return (
    <Row
      style={{
        flex: 1,
        padding: "40px 200px",
      }}
    >
      {(streamItems ?? []).map((streamItem) => (
        <Col
          style={{
            marginBottom: 30,
            paddingRight: 10,
          }}
          key={streamItem}
        >
          <Card title={streamItem} />
        </Col>
      ))} 
    </Row>
  );
};
