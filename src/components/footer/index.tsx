import React, { CSSProperties } from "react";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { GRAY2, WHITE } from "colors";
import { HORIZONTAL_PADDING } from "styles";

const footerLinks = [
  "Home",
  "Terms and Conditions",
  "Privacy Policy",
  "Collection Statement",
  "Help",
  "Manage Account"
];

const FooterLinks: React.FC = () => {
  return (
    <div style={{ opacity: 0.6 }}>
      {
        (footerLinks ?? []).map((footerLink, index) => (
          <div style={{ display: "inline-block" }} key={footerLink}>
            <a style={{ textDecoration: "none", color: WHITE }} href="#">{footerLink}</a>
            { index !== footerLinks?.length - 1 && <span style={{ padding: "0px 12px", }}>|</span> }
          </div>
        ))
      }
    </div>
  );
}

const CopyRightText: React.FC = () => (
  <div style={{ opacity: 0.6, marginTop: 10 }}>
    Copyright © 2016 DEMO Streaming All Right Reserved.
  </div>
);

const logoWrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 100
};

const StoreLogoWrapper: React.FC = () => (
  <div style={logoWrapperStyle}>
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
  </div>
)

const SocialLogoWrapper: React.FC = () => {
  const iconStyle: CSSProperties = {
    fontSize: 35,
    color: WHITE,
    marginRight: 20,
  };

  return (
    <div style={logoWrapperStyle}>
      <a
        href="https://twitter.com/PankodDev"
        target="_blank"
        style={iconStyle}
        rel="noreferrer"
      >
        <FacebookOutlined />
      </a>
      <a
        href="https://twitter.com/PankodDev"
        target="_blank"
        style={iconStyle}
        rel="noreferrer"
      >
        <TwitterOutlined />
      </a>
      <a
        href="https://twitter.com/PankodDev"
        target="_blank"
        style={iconStyle}
        rel="noreferrer"
      >
        <InstagramOutlined />
      </a>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: GRAY2,
        color: WHITE,
        padding: `32px ${HORIZONTAL_PADDING}px`,
        fontSize: 13,
      }}
    >
      <FooterLinks />
      <CopyRightText />
      <div style={logoWrapperStyle}>
        <SocialLogoWrapper />
        <StoreLogoWrapper />
      </div>
    </div>
  );
};
