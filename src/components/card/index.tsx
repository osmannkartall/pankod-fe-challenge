import React from "react";
import { Card as AntdCard } from "antd";
import { CardProps } from "antd/lib/card";
import { Typography } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'

const { Title, Text } = Typography;

export const Card: React.FC<CardProps> = ({ title, children, ...rest }) => {
  const router = useRouter();

  return (
    <>
      <AntdCard
        hoverable
        style={{ width: 180, backgroundColor: "#1E1E1E"}}
        onClick={() => router.push(`/${title}`)}
      >
        <div
          style={{
            height: 200,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlayCircleOutlined
            style={{
              color: "#fff",
              fontSize: 100,
              opacity: .2,
              position: "absolute",
              zIndex: 2,
            }}
          />
          <Title style={{color: "#fff", position: "absolute", zIndex: 0 }}>{title?.toString().toUpperCase()}</Title>
        </div>
      </AntdCard>
      <Text>{`Popular ${title}`}</Text>
    </>
  );
};
