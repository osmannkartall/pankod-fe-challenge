import React from "react";
import { Typography } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { WHITE } from "src/constants/colors";

const { Title, Text } = Typography;

export const ProgramCard: React.FC<{ title: string, imageUrl: string }> = ({ title, imageUrl }) => {
  return (
    <>
      <div>
        <img alt="example" width="192" height= "250" src={imageUrl} />
      </div>
      <Text>{title}</Text>
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
          width: 192,
          height: 250,
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
      <Text>{`Popular ${title}`}</Text>
    </>
  );
}