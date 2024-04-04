import { useSelector } from "react-redux";
import { IProduct } from "../../interfaces/interfaces";
import Product from "../product/Product";
import { Box } from "@mui/material";

type Props = {}

export default function ProductList({ }: Props) {

  const products: IProduct[] = useSelector((state: any) => state.products.products)

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '80px' }}>
      {products.map((item: IProduct) => (
        <Product key={item.id} data={item} />
      ))}
    </Box>
  )
}