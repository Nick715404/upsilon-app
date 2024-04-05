import styles from './FilterBtns.module.scss';

import { sortProducts } from "../../store/products.slice";
import { filterBtns } from "../../constants/filterBtns";

import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";

export default function FilterBtns() {

  const dispatch = useDispatch();

  return (
    <Box className={styles.btnsWrapper}>
      {filterBtns.map((btn) => (
        <Button
          key={btn.id}
          className={styles.btn}
          onClick={() => dispatch(sortProducts(btn.value))}
        >
          {btn.label}
        </Button>
      )
      )}
    </Box>
  )
}