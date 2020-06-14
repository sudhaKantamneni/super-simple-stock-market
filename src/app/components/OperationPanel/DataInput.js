import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Input } from "antd";

export default function DataInput({ onChange, quantity, price }) {
  return (
    <Fragment>
      <Row type="flex" justify="center" className="fadeInDelay">
        <Col span={22} className="operation-panel__input--margin">
          Price
        </Col>
        <Col span={22}>
          <Input
            addonBefore={"$"}
            size="large"
            onChange={onChange}
            name="price"
            type="number"
            value={price}
            min="0"
            required
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="fadeInDelay2">
        <Col span={22} className="operation-panel__input--margin">
          Quantity
        </Col>
        <Col span={22}>
          <Input
            addonBefore={"#"}
            size="large"
            onChange={onChange}
            name="quantity"
            type="number"
            min="1"
            value={quantity}
            required
          />
        </Col>
      </Row>
    </Fragment>
  );
}

DataInput.propTypes = {
  onChange: PropTypes.func.isRequired
};
