import { Container } from "@mui/material"
import ProductList from "../components/productsList/ProductList"

type Props = {}

export default function ProductsPage({ }: Props) {
  return (
    <div>
      <Container maxWidth='xl'>
        <ProductList />
      </Container>
    </div>
  )
}