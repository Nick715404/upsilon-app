import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { IProduct } from "../../interfaces/interfaces";
import Product from "../product/Product";
import { useEffect } from "react";


export default function CreatedProductsList() {

  const { products, status, error } = useSelector((state: any) => state.createdProducts);

  const boxStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginTop: '30px',
    marginBottom: '80px'
  }

  useEffect(() => {
    console.log(products);
  }, [status]);

  return (
    <Box sx={boxStyles}>
      {status === 'loading' && <h1>Loading...</h1>}
      {error && <h1>An error occured {error}</h1>}
      {products.map((item: IProduct) => (
        <Product key={item.id} data={item} />
      ))}
    </Box>
  );
}
