import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderCake, restockCake } from './cakeSlice';

export const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Available Cakes: {numberOfCakes}</h2>
        <button onClick={() => dispatch(orderCake())}>Order Cake</button>
        <button onClick={() => dispatch(restockCake(1))}>Restock Cake</button>
    </div>
  )
}
