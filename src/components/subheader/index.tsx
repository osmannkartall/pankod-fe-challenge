import React from "react";
import { Typography } from 'antd';

const { Title } = Typography;

export const SubHeader: React.FC<{ info: string }> = (props: { info: string }) => {
  const titleText = `Popular ${props.info}`;

  return (
    <div
      style={{
        backgroundColor: "#414141",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 200px",
      }}
    >
      <Title level={2} style={{color: "#fff"}}>{titleText}</Title>
    </div>
  );
};
