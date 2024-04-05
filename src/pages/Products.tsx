import Tabs from "../components/tabs/Tabs"
import LimiterBtns from "../components/limiter-btns/LimiterBtns"

import { Box, Container } from "@mui/material"

export default function ProductsPage() {
  return (
    <Box>
      <Container maxWidth='xl'>
        <LimiterBtns />
        <Box>
          <Tabs />
        </Box>
      </Container>
    </Box>
  )
}