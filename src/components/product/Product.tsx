import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { IProduct } from "../../interfaces/interfaces"
import { productCardStyles } from "../../styles/product.styles"
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../api/products";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

type Props = {
  data: IProduct
}

export default function Product({ data }: Props) {

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const { id } = data

  const handleDelete = () => {
    dispatch(deleteProduct({ id }));
    console.log(id);
  }

  return (
    <>
      <Link to={`/product/${data.id}`} style={{ textDecoration: 'none' }}>
        <Card sx={productCardStyles}>
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
        </Card>
      </Link>
      <Button onClick={handleDelete} variant="contained">
        Удалить
      </Button>
    </>
  )
}

