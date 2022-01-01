import React from "react";
import { Row as AntRow, Col } from "antd";
import { Padder, FetchResult, ProgramCard, TileCard, CardsPadder } from "@components";
import { useProgramsPageStore } from "@stores";
import { BREAKPOINTS, CARD_PADDING, HORIZONTAL_PADDING } from "styles";
import styled from "styled-components";

const streamItems = ["series", "movies"]

const Row = styled(AntRow)`
  flex: 1;
  flex-wrap: wrap;
`;

const CardWrapper = styled(Col)`
  flex: calc(100% / 7);
  max-width: calc(100% / 7);
  padding: 40px ${CARD_PADDING}px;

  @media (width < ${BREAKPOINTS.md}) {
    flex: calc(100% / 6);
    max-width: calc(100% / 6);
  }

  @media (width < ${BREAKPOINTS.sm}) {
    flex: calc(100% / 3);
    max-width: calc(100% / 3);
  }

  @media (width < ${BREAKPOINTS.xs}) {
    flex: calc(100% / 2);
    max-width: calc(100% / 2);
  }
`;

export const TileCards: React.FC = () => {
  return (
    <Padder horizontal={HORIZONTAL_PADDING - CARD_PADDING}>
      <Row>
        {(streamItems ?? []).map((streamItem) => (
          <CardWrapper key={streamItem}>
            <TileCard title={streamItem} />
          </CardWrapper>
        ))}
      </Row>
    </Padder>
  );
};

export const ProgramCards: React.FC = () => {
  const { loading, programs } = useProgramsPageStore();

  return (
    <>
      <CardsPadder horizontal={HORIZONTAL_PADDING - CARD_PADDING}>
        <Row>
          {(programs ?? []).map((program) => (
            <CardWrapper key={program.title}>
              <ProgramCard
                title={
                  program?.title?.length < 20
                    ? program.title
                    : `${program?.title?.substring(0, 20)}...`}
                imageUrl={program.images["Poster Art"].url}
              />
            </CardWrapper>
          ))}
        </Row>
      </CardsPadder>
      <Padder>
        { loading && <FetchResult>Loading...</FetchResult> }
      </Padder>
    </>
  );
};