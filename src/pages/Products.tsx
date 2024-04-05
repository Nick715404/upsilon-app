import LimiterBtns from "../components/limiter-btns/LimiterBtns"
import Tabs from "../components/tabs/Tabs"

import { Box, Container } from "@mui/material"

export default function ProductsPage() {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Box sx={{ margin: '65px 0', display: 'flex', flexDirection: 'row', gap: '30px' }}>
          <LimiterBtns />
        </Box>
        <Box>
          <Tabs />
        </Box>
      </Container>
    </Box>
  )
}