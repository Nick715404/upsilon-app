import styles from './CreatedProductsList.module.scss';

import Product from "../product/Product";
import { ICreatedProduct } from "../../interfaces/interfaces";

import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function CreatedProductsList() {

  const { sortedProducts, status, error } = useSelector((state: any) => state.products);

  return (
    <Box className={styles.boxStyles}>
      {status === 'loading' && <h1>Loading...</h1>}
      {error && <h1>An error occurred {error}</h1>}
      {sortedProducts.map((item: ICreatedProduct, index: number) => (
        <Product link={item.created_at} key={index} data={item} />
      ))}
    </Box>
  );
}
