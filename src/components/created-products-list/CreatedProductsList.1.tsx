import Product from "../product/Product";
import { ICreatedProduct } from "../../interfaces/interfaces";

import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function CreatedProductsList() {

  const { sortedProducts, status, error } = useSelector((state: any) => state.products);

  const boxStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginTop: '30px',
    marginBottom: '80px'
  }

  return (
    <Box sx={boxStyles}>
      {status === 'loading' && <h1>Loading...</h1>}
      {error && <h1>An error occured {error}</h1>}
      {sortedProducts.map((item: ICreatedProduct, index: number) => (
        <Product link={item.created_at} key={index} data={item} />
      ))}
    </Box>
  );
}
