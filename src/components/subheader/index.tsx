import React from "react";

export const SubHeader: React.FC<{ info: string }> = (props: { info: string }) => {
  const titleText = `Popular ${props.info}`;

  return (
    <div
      style={{
        backgroundColor: "#414141",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 0px 10px 200px",
      }}
    >
      <div style={{ fontSize: 28, color: "#fff" }}>{titleText}</div>
    </div>
  );
};
