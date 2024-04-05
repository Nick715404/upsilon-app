import { Box, Switch, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../store/published.slice";
import { useEffect, useState } from "react";
import { sortPublished } from "../../store/products.slice";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Switcher() {
  const [value, setValue] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedValue = localStorage.getItem('switcherValue');
    if (savedValue !== null) {
      setValue(savedValue === 'true');
    }
  }, []);

  const saveToLocalStorage = (newValue: boolean) => {
    localStorage.setItem('switcherValue', newValue.toString());
  };

  const handleChange = () => {
    setValue((prevValue) => {
      const newValue = !prevValue;
      saveToLocalStorage(newValue);
      dispatch(changeStatus(newValue));
      dispatch(sortPublished(newValue));
      return newValue;
    });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
      <Typography>- isPublished</Typography>
      <Switch checked={value} onChange={handleChange} {...label} color="secondary" />
    </Box>
  );
}
