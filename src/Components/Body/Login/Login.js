import  React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import wallpaper from "../../../assets/images/background5.jpg";
import Users from '../../../Data/Users';
import './style.css';


export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email  = data.get('email')
    const password  = data.get('password')
    const FindUser = Users.filter(user => user.email === email && user.password === password);

    // if user Found then Login else Send an error Message.
    
    console.log(FindUser[0])
    if (FindUser[0]) {
      localStorage.setItem("getID", FindUser[0].id);
      localStorage.setItem("getFirstName", FindUser[0].Firstname);
      localStorage.setItem("getSecondName", FindUser[0].Secondname);
      localStorage.setItem("getAddress", FindUser[0].address);
      window.location.replace('/profile');
    } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) || !(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password))) {
      document.getElementById("errormsg").innerHTML = "Please, Verify Your email and Password";
    }else{
      document.getElementById("errormsg").innerHTML = "Email or Password Incorrect ";
    }

  };
/*
  useEffect(() => {
    if(localStorage.getItem("getUsername")){
      navigate('/Profile');
    }
  },[])
*/
  return (
    <Paper
      sx={{
        backgroundColor: 'grey.800',
        color: 'white',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${wallpaper})`,
        height: "600px",
        pt : 6
      }}
    >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius:'10px',
            width:'70%',
            m:"auto",
            py:5,
            border : "1px solid silver",
            background: "rgb(0 0 0 / 0.6)",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              color="primary"
              focused
              autoFocus
            />
            <Typography variant="h6" fontSize={15} color="red" id="erroremail"></Typography><br />

            <TextField
              margin="normal"
              required
              fullWidth
              color="primary" 
              name="password"
              label="Password"
              type="password"
              id="password"
              focused
              autoComplete="current-password"
            />
            <Typography variant="h6" color="red" id="errorpass"></Typography><br />

            <Typography variant="h6" color="red" id="errormsg"></Typography><br />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ml:9, mt: 0, mb: 3, width : "50%" }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Register" variant="body2" style={{ color:"orange",fontWeight:"bold", textDecoration:"none"}}>
                  Don't have an account? Click Here Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
          </Paper>
  );
}