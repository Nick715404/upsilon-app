import { TabList } from "@mui/lab";
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Tab, Box } from "@mui/material";
import ProductList from "../productsList/ProductList";
import { SyntheticEvent, useState } from "react";

type Props = {}

export default function Tabs({ }: Props) {

  const [value, setValue] = useState<string>('');

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <ProductList />
      </TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  )
}