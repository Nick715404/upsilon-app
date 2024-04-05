import EditProductForm from "../components/edit-product-form/EditProductForm";

import {
  Box,
  Container,
  Typography
} from "@mui/material";


export default function EditProduct() {

  return (
    <Box>
      <Container maxWidth='xl'>
        <Typography sx={{ marginTop: '30px' }} variant="h2">Edit porduct</Typography>
        <EditProductForm />
      </Container>
    </Box>
  );
}
