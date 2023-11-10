import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import './index.css'
const CustomTabPanel = ({ children, value, index, ...rest }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      <Box>{children}</Box>
    </div>
  );
};
const CustomTab = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={(e, newValue) => {
            setSelectedTab(newValue);
          }}
          aria-label="tabs"
        >
          {tabs.map((tab, idx) => {
            return (
              <Tab
                sx={{
                  fontSize: "0.875rem",
                  color: "#000000",
                  textTransform: "none",
                }}
                key={`fluid-tab${idx}`}
                label={tab.label}
              />
            );
          })}
        </Tabs>
      </Box>
      {tabs.map((tab, idx) => (
        <CustomTabPanel value={selectedTab} index={idx} key={idx}>
          {tab.Component}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTab;
