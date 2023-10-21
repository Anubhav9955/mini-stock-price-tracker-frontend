import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectStock, fetchStockPrice } from "../redux/stocks/actions";

const StockSelector = ({ stockList }) => {
  const dispatch = useDispatch();
  const [isOptionEnabled, setOptionEnabled] = useState(true);

  const fetchStockPricePeriodically = (selectedStock) => {
    const pollingInterval = 60000;

    setInterval(() => {
      dispatch(fetchStockPrice(selectedStock));
    }, pollingInterval);
  };

  const handleStockChange = (e) => {
    const selectedStock = e.target.value;
    console.log("selectedStock-------", selectedStock);
    dispatch(selectStock(selectedStock));
    setOptionEnabled(false);
    // Start polling for stock prices
    fetchStockPricePeriodically(selectedStock);
  };

  return (
    <div>
      <select onChange={handleStockChange}>
        <option value="" disabled={!isOptionEnabled}>
          Select a Stock
        </option>
        {stockList.map((stock) => (
          <option key={stock} value={stock}>
            {stock}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StockSelector;
