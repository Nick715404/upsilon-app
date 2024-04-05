import ProductList from "../productsList/ProductList";
import CreatedProductsList from "../created-products-list/CreatedProductsList.1";
import Switcher from "../switcher/Switcher";

import TabContext from '@mui/lab/TabContext';
import { SyntheticEvent, useState } from "react";
import TabPanel from '@mui/lab/TabPanel';
import { Tab, Box } from "@mui/material";
import { TabList } from "@mui/lab";

export default function Tabs() {

  const [value, setValue] = useState<string>('1');

  // const { sorted } = useSelector((state: any) => state.switcher)

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