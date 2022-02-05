import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';
import PriceTracker from './PriceTracker';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE } from 'recoil';

export default function Feed() {
  const { data: session } = useSession();
  const [coinData, setCoinData] = useState([]);
  const coinAPI =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  useEffect(() => {
    coinDataFetch();
  }, []);

  const coinDataFetch = async () => {
    const response = await fetch(coinAPI);
    const jsonData = await response.json();
    setCoinData(jsonData);
  };

  return (
    <main
      className={`mx-auto grid grid-cols-1 sm:grid-cols-2 md:max-w-3xl xl:max-w-6xl xl:grid-cols-3 ${
        !session &&
        'sm:!max-w-xl md:!max-w-3xl md:!grid-cols-2 xl:!max-w-6xl xl:!grid-cols-3'
      }`}
    >
      {/* Stories + Posts section set to 2 column width */}
      <section className={`col-span-2`}>
        <Stories />
        <Posts />
      </section>

      {!session && (
        <section
          className={`hidden pt-3 md:col-span-1
          xl:inline-block`}
        >
          <div className="relative">
            <div className="my-5 ml-10 border bg-white py-5 px-3">
              <h1 className="text-md pb-2 text-center font-bold text-black">
                Top Cryptocurrencies by Market Cap
              </h1>
              <h1 className="pb-2 text-center text-xs font-bold text-gray-400 ">
                <a
                  className="hover:underline"
                  href="https://www.coingecko.com/en/api"
                  target="_blank"
                >
                  Powered by CoinGecko
                </a>
              </h1>
              {coinData.map(({ id, symbol, name, image, current_price }) => (
                <PriceTracker
                  key={id}
                  symbol={symbol}
                  name={name}
                  image={image}
                  price={current_price}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {session && (
        <section className="hidden md:col-span-1 xl:inline-block">
          <div className="relative">
            <MiniProfile />

            <div className="my-5 ml-10 border bg-white py-5 px-3">
              <h1 className="text-md pb-2 text-center font-bold text-black">
                Top Cryptocurrencies by Market Cap
              </h1>
              <h1 className="pb-2 text-center text-xs font-bold text-gray-400 ">
                <a
                  className="hover:underline"
                  href="https://www.coingecko.com/en/api"
                  target="_blank"
                >
                  Powered by CoinGecko
                </a>
              </h1>
              {coinData.map(({ id, symbol, name, image, current_price }) => (
                <PriceTracker
                  key={id}
                  symbol={symbol}
                  name={name}
                  image={image}
                  price={current_price}
                />
              ))}
            </div>

            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}
