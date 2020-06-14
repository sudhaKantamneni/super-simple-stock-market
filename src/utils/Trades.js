class Trades {
  static getBySymbol(symbol, tradeList) {
    return tradeList.filter(trade => trade.symbol === symbol);
  }

  static getLastTrades(tradeList, minutes = 5) {
    const xMinutesAgo = new Date().getTime() - minutes * 60000;
    return tradeList.filter(
      trade => new Date(trade.timestamp).getTime() > xMinutesAgo
    );
  }
}

export default Trades;
