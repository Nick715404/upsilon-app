import { ICreatedProduct } from "../interfaces/interfaces";

export const saveToLocalStorage = (data: ICreatedProduct) => {
  const storedProducts = localStorage.getItem('products');
  let products: ICreatedProduct[] = storedProducts ? JSON.parse(storedProducts) : [];
  products.push(data);
  localStorage.setItem('products', JSON.stringify(products));
};