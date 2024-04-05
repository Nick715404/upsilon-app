import { buttons } from "../../constants/changeLimiterBtns"
import { IButtons } from "../../interfaces/interfaces"
import { changeLimit } from "../../store/limiter.slice";

import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material"
import { btnStyles } from "./LimiterBtns.styles";
import { btnBox } from "../../styles/products.styles";

export default function LimiterBtns() {

  const dispatch = useDispatch();

  return (
    <Box sx={btnBox}>
      {buttons.map((btn: IButtons) => (
        <Button
          key={btn.id}
          onClick={() => dispatch(changeLimit(btn.value))}
          sx={btnStyles}
        >
          {btn.title}
        </Button>
      ))}
    </Box>
  )
}