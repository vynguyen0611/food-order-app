import React, { useContext, useEffect, useState } from 'react';

import MealItem from '../Meals/MealItem';

export interface Item {
  id: string;
  title: string;
  unitPrice: number;
}

type CartContextValue = {
  items: any[] | null;
  totalPrice: 0;
  addItem: (item: Item) => Item | undefined;
  removeItem: (id: string) => void;
};

export const CartContext = React.createContext<CartContextValue | undefined>(
  undefined
);

export const CartContextProvider: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const itemStorage = localStorage.getItem("addedItem");
  console.log("list", itemStorage);

  const addItemHandler = (item: Item) => {
    if (itemStorage) {
      const itemObj = JSON.parse(itemStorage);
      item = {
        id: itemObj.id,
        title: itemObj.title,
        unitPrice: itemObj.unitPrice,
      };
    }
    return item;
  };

  const removeItemHandler = (id: string) => {};

  return (
    <CartContext.Provider
      value={{
        items: [],
        totalPrice: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  return ctx;
};
