import React, { Component } from "react";
import OperationPanel from "./OperationPanel";
import { withActions } from "./../../index";
import Stock from "../../../utils/Stock";

class OperationPanelContainer extends Component {
  state = {
    price: null,
    quantity: null,
    operation: "buy"
  };

  handleSubmit = e => {
    e.preventDefault();
    const { price, quantity, operation } = this.state;
    if (this.props.selectedSymbol) {
      this.props.actions.addTrade({
        symbol: this.props.selectedSymbol,
        operation,
        price,
        quantity,
        timestamp: new Date().getTime()
      });

      this.setState({
        price: null,
        quantity: null
      });
    } else {
      this.props.actions.submitWithoutSymbol();
    }
  };

  handleInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: Number(value) });

  handleTabChange = operation => this.setState({ operation });

  setRequiredProps() {
    let {
      handleTabChange,
      handleInputChange,
      handleSubmit,
      state: { price, quantity, operation },
      props: { selectedSymbol }
    } = this;
    return {
      handleTabChange,
      handleSubmit,
      handleInputChange,
      operation,
      peRatio: Stock.getPeRatio(price, selectedSymbol),
      dividendYield: Stock.getDividendYield(price, selectedSymbol),
      price,
      quantity
    };
  }

  render() {
    return <OperationPanel {...this.setRequiredProps()} />;
  }
}

export default withActions(OperationPanelContainer);
