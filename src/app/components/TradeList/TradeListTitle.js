import React from "react";
import { Icon } from "antd";
import { withActions } from "./../../index";

export default withActions(({ selectedSymbol, ...props }) => {
  return (
    <span className="trade-list__title">
      <Icon type="swap" theme="outlined" /> &nbsp;
      <span
        onClick={() => props.actions.selectStockSymbol(undefined)}
        className="trade-list__title--all"
      >
        Transactions
      </span>
      &nbsp;&nbsp;
      {selectedSymbol && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center"
          }}
        >
          <Icon
            type="right"
            theme="outlined"
            style={{ fontSize: "14px" }}
            className="fadeInDelay"
          />
          &nbsp;&nbsp;
          <span className="fadeInDelay">{selectedSymbol.toUpperCase()}</span>
          <Icon
            type="close"
            theme="outlined"
            className="trade-list__clear-icon"
            onClick={() => props.actions.selectStockSymbol(undefined)}
          />
        </span>
      )}
    </span>
  );
});
