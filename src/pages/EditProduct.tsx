import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { fetchSingleProducts, updateProduct } from "../api/products";
import { ICreatedProduct } from "../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";

export default function EditProduct() {
  const [product, setProduct] = useState<ICreatedProduct | null>(null);
  const { id } = useParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data: any) => {
    dispatch(updateProduct(data));
    reset();
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchSingleProducts(id);
      setProduct(data);
      reset(data);
    };
    getData();
  }, []);

  return (
    <Box>
      <Container maxWidth='xl'>
        <Typography sx={{ marginTop: '30px' }} variant="h2">Edit porduct</Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "60px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField
              label="Название"
              focused
              variant="outlined"
              {...register("title", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 5,
                  message: "Минимум 5 символов!"
                }
              })}
            />
            {errors?.title && (
              <Typography sx={{ color: "red" }}>
                {`${errors?.title?.message}` || "Error"}
              </Typography>
            )}
            <TextField
              label="Цена"
              focused
              variant="outlined"
              {...register("price", {
                required: "Поле обязательно к заполнению",
                maxLength: {
                  value: 10,
                  message: "Максимум 10 символов"
                }
              })}
            />
            {errors?.price && (
              <Typography sx={{ color: "red" }}>
                {`${errors?.price?.message}` || "Error"}
              </Typography>
            )}
            <TextField
              label="Описание"
              focused
              variant="outlined"
              multiline
              rows={4}
              {...register("description", {
                required: "Поле обязательно к заполнению",
                maxLength: {
                  value: 250,
                  message: "Максимум 250 символов"
                }
              })}
            />
            {errors?.description && (
              <Typography sx={{ color: "red" }}>
                {`${errors?.description?.message}` || "Error"}
              </Typography>
            )}
            {product?.published ? <FormControlLabel
              control={<Switch defaultChecked={product?.category ? true : false} />}
              label="Опубликован"
              {...register("published")}
            /> : null}
            <Button disabled={!isValid} variant="contained" type="submit">
              Сохранить
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}
