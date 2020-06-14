import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Tabs } from "antd";
import DataDisplay from "./DataDisplay";
import DataInput from "./DataInput";
import "./OperationPanel.css";

const OperationPanel = ({
  handleTabChange,
  handleSubmit,
  handleInputChange,
  operation,
  peRatio,
  dividendYield,
  price,
  quantity
}) => {
  return (
    <Card
      bodyStyle={{ padding: "0px 10px 10px 10px" }}
      className="operation-panel"
    >
      <Tabs onChange={handleTabChange} size="large" tabBarGutter={8}>
        {["buy", "sell"].map(tab => (
          <Tabs.TabPane tab={tab.toUpperCase()} key={tab} />
        ))}
      </Tabs>
      <form onSubmit={handleSubmit}>
        <DataInput
          onChange={handleInputChange}
          price={price}
          quantity={quantity}
        />
        <DataDisplay
          peRatio={peRatio}
          dividendYield={dividendYield}
          total={price * quantity}
        />
        <Button
          type="primary"
          block
          size="large"
          className="operation-panel__action-button"
          htmlType="submit"
        >
          {`${operation} now `}
        </Button>
      </form>
    </Card>
  );
};

export default OperationPanel;

OperationPanel.propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  operation: PropTypes.string.isRequired
};
