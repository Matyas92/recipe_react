import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Categories from './food/Categories';
import Countries from './country/Countries';
import Ingredients from './ingredient/Ingredients';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
//Tab panel used from MUI
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


    <Box sx={{
  
    width: '100%'
    }}>

      <Box sx={{ 
    borderBottom: 1,
    borderColor: 'divider',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',

     }}>

        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ fontSize: '1rem', }} label="BY CATEGORIES" {...a11yProps(0)} />

          <Tab sx={{ fontSize: '1rem', }} label="BY COUNTRIES" {...a11yProps(1)} />
          <Tab sx={{ fontSize: '1rem', }}  label="Ingredients" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
       <Categories/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Countries/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Ingredients/>
      </TabPanel>
    </Box>

   
  );
}
