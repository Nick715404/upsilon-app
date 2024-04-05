import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Box,
  Typography
} from '@mui/material';

export default function CreateProductForm() {

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
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '160px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextField
          label="Название"
          variant="outlined"
          {...register('name', {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 5,
              message: 'Минимум 5 символов!'
            }
          })}
        />
        {errors?.name && <Typography sx={{ color: 'red' }}>{`${errors?.name?.message}` || "Error"}</Typography>}
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
