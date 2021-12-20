import React from "react";
import { Button } from 'antd';

export const Header: React.FC<{ title: string }> = (props: { title: string }) => {
  return (
    <div
      style={{
        backgroundColor: "#007AFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 200px",
        paddingTop: 10
      }}
    >
      <div style={{ fontSize: 40, color: "#fff" }}>{props.title}</div>
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
