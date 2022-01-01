import React from "react";
import { Typography } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { WHITE } from "colors";

const { Title, Text } = Typography;

const CARD_WIDTH = 192;
const CARD_HEIGHT = 250;

const cardTitleStyle: React.CSSProperties = {
  marginTop: 20,
  fontSize: 15,
};

const CardTitle: React.FC<{ title: string }> = ({ title }) => (
  <div style={cardTitleStyle}>
    <Text>{title}</Text>
  </div>
);

export const ProgramCard: React.FC<{ title: string, imageUrl: string }> = ({ title, imageUrl }) => {
  return (
    <>
      <div>
        <img alt="example" style={{ width: "100%" }} src={imageUrl} />
      </div>
      <CardTitle title={title} />
    </>
  );
};

export const TileCard: React.FC<{ title: string }> = ({ title }) => {
  const router = useRouter();

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => router.push(`/${title}`)}
      >
        <PlayCircleOutlined
          style={{
            color: WHITE,
            fontSize: 100,
            opacity: .2,
            position: "absolute",
            zIndex: 2,
          }}
        />
        <Title
          style={{
            color: WHITE,
            position: "absolute",
            zIndex: 0
            }}
          >
          {title?.toString().toUpperCase()}
        </Title>
      </div>
      <CardTitle title={`Popular ${title}`} />
    </>
  );
}