import { CSSProperties, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchSingleProducts } from "../api/products";
import { Box, Container, Typography } from "@mui/material";
import { IProduct } from "../interfaces/interfaces";

export default function SingleProduct() {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchSingleProducts(id);
      setProduct(data);
    };
    getData();
  }, [id]);

  const imgStyles: CSSProperties = {
    width: "100%",
    height: '100%',
    objectFit: 'cover',
  }

  return (
    <Box sx={{ marginTop: '90px' }}>
      <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '50px' }}>
        <Box sx={{ maxWidth: '35%' }}>
          {product && <img style={imgStyles} src={product.image} alt={product.title} />}
        </Box>
        <Box sx={{ maxWidth: '46%' }}>
          <Typography sx={{ marginBottom: '15px', fontSize: 'clamp(20px, 4.5vw, 100px)', fontWeight: '600' }}>
            {product && product.rating?.rate}
          </Typography>
          <Typography sx={{ fontSize: 'clamp(20px, 4.5vw, 50px)', lineHeight: '1.2', fontWeight: '600', marginBottom: '30px' }}>
            {product && product.title}
          </Typography>
          <Typography sx={{ fontSize: 'clamp(16px, 3.5vw, 20px)', marginBottom: '15px' }}>
            {product && product.description}
          </Typography>
          <Typography sx={{ fontSize: 'clamp(16px, 3.5vw, 25px)', marginBottom: '15px', fontWeight: '600' }}>
            {product && product.price}$
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
