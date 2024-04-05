import { TabList } from "@mui/lab";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Tab, Box } from "@mui/material";
import ProductList from "../productsList/ProductList";
import { SyntheticEvent, useEffect, useState } from "react";
import CreatedProductsList from "../created-products-list/CreatedProductsList.1";
import Switcher from "../switcher/Switcher";
import { useSelector } from "react-redux";

export default function Tabs() {

  const [value, setValue] = useState<string>('1');

  const { sorted } = useSelector((state: any) => state.switcher)

  useEffect(() => {
    console.log(sorted);
  }, [sorted]);

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All products" value='1' />
            <Tab label="Created Products" value="2" />
          </TabList>
          {value === '2' && <Switcher />}
        </Box>
        <TabPanel value="1">
          <ProductList />
        </TabPanel>
        <TabPanel value="2">
          <CreatedProductsList />
        </TabPanel>
      </TabContext>
    </Box>
  )
}