import React from "react";
import "antd/dist/antd.css";
import "./App.css";

import { Layout } from "antd";

import {
  Header,
  TradeList,
  OperationPanel,
  MarketInfo,
  PoweredBy
} from "./components";

const { Sider, Content } = Layout;

const App = ({ selectedSymbol, tradeList, submittedWithoutSymbol }) => (
  <Layout className="main-layout__container">
    <Header />
    <Layout>
      <Content className="main-layout__content">
        <MarketInfo
          selectedSymbol={selectedSymbol}
          tradeList={tradeList}
          submittedWithoutSymbol={submittedWithoutSymbol}
        />
        <TradeList selectedSymbol={selectedSymbol} tradeList={tradeList} />
      </Content>
      <Sider theme="light" className="main-layout__sider" width={320}>
        <OperationPanel selectedSymbol={selectedSymbol} />
        <PoweredBy who="Matias Rodriguez" />
      </Sider>
    </Layout>
  </Layout>
);

export default App;
