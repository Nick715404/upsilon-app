import { createProduct } from '../../api/products';
import { ICreatedProduct } from '../../interfaces/interfaces';
import { saveToLocalStorage } from '../../utils/saveToLocStore';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Box,
  Typography
} from '@mui/material';

interface createProduct {
  product: ICreatedProduct
}

export default function CreateProductForm() {

  const dispatch: any = useDispatch();

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data: any) => {
    data.created_at = new Date().toISOString();
    data.price = parseInt(data.price);
    const product: ICreatedProduct = data;
    dispatch(createProduct({ product }));
    saveToLocalStorage(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '160px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextField
          label="Название"
          variant="outlined"
          {...register('title', {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: 'Минимум 5 символов!'
            }
          })}
        />
        {errors?.title && <Typography sx={{ color: 'red' }}>{`${errors?.title?.message}` || "Error"}</Typography>}
        <TextField
          label="Цена"
          variant="outlined"
          {...register('price', {
            required: "Поле обязательно к заполнению",
            maxLength: {
              value: 10,
              message: 'Максимум 10 символов'
            }
          })}
        />
        {errors?.price && <Typography sx={{ color: 'red' }}>{`${errors?.price?.message}` || "Error"}</Typography>}
        <TextField
          label="Описание"
          variant="outlined"
          multiline
          rows={4}
          {...register('description', {
            required: "Поле обязательно к заполнению",
            maxLength: {
              value: 250,
              message: 'Максимум 250 символов'
            }
          })}
        />
        {errors?.description && <Typography sx={{ color: 'red' }}>{`${errors?.description?.message}` || "Error"}</Typography>}
        <FormControlLabel
          control={<Switch />}
          label="Опубликован"
          {...register('published')}
        />
        <Button disabled={!isValid} variant="contained" type="submit">Сохранить</Button>
      </Box>
    </form>
  );
};
