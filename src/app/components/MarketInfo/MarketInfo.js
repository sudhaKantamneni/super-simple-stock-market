import React from "react";
import { Card, Icon, Tag, Select, Divider, Tooltip } from "antd";
import "./MarketInfo.css";
import { withActions } from "./../../index";
import Stock from "../../../utils/Stock";

const Option = Select.Option;

export default withActions(
  ({ selectedSymbol, tradeList, submittedWithoutSymbol, ...props }) => {
    const symbol = selectedSymbol && Stock.get(selectedSymbol);

    return (
      <Card
        className="market-info__container"
        bodyStyle={{ padding: "12px 32px 22px 32px", minHeight: "" }}
        extra={
          <div>
            All Share Index : &nbsp;{" "}
            <Tag color="purple">
              {Stock.getAllShareIndex(tradeList).toFixed(2)}
            </Tag>
          </div>
        }
        title={
          <span className="market-info__title">
         Stock Data
          </span>
        }
      >
     
        <Tooltip
          placement="right"
          title="You have to choose a stock first!"
          visible={submittedWithoutSymbol}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search..."
            optionFilterProp="children"
            onChange={props.actions.selectStockSymbol}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
            value={selectedSymbol}
            allowClear={true}
          >
            {Stock.getSymbols().map(symbol => (
              <Option value={symbol} key={symbol}>
                {symbol.toUpperCase()}
              </Option>
            ))}
          </Select>
        </Tooltip>
        {symbol && (
          <span className="fadeIn">
            &nbsp;&nbsp;
            <Icon type="caret-right" theme="outlined" />
            &nbsp;&nbsp;
            <b>Type </b> &nbsp;
            <Icon type="right" theme="outlined" style={{ fontSize: ".6em" }} />
            &nbsp;
            {symbol.type} <Divider type="vertical" /> <b> Par Value </b> &nbsp;
            <Icon type="right" theme="outlined" style={{ fontSize: ".6em" }} />
            &nbsp;
            {symbol.parValue}
            <Divider type="vertical" /> <b>Last Dividend </b> &nbsp;
            <Icon type="right" theme="outlined" style={{ fontSize: ".6em" }} />
            &nbsp;
            {symbol.lastDividend}
          </span>
        )}
      </Card>
    );
  }
);
