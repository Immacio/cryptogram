import { useEffect, useState } from 'react';

export const useFetchCoin = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const coinDataFetch = async () => {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      const jsonData = await response.json();
      setCoinData(jsonData);
    };
    coinDataFetch();
  }, []);

  return coinData;
};

export default useFetchCoin;
