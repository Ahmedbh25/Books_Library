import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import wallpaper from "../../../assets/images/background5.jpg";

import { useNavigate } from 'react-router-dom';
import Users from '../../../Data/Users'
import './style.css'



export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email = data.get('email');
    const password = data.get('password');
    const First_name = data.get('firstName');
    const Last_name = data.get('lastName');
    const username = data.get('username');
    const verify_username = Users.filter(user => { return user.Username === username })
    const verify_email = Users.filter(user => { return user.email === email })

    if (email.length === 0 || First_name.length === 0 || password.length === 0 || Last_name.length === 0 || username.length === 0 ) {
      document.getElementById("Register_Error").innerHTML = "Empty Field, Verify Your Inputs";
    }else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
      document.getElementById("Register_Error").innerHTML = "email must mutch this form xxxxxx@xxxx.xxs";
    }/*else if(!(/^[A-Z][a-z][0-9]{8,20}$/.test(email))){
      document.getElementById("Register_Error").innerHTML = "password must contain over 7 caracter, numbers and letters";
    }*/
    else if(verify_email.length !== 0){
      document.getElementById("Register_Error").innerHTML = "This Email is Used by another Person";
    }else if (verify_username.length !== 0) {
      document.getElementById("Register_Error").innerHTML = "This Username is Used by another Person";

    }else{
      document.getElementById("Register_Error").innerHTML = "";
      const created = true;
      if(created){
        // add user informations to localstorage
          localStorage.setItem("getUsername", username);
          localStorage.setItem("getEmail", email);
          localStorage.setItem("getFirstName", First_name);
          localStorage.setItem("getSirstName", Last_name);
          window.location.replace('/profile');
        }else{
          document.getElementById("Register_Error").innerHTML = "Account cannot be created for some reasons";
        }
    }


    // add user to the database.


  };

  return (
    <Paper
      sx={{
        backgroundColor: 'grey.800',
        color: 'white',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${wallpaper})`,
        height: {md:"650px", sx:"700" },
        pt : 6,
        pb : 6
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
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 , width : '50%' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  focused
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  focused
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  focused
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  focused
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  focused
                />
              </Grid>
            </Grid>
            <Typography variant="h6" id="Register_Error" color="red"></Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: 3, mb: 3, width : {md : "40%"}, ml: {md: 14, lg: 16} }}
            >
              Sign Up
            </Button>
            <Grid container >
              <Grid item>
                <Link to="/Login" variant="body2" style={{ color:"orange",fontWeight:"bold", textDecoration:"none"}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
  );
}