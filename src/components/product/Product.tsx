import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { IProduct } from "../../interfaces/interfaces"
import { deleteModalStyle, productCardStyles } from "../../styles/product.styles"
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../api/products";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useState } from "react";

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
      <Card sx={productCardStyles}>
        <Link to={`/product/${link}`} style={{ textDecoration: 'none' }}>
          <CardMedia
            component="img"
            height='340'
            image={data.image}
            alt="green iguana"
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography sx={{ fontSize: '22px', fontWeight: '600', color: '#000' }} variant="body2" color="text.secondary">
              {data.price}$
            </Typography>
          </CardContent>
        </Link>
        <Button sx={{ marginLeft: '20px' }} onClick={() => setOpen(true)} variant="contained">
          Удалить
        </Button >
        <Button sx={{ marginLeft: '20px' }} href="/createProduct" variant="contained">
          Редактировать
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

