import { useSelector } from "react-redux";
import { IProduct } from "../../interfaces/interfaces";
import Product from "../product/Product";
import { Box } from "@mui/material";
import { useEffect } from "react";

type Props = {}

export default function ProductList({ }: Props) {

  const { status, products, error } = useSelector((state: any) => state.products)

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
      {products.map((item: IProduct, index: number) => (
        <Product link={item.id} key={index} data={item} />
      ))}
    </Box>
  )
}