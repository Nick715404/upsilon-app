import { ICreatedProduct } from "../../interfaces/interfaces";
import { deleteProduct, fetchSingleProducts, updateProduct } from "../../api/products";

import { useParams, useNavigate, NavigateFunction } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, FormControlLabel, Switch, TextField, Typography } from "@mui/material";
import { deleteModalStyle } from "../../styles/product.styles";

export default function EditProductForm() {

  const [product, setProduct] = useState<ICreatedProduct | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [isDeleted, setDeleted] = useState<boolean>(false);

  const { id } = useParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigator: NavigateFunction = useNavigate();

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

  const handleDelete = async () => {
    if (product) {
      const id = product.id;
      dispatch(deleteProduct({ id }));
      setOpen(false);
      setDeleted(true);
      reset();
      setTimeout(() => {
        navigator('/products');
      }, 1200);
    }
  }

  return (
    <>
      {isDeleted ? <Typography variant="h1">Product has been deleted, bye!</Typography> : null}

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
      
      <Button sx={{ width: '100%', marginTop: '40px' }} onClick={() => setOpen(true)} variant="contained">
        Удалить
      </Button >
      {open &&
        <Box sx={deleteModalStyle}>
          <Typography sx={{ marginBottom: '10px' }}>
            ВЫ точно уверены что хотите удалить продукт с названием {product && product.title}?
          </Typography>
          <Button onClick={handleDelete} sx={{ marginBottom: '10px' }} variant="contained">Да</Button>
          <Button onClick={() => setOpen(false)}>Отмена</Button>
        </Box>
      }
    </>
  )
}

