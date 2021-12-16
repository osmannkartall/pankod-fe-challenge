import React, { CSSProperties } from "react";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

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
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#"
            >
              {footerLink}
            </a>
            {
              index !== footerLinks?.length - 1 && <span style={{ padding: "0px 12px", }}>|</span>
            }
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

const StoreLogoWrapper: React.FC = () => (
  <div
    style={{
      flex: "0 1 auto",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "red",
      height: 100
    }}
  >
    <a href="#" style={{ marginRight: 20 }}>
      <img
        src="/store/app-store.svg"
        alt="pankod-app-store.svg"
        width="135"
        height="40"
      />
    </a>
    <a href="#" style={{ marginRight: 20 }}>
      <img
        src="/store/play-store.svg"
        alt="pankod-play-store.svg"
        width="135"
        height="40"
      />
    </a>
    <a href="#">
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
    color: "#fff",
    marginRight: 20,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "green",
        height: 100
      }}
    >
      <a
        href="https://twitter.com/PankodDev"
        target="_blank"
        style={iconStyle}
      >
        <FacebookOutlined />
      </a>
      <a
        href="https://twitter.com/PankodDev"
        target="_blank"
        style={iconStyle}
      >
        <TwitterOutlined />
      </a>
      <a
        href="https://twitter.com/PankodDev"
        target="_blank"
        style={iconStyle}
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
        backgroundColor: "#1E1E1E",
        color: "#fff",
        padding: "32px 200px",
        fontSize: 13,
      }}
    >
      <FooterLinks />
      <CopyRightText />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <SocialLogoWrapper />
        <StoreLogoWrapper />
      </div>
    </div>
  );
};
