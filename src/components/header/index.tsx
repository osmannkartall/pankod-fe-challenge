import React from "react";
import { Button } from 'antd';
import { PRIMARY, GRAY1, WHITE } from "src/constants/colors";
import { HORIZONTAL_PADDING } from "src/constants/styles";

export const Header: React.FC<{ title: string }> = (props: { title: string }) => {
  return (
    <div
      style={{
        backgroundColor: PRIMARY,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `0px ${HORIZONTAL_PADDING}px`,
        paddingTop: 10
      }}
    >
      <div style={{ fontSize: 40, color: WHITE }}>{props.title}</div>
      <div>
        <Button
          type="link"
          size="large"
          style={{
            color: WHITE,
            marginRight: 30
          }}>
          Log in
        </Button>
        <Button
          type="primary"
          size="large"
          style={{backgroundColor: GRAY1}}
        >
          Start your free trial
        </Button>
      </div>
    </div>
  );
};
