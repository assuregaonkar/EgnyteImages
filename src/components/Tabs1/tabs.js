import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

const CustomTabs = ({ tabs, defaultTab, onTabChange }) => {
  const [value, setValue] = useState(defaultTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <Tabs textColor="primary" indicatorColor="primary" value={value} onChange={handleChange}>
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} value={tab.value} sx={{ textTransform: 'none' }} />
      ))}
    </Tabs>
  );
};

export default CustomTabs;
