import { IProduct } from "../../interfaces/interfaces";
import Product from "../product/Product";

import { useSelector } from "react-redux";
import { Box, LinearProgress } from "@mui/material";

type Props = {}

export default function ProductList({ }: Props) {

  const { status, products, filteredProducts, error } = useSelector((state: any) => state.products);

  const boxStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginTop: '30px',
    marginBottom: '80px'
  }

  const linearStyles = {
    position: 'absolute',
    top: '0px',
    left: '0',
    width: '100%',
    height: '2px'
  }

  return (
    <Box sx={boxStyles}>
      {status === 'loading' && <LinearProgress sx={linearStyles} />}
      {error && <h1>An error occurred {error}</h1>}

      {filteredProducts.length > 0
        ?
        filteredProducts.map((item: IProduct, index: number) => (
          <Product link={item.id} key={index} data={item} />
        ))
        :
        products.map((item: IProduct, index: number) => (
          <Product link={item.id} key={index} data={item} />
        ))}

    </Box>
  )
}