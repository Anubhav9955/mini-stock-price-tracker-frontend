const initialState = {
  selectedStock: "",
  stockData: null,
  error: null,
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STOCK_PRICE_SUCCESS":
      return {
        ...state,
        stockData: action.payload,
        error: null,
      };
    case "FETCH_STOCK_PRICE_FAILED":
      return {
        ...state,
        error: action.payload,
      };
    case "SELECT_STOCK":
      return {
        ...state,
        selectedStock: action.payload,
      };
    default:
      return state;
  }
};

export default stockReducer;
