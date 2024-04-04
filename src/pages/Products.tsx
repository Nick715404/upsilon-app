import ProductList from "../components/productsList/ProductList"
import LimiterBtns from "../components/limiter-btns/LimiterBtns"

import { Box, Container } from "@mui/material"

export default function ProductsPage() {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Box sx={{ marginTop: '65px', display: 'flex', flexDirection: 'row', gap: '30px' }}>
          <LimiterBtns />
        </Box>
        <ProductList />
      </Container>
    </Box>
  )
}