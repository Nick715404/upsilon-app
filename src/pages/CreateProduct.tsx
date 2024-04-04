import { Box, Container } from "@mui/material"
import CreateProductForm from "../components/create-product/CreateProductForm"

type Props = {}

export default function CreateProductPage({ }: Props) {
  return (
    <Box>
      <Container maxWidth='xl'>
        <CreateProductForm />
      </Container>
    </Box>
  )
}