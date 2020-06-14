import data from "./../sampleData.json";
import Trades from "./Trades";

class Stock {
  static get(symbol) {
    return data.filter(stock => stock.symbol === symbol)[0];
  }

  static getSymbols() {
    return data.map(stock => stock.symbol);
  }

  static getDividendYield(price, symbol) {
    return this.getDividendValue(symbol) / price;
  }

  static getPeRatio(price, symbol) {
    return price / this.getDividendValue(symbol);
  }

  static getDividendValue(symbol) {
    let stock = this.get(symbol);
    return (
      stock &&
      (stock.type === "common"
        ? stock.lastDividend
        : stock.fixedDividend * stock.parValue)
    );
  }

  static getVolumeWeightedStockPrice(tradeList, symbol) {
    return Trades.getLastTrades(tradeList)
      .filter(trade => trade.symbol === symbol)
      .reduce(
        (acc, trade, i, arr) => {
          let { quantity, price } = trade;
          return {
            sumTotal: acc.sumTotal + quantity * price,
            sumQuantity: acc.sumQuantity + quantity,
            total:
              (acc.sumTotal + arr[i].price * arr[i].quantity) /
              (acc.sumQuantity + arr[i].quantity)
          };
        },
        { sumTotal: 0, sumQuantity: 0, total: 0 }
      ).total;
  }

  static getAllShareIndex(tradeList) {
    let symbolsWithTrades = 0;
    const base = this.getSymbols().reduce((acc, symbol) => {
      const vwsp = this.getVolumeWeightedStockPrice(tradeList, symbol);
      vwsp && symbolsWithTrades++;
      return acc * (vwsp || 1); //Si es cero no tiene trades, multiplico por 1
    }, 1);
    return symbolsWithTrades && Math.pow(base, 1 / symbolsWithTrades);
  }
}

export default Stock;
