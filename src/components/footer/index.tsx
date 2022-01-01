import React from "react";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { GRAY2, WHITE } from "colors";
import { Padder } from "@components";
import styled from "styled-components";

const footerLinks = [
  "Home",
  "Terms and Conditions",
  "Privacy Policy",
  "Collection Statement",
  "Help",
  "Manage Account"
];

const FooterDiv = styled.div`
  opacity: 0.6;
  margin-top: 10px;
`;

const FooterLinksList = styled.div`
  display: inline-block;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: ${WHITE};
`;

const FooterLinks: React.FC = () => {
  return (
    <FooterDiv>
      {
        (footerLinks ?? []).map((footerLink, index) => (
          <FooterLinksList key={footerLink}>
            <FooterLink href="#">{footerLink}</FooterLink>
            { index !== footerLinks?.length - 1 && <span style={{ padding: "0px 12px", }}>|</span> }
          </FooterLinksList>
        ))
      }
    </FooterDiv>
  );
}

const CopyRightText: React.FC = () => (
  <FooterDiv>
    Copyright © 2016 DEMO Streaming All Right Reserved.
  </FooterDiv>
);

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

const StoreLogoWrapper: React.FC = () => (
  <LogoWrapper>
    <a href="#" rel="noreferrer">
      <img
        src="/store/app-store.svg"
        alt="pankod-app-store.svg"
        width="135"
        height="40"
      />
    </a>
    <a href="#" style={{ marginLeft: 20 }} rel="noreferrer">
      <img
        src="/store/play-store.svg"
        alt="pankod-play-store.svg"
        width="135"
        height="40"
      />
    </a>
    <a href="#" style={{ marginLeft: 20 }} rel="noreferrer">
      <img
        src="/store/windows-store.svg"
        alt="pankod-windows-store.svg"
        width="110"
        height="40"
      />
    </a>
  </LogoWrapper>
)

const IconWrapper = styled.a`
  font-size: 35px;
  color: WHITE;
  margin-right: 20px;
`;

const SocialLogoWrapper: React.FC = () => (
  <LogoWrapper>
    <IconWrapper
      href="https://twitter.com/PankodDev"
      target="_blank"
      rel="noreferrer"
    >
      <FacebookOutlined />
    </IconWrapper>
    <IconWrapper
      href="https://twitter.com/PankodDev"
      target="_blank"
      rel="noreferrer"
    >
      <TwitterOutlined />
    </IconWrapper>
    <IconWrapper
      href="https://twitter.com/PankodDev"
      target="_blank"
      rel="noreferrer"
    >
      <InstagramOutlined />
    </IconWrapper>
  </LogoWrapper>
);

const LogosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterWrapper = styled.div`
  background-color: ${GRAY2};
  color: ${WHITE};
  font-size: 13px;
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Padder vertical={32}>
        <FooterLinks />
        <CopyRightText />
        <LogosWrapper>
          <SocialLogoWrapper />
          <StoreLogoWrapper />
        </LogosWrapper>
      </Padder>
    </FooterWrapper>
  );
};
