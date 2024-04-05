import { IProduct } from "../../interfaces/interfaces"
import { deleteModalStyle } from "../../styles/product.styles"
import styles from './Product.module.scss';

import { productCardStyles } from './Product.styles';

import { useDispatch } from "react-redux";
import { deleteProduct } from "../../api/products";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
  data: IProduct
  link: string | number
}

export default function Product({ data, link }: Props) {

  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleDelete = () => {
    const { id } = data;
    dispatch(deleteProduct({ id }));
    setOpen(false);
  }

  return (
    <>
      <Card className={styles.productCard}>
        <Link to={`/product/${link}`} className={styles.productLink}>
          <CardMedia
            component="img"
            height='340'
            image={data.image}
            alt="green iguana"
          />
          <CardContent className={styles.cardContent}>
            <Typography className={styles.title}>
              {data.title}
            </Typography>
            <Typography className={styles.price}>
              {`${data.price}$`}
            </Typography>
          </CardContent>
        </Link>
        <Link className={styles.edit} to={`/product/edit/${link}`}>
          Редактировать
        </Link >
        <Button className={styles.delete} onClick={() => setOpen(true)} variant="contained">
          Удалить
        </Button >
      </Card >
      {open && <Box sx={deleteModalStyle}>
        <Typography sx={{ marginBottom: '10px' }}>
          ВЫ точно уверены что хотите удалить продукт с названием {data.title}?
        </Typography>
        <Button onClick={handleDelete} sx={{ marginBottom: '10px' }} variant="contained">Да</Button>
        <Button onClick={() => setOpen(false)}>Отмена</Button>
      </Box>
      }
    </>
  )
}

