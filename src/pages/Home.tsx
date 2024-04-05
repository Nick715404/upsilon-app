import { Box, Container, Typography } from "@mui/material"
import { boxStyles } from "../styles/home.styles"

type Props = {}

export default function HomePage({ }: Props) {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Typography variant="h1" gutterBottom sx={{ margin: '130px auto 50px' }} >
          Тестовое задание
        </Typography>
        <Box sx={boxStyles}>
          <Typography sx={{ color: '#fff', fontWeight: '300', fontSize: 'clamp(20px, 15vw, 260px)' }} >Let's Go!</Typography>
        </Box>
      </Container>
    </Box>
  )
}