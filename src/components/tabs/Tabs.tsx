import { TabList } from "@mui/lab";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Tab, Box } from "@mui/material";
import ProductList from "../productsList/ProductList";
import { SyntheticEvent, useState } from "react";
import CreatedProductsList from "../created-products-list/CreatedProductsList.1";

export default function Tabs() {

  const [value, setValue] = useState<string>('');

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="All products" value='1' />
          <Tab label="Created Products" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <ProductList />
      </TabPanel>
      <TabPanel value="2">
        <CreatedProductsList />
      </TabPanel>
    </TabContext>
  )
}