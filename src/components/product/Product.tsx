import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { IProduct } from "../../interfaces/interfaces"
import { productCardStyles } from "../../styles/product.styles"
import { Link } from 'react-router-dom';

type Props = {
  data: IProduct
}

export default function Product({ data }: Props) {

  return (
    <Link to={`/product/${data.id}`}>
      <Card sx={productCardStyles}>
        <CardActionArea>
          <CardMedia
            component="img"
            height='340'
            image={data.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}