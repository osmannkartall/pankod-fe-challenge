import React from "react";
import { Button } from 'antd';
import { GRAY1, WHITE } from "colors";
import { headerWrapperStyle } from "styles";

export const Header: React.FC<{ title: string }> = (props: { title: string }) => {
  return (
    <div style={headerWrapperStyle}>
      <div style={{ fontSize: 40 }}>{props.title}</div>
      <div>
        <Button type="link" size="large" style={{ color: WHITE, marginRight: 30 }}>
          Log in
        </Button>
        <Button type="primary" size="large" style={{ backgroundColor: GRAY1 }}>
          Start your free trial
        </Button>
      </div>
    </div>
  );
};
