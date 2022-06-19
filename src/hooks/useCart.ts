import createPersistedState from 'use-persisted-state';

import { Product } from '../components/Meals/MealsList';

export type CartItem = Product & {
  quantity: number;
};

const useCounterState = createPersistedState<CartItem[]>("count");

const useCounter = (id: string) => {
  const [cart, setCart] = useCounterState([]);

  const handleItemQuan = () => {
    const item = cart.find((c) => c.id === id);
    if (item) {
      return item.quantity;
    }
    return 0;
  };

  const incrementCart = (newItem: Product) => {
    const item = cart.find((c) => c.id === newItem.id);
    if (!item) {
      setCart((previousCart) =>
        previousCart.concat({ ...newItem, quantity: 1 })
      );
    } else {
      const newCart = cart.map((meal) => {
        if (meal.id === newItem.id) {
          return { ...meal, quantity: meal.quantity + 1 };
        }
        return meal;
      });

      setCart(newCart);
    }
  };

  const decrementCart = (newItem: Product) => {
    const newCart = cart.map((meal, indx) => {
      if (meal.id === newItem.id) {
        return { ...meal, quantity: meal.quantity - 1 };
      }
      return meal;
    });

    const updatedCart = newCart.filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const totalItems = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );

  const deleteItem = (id: string) => {
    const item = cart.find((c) => c.id === id);
    if (item) {
      setCart((previousCart) => previousCart.filter((item) => item.id !== id));
    }
  };

  return {
    totalCount: totalItems,
    count: handleItemQuan(),
    cart: cart,
    increment: incrementCart,
    decrement: decrementCart,
    deleteItem: deleteItem,
  };
};

export default useCounter;
