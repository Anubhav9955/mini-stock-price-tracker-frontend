import React from "react";
import StockSelector from "./component/StockSelector";
import PriceDisplay from "./component/PriceDisplay";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const store = configureStore(); // Create the Redux store

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Mini Stock Price Tracker</h1>
        <StockSelector stockList={["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA"]} />
        <PriceDisplay />
      </div>
    </Provider>
  );
}

export default App;
