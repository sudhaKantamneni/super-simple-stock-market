import React from "react";
import logo from "./../../assets/logo.png";
import { Layout, Icon, Tooltip } from "antd";

const { Header } = Layout;

export default () => {
  return (
    <Header className="main-layout__header">
      <img
        src={logo}
        alt="gbce logo"
        className="main-layout__logo"
        title="Global Beberage Corporation Exchange"
      />
      <Tooltip placement="left" title="View code on github">
        <a
          href="https://github.globant.com/mm-rodriguez/super-simple-stock-market"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon
            type="github"
            theme="outlined"
            className="main-layout__github"
          />
        </a>
      </Tooltip>
    </Header>
  );
};
