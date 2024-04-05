import styles from './Tabs.module.scss';

import ProductList from "../productsList/ProductList";
import CreatedProductsList from "../created-products-list/CreatedProductsList";
import Switcher from "../switcher/Switcher";

import TabContext from '@mui/lab/TabContext';
import { SyntheticEvent, useState } from "react";
import TabPanel from '@mui/lab/TabPanel';
import { Tab, Box } from "@mui/material";
import { TabList } from "@mui/lab";
import FilterBtns from "../filter-btns/FilterBtns";

export default function Tabs() {

  const [value, setValue] = useState<string>('1');

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.tabsContainer}>
      <TabContext value={value}>
        <Box className={styles.topTabsRow}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab className={styles.tab} label="Все продукты" value='1' />
            <Tab className={styles.tab} label="Созданные продукты" value="2" />
          </TabList>
          {value === '2' && <Switcher />}
          {value === '1' && <FilterBtns />}
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