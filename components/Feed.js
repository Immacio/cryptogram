import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';
import PriceTracker from './PriceTracker';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useFetchCoin } from './hooks';

export default function Feed() {
  const { data: session } = useSession();
  // Custom hook for pulling in crypto coin data
  const coinData = useFetchCoin();

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
