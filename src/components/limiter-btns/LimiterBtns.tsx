import { buttons } from "../../constants/changeLimiterBtns"
import { IButtons } from "../../interfaces/interfaces"
import { changeLimit } from "../../store/limiter.slice";

import { useDispatch } from "react-redux";
import { Button } from "@mui/material"

export default function LimiterBtns() {

  const dispatch = useDispatch();

  return (
    <>
      {buttons.map((btn: IButtons) => (
        <Button
          key={btn.id}
          onClick={() => dispatch(changeLimit(btn.value))}
          variant="contained"
        >
          {btn.title}
        </Button>
      ))}
    </>
  )
}