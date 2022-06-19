export type Product = {
  id: string;
  title: string;
  image: string;
  description: string;
  unitPrice: number;
};

export const data: Product[] = [
  {
    id: "1",
    title: "Crispy Spring Rolls (2 Rolls)",
    image: "chagio.png",
    description:
      "Shrimp, ground chicken, taro and vegetables. Served with fish sauce.",
    unitPrice: 5.0,
  },
  {
    id: "2",
    title: "Summer Rolls (2 Rolls)",
    image: "cuon.png",
    description: "Served with fresh lettuce, noodle, mint and bean sprout",
    unitPrice: 5.5,
  },
  {
    id: "3",
    title: "Shrimp Fried Rice",
    image: "fried-rice-1.png",
    description:
      "Shrimp, ground chicken, taro and vegetables. Served with fish sauce.",
    unitPrice: 12.99,
  },
  {
    id: "4",
    title: "Mango Salad",
    image: "mango-salad.png",
    description: "Fresh mango, onion, bell pepper, coriander and cashew nuts",
    unitPrice: 7.99,
  },
  {
    id: "5",
    title: "Pho Tai",
    image: "pho.png",
    description: "Rare beef with rice noodle soup",
    unitPrice: 11.99,
  },
  {
    id: "6",
    title: "Tom Yum Soup 🌶️",
    image: "tomyum.png",
    description:
      "Lemongrass, kaffir lime, mushrooms and tomatoes in a spicy chili broth.",
    unitPrice: 6.5,
  },
];

const MealsList = () => {
  return [data];
};

export default MealsList;
