import { Box, Container, Typography } from "@mui/material"

type Props = {}

export default function HomePage({ }: Props) {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Typography variant="h1" gutterBottom sx={{ margin: '0 auto' }} >
          Тестовое задание
        </Typography>
      </Container>
    </Box>
  )
}