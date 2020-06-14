import React, { Component } from "react";
import App from "./App";
import { Notification } from "./components";

const ActionsContext = React.createContext();
const ActionsProvider = ActionsContext.Provider;
const ActionsConsumer = ActionsContext.Consumer;
class Container extends Component {
  state = {
    selectedSymbol: undefined,
    tradeList: [],
    submittedWithoutSymbol: false
  };

  selectStockSymbol = symbol => {
    this.setState({
      selectedSymbol: symbol,
      submittedWithoutSymbol: false
    });
  };
  addTrade = trade =>
    this.setState(
      ({ tradeList }) => ({
        tradeList: [...tradeList, trade],
        submitedWithoutSymbol: false
      }),
      () =>
        Notification("success", {
          message: "Transaction Completed",
          description: ""
        })
    );

  submitWithoutSymbol = () => this.setState({ submittedWithoutSymbol: true });

  render() {
    const { selectedSymbol, tradeList, submittedWithoutSymbol } = this.state;

    const actions = {
      selectStockSymbol: this.selectStockSymbol,
      addTrade: this.addTrade,
      submitWithoutSymbol: this.submitWithoutSymbol
    };

    return (
      <ActionsProvider value={actions}>
        <App
          selectedSymbol={selectedSymbol}
          tradeList={tradeList}
          submittedWithoutSymbol={submittedWithoutSymbol}
        />
      </ActionsProvider>
    );
  }
}

function withActions(Component) {
  return props => (
    <ActionsConsumer>
      {actions => <Component {...props} actions={actions} />}
    </ActionsConsumer>
  );
}

export { ActionsConsumer, withActions, Container as default };
