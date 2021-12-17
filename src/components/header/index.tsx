import React from "react";
import { Button, Typography } from 'antd';

const { Title } = Typography;

export const Header: React.FC<{ title: string }> = (props: { title: string }) => {
  return (
    <div
      style={{
        backgroundColor: "#007AFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 200px",
      }}
    >
      <Title style={{color: "#fff"}}>{props.title}</Title>
      <div>
        <Button
          type="link"
          size="large"
          style={{
            color: "#fff",
            marginRight: 30
          }}>
          Log in
        </Button>
        <Button
          type="primary"
          size="large"
          style={{backgroundColor: "#414141"}}
        >
          Start your free trial
        </Button>
      </div>
    </div>
  );
};
