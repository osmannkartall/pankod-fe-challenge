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

const ProgramCardsWrapper = styled(Col)`
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

const TileCardsWrapper = styled(Col)`
  flex: calc(100% / 7);
  max-width: calc(100% / 7);
  padding: 40px ${CARD_PADDING}px;

  @media (width < ${BREAKPOINTS.lg}) {
    flex: calc(100% / 6);
    max-width: calc(100% / 6);
  }

  @media (width < ${BREAKPOINTS.md}) {
    flex: calc(100% / 5);
    max-width: calc(100% / 5);
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
    <CardsPadder horizontal={HORIZONTAL_PADDING - CARD_PADDING}>
      <Row>
        {(streamItems ?? []).map((streamItem) => (
          <TileCardsWrapper key={streamItem}>
            <TileCard title={streamItem} />
          </TileCardsWrapper>
        ))}
      </Row>
    </CardsPadder>
  );
};

export const ProgramCards: React.FC = () => {
  const { loading, programs } = useProgramsPageStore();

  return (
    <>
      <CardsPadder horizontal={HORIZONTAL_PADDING - CARD_PADDING}>
        <Row>
          {(programs ?? []).map((program) => (
            <ProgramCardsWrapper key={program.title}>
              <ProgramCard
                title={
                  program?.title?.length < 20
                    ? program.title
                    : `${program?.title?.substring(0, 20)}...`}
                imageUrl={program.images["Poster Art"].url}
              />
            </ProgramCardsWrapper>
          ))}
        </Row>
      </CardsPadder>
      <Padder>
        { loading && <FetchResult>Loading...</FetchResult> }
      </Padder>
    </>
  );
};