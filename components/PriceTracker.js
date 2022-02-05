import React from 'react';

function PriceTracker({ symbol, name, image, price }) {
  return (
    <div className="py-1 pt-3">
      <div className="flex space-x-2">
        <div className="flex items-center">
          <img src={image} className="h-5" alt="" />
        </div>
        <div className="block flex-grow">
          <h1 className="text-md font-bold">{name}</h1>
          <h3 className="text-xs text-gray-400">{symbol.toUpperCase()}</h3>
        </div>
        <div className="flex items-center">
          <h1 className="text-md font-bold">${price}</h1>
        </div>
      </div>
    </div>
  );
}

export default PriceTracker;
