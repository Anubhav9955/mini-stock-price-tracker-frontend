export const FETCH_STOCK_PRICE = "FETCH_STOCK_PRICE";
export const FETCH_STOCK_PRICE_SUCCESS = "FETCH_STOCK_PRICE_SUCCESS";
export const FETCH_STOCK_PRICE_FAILED = "FETCH_STOCK_PRICE_FAILED";
export const SELECT_STOCK = "SELECT_STOCK";

export const fetchStockPrice = (stockName) => ({
  type: FETCH_STOCK_PRICE,
  payload: stockName,
});

export const fetchStockPriceSuccess = (price) => ({
  type: FETCH_STOCK_PRICE_SUCCESS,
  payload: price,
});

export const fetchStockPriceFailed = (error) => ({
  type: FETCH_STOCK_PRICE_FAILED,
  payload: error,
});

export const selectStock = (stockName) => ({
  type: SELECT_STOCK,
  payload: stockName,
});
