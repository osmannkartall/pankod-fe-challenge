import React from "react";
import { Typography } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import { WHITE } from "colors";
import styled from "styled-components";

const { Title, Text } = Typography;

const CardTitleWrapper = styled.div`
  margin-top: 20px;
  font-size: 15px;
`;

const CardTitle: React.FC<{ title: string }> = ({ title }) => (
  <CardTitleWrapper>
    <Text>{title}</Text>
  </CardTitleWrapper>
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

const TileCardWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 300px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PlayIcon = styled(PlayCircleOutlined)`
  color: WHITE;
  font-size: 100px;
  opacity: 0.2;
  position: absolute;
  z-index: 2;
`;

export const TileCard: React.FC<{ title: string }> = ({ title }) => {
  const router = useRouter();

  return (
    <div>
      <TileCardWrapper onClick={() => router.push(`/${title}`)}>
        <PlayIcon />
        <Title
          style={{
            color: WHITE,
            position: "absolute",
            zIndex: 0
            }}
          >
          {title?.toString().toUpperCase()}
        </Title>
      </TileCardWrapper>
      <CardTitle title={`Popular ${title}`} />
    </div>
  );
}