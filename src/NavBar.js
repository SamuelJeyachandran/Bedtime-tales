import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Style } from '@mui/icons-material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{mr:8 }}>
            Bedtime tales
          </Typography>

          <Link to='/bedtime-tales/' style={{padding: '8px',color: 'white'}}>Homepage</Link>

          <Link to='/bedtime-tales/about-me' style={{padding: '8px',color: 'white'}}>About Me</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}