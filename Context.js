import { React, createContext, useState} from 'react';

const cartItem = createContext();

const BasketContext = ({children}) => {
  const [cart, setCart] = useState([]);
  return (
    <cartItem.Provider value={{cart, setCart}}>
        {children}
        </cartItem.Provider>
  );
};
export {cartItem, BasketContext}
