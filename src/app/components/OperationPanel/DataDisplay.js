import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Divider } from "antd";

export default function DataDisplay({ dividendYield, peRatio, total }) {
  dividendYield = dividendYield === Infinity ? "0.00" : validate(dividendYield);
  peRatio = validate(peRatio);
  return (
    <Fragment>
      <Divider className="fadeInDelay2" />
      <Row type="flex" justify="center" align="middle" className="fadeInDelay2">
        <Col span={20}>
          <Row type="flex" align="middle">
            <Col span={12}>
              <span className="operation-panel__info-title">
                Dividend Yield:{" "}
              </span>
            </Col>
            <Col span={12}>
              <Row type="flex" justify="end" align="middle">
                <span
                  className="operation-panel__info-value"
                  title={dividendYield}
                >
                  {dividendYield}
                </span>
              </Row>
            </Col>
          </Row>
        </Col>
        <Divider />
        <Col span={20}>
          <Col span={8}>
            <span className="operation-panel__info-title">P/E Ratio: </span>
          </Col>
          <Col span={16}>
            <Row type="flex" justify="end">
              <span className="operation-panel__info-value" title={peRatio}>
                {peRatio}
              </span>
            </Row>
          </Col>
        </Col>
      </Row>
      <Divider className="fadeInDelay3" />
      <Row type="flex" justify="center" className="fadeInDelay3">
        <Col span={20}>
          <Row type="flex" justify="space-between">
            <Col span={14}>Traded Price:</Col>
            <Col span={8}>
              <Row type="flex" justify="end">
                <b>${total.toFixed(2)}</b>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

DataDisplay.propTypes = {
  dividendYield: PropTypes.number,
  peRatio: PropTypes.number,
  total: PropTypes.number
};

DataDisplay.defaultProps = {
  dividendYield: 0,
  peRatio: 0,
  total: 0
};

function validate(item) {
  if (isNaN(item)) {
    return "0.00";
  } else if (item === Infinity) {
    return "∞";
  } else {
    return item.toFixed(2);
  }
}
