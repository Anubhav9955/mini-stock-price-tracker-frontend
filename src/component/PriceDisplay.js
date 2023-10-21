import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockPrice } from "../redux/stocks/actions";
import { getSelectedStock, getStockData } from "../redux/stocks/selectors";

const PriceDisplay = () => {
  const selectedStock = useSelector(getSelectedStock);
  const stockData = useSelector(getStockData);

  console.log("stockData---", stockData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedStock) {
      dispatch(fetchStockPrice(selectedStock));
    }
  }, [dispatch, selectedStock]);

  return (
    <div>
      {stockData ? (
        <div>
          <h2>{selectedStock} Price:</h2>
          <p>${stockData}</p>
        </div>
      ) : (
        <p>Select a stock to see its price.</p>
      )}
    </div>
  );
};

export default PriceDisplay;
