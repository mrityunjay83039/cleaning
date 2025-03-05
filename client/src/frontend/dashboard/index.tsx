import React from 'react';
import Sidebar from './DashboardSidebar';
import TopBar from './DashboardTopBar';
import { Box } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <TopBar />
        <h1>Welcome to the Dashboard</h1>
        {/* Add more dashboard content here */}
      </Box>
    </Box>
  );
};

export default Dashboard;