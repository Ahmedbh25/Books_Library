import React from 'react';
import { Grid, Typography, Paper, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Background1 from '../../../assets/images/background2.jpg';
import './style.css';
function Home() {
    const navigate = useNavigate()
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${Background1})`,
                height: "600px"
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',

                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                            width: { md: "150%" },

                        }}
                    >
                        <Typography sx={{ lineHeight: { md: "1.5em" }, fontSize: { md: 60 }, fontWeight: { md: "bold" } }} component="h1" variant="h3" color="inherit" gutterBottom>
                            Welcome To Our Books Library
                        </Typography>
                        <Typography sx={{ lineHeight: { md: "2em" }, fontSize: { md: 25 }, fontWeight: { md: "bold" }, ml: { md: 2 }, width: "85%" }} variant="h5" color="inherit" paragraph>
                            In our Library we offre you the ability to recommend Books, Rate, Review on Books & Sort List Of Books and Mutch More Services
                        </Typography>
                        {!localStorage.getItem('getID') ?
                            <React.Fragment>
                                <Button variant="contained" sx={{ ml: 10 }} onClick={() => { navigate('/Login') }}>Login Page</Button>

                                <Button variant="contained" sx={{ ml: 5 }} onClick={() => { navigate('/Register') }} >Register Page</Button>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Button variant="contained" sx={{ ml: 10 }} onClick={() => { navigate('/Filter') }}>Buy Book</Button>
                                <Button variant="contained" sx={{ ml: 10 }} onClick={() => { navigate('/Profile') }}>Profile</Button>
                                <Button variant="contained" sx={{ ml: 10 }} onClick={() => { navigate('/Contacts') }}>Contact US</Button>
                            </React.Fragment>
                        }
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}


export default Home;