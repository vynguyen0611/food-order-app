import { AnyNsRecord } from 'dns';
import React, { useContext, useEffect, useReducer, useState } from 'react';

import { CallToActionRounded } from '@mui/icons-material';

import MealItem from '../Meals/MealItem';

export interface Item {
  id: string;
  title: string;
  unitPrice: number;
}

type CartContextValue = {
  items: any[] | null;
  totalPrice: number;
  addItem: (item: any) => {} | void;
  removeItem: (id: string) => {} | void;
};

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

export const CartContext = React.createContext<CartContextValue | undefined>(
  undefined
);

const cartReducer = (state: any, action: any) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const newTotalPrice =
      state.totalPrice + action.item.unitPrice * action.item.quantity;
    return {
      items: updatedItems,
      totalPrice: newTotalPrice,
    };
  } else {
    return defaultCartState;
  }
};

export const CartContextProvider: React.FC<
  React.PropsWithChildren<unknown>
> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item: Item) => {
    dispatchCartAction({ type: "ADD", item: item }); // forwarding the item which expected to get here on this function
  };

  const removeItemHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContextValue = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
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
