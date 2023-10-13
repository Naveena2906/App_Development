import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import './Navbar.css';
import {AppBar,Toolbar,Icon} from '@mui/material';
export const Navbar = () => {
    const navigate =useNavigate();
    const about = () => {
      navigate("/about");
    };
    const homes=()=>{
      navigate("/");
    }
  return (
    <div className="navigationbar">
    <AppBar position="static" sx={{backgroundColor:'black'}}>
      <Toolbar>
        <Icon size="large" edge="start" color="inherit" aria-label="logo">
          <LocalGroceryStoreIcon />
        </Icon>
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }} style={{marginLeft:'-760px'}}>
          Golden Grocery
        </Typography>
        <div style={{marginRight:"50px",marginTop:"-1%",cursor:"pointer"}} onClick={homes} ><h3>Home</h3></div>
        <div style={{marginRight:"200px",marginTop:"-1%",cursor:"pointer"}} onClick={about}><h3>About Us</h3></div>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" style={{border:'1px solid white',borderRadius:'5px'}} onClick={()=>navigate('/l')}>
            Login
          </Button>
          <Button color="inherit" style={{border:'1px solid white',borderRadius:'5px'}} onClick={()=>navigate('/s')}>
            Signup
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  </div>
  )
}