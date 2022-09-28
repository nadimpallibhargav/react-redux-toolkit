import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderIceCream, restockIceCream } from './iceCreamSlice';

export const IceCreamView = () => {
  const numberOfIceCream = useSelector((state) => state.iceCream.numberOfIceCream);
  const dispatch = useDispatch();

  const[ice, setIce] = useState(1);

  return (
    <div>
        <h2>Available iceCreams: {numberOfIceCream}</h2>
        <input type="number" value={ice} onChange={(e) => setIce(parseInt(e.target.value))} />
        <button onClick={() => dispatch(orderIceCream())}>Order iceCream</button>
        <button onClick={() => dispatch(restockIceCream(ice))}>Restock iceCream</button>
    </div>
  )
}