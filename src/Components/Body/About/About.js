import { Typography, createTheme, Box, CssBaseline, Avatar } from '@mui/material';
import React from 'react';
import wallpaper from "../../../assets/images/background4.jpg";


const theme = createTheme();

function About() {
  return (
    <Box sx={{ bgcolor: 'silver', p: 10,display: 'flex'  }}>
      <CssBaseline />
      <img alt="Profile" src={wallpaper} style={{ width: '50%', height: '500px', borderRadius:5}} />

      <Box>
        <Typography variant='h5' sx={{ mt: 5, ml: 5 }} >ABOUT US</Typography>

        <Typography variant='body2' sx={{ mt: 2, ml: 6 }}>
          Our Books Library Created in January 2023 We offre of users books
          with the best price.
          our Team are working for making The best Services for Clients.
        </Typography>

        <Typography variant='h5' sx={{ mt: 5, ml: 5 }}> A home for your books :</Typography>

        <Typography variant='body2' sx={{ mt: 2, ml: 6 }}>
          Enter what you're reading or your whole library. It's an easy, library-quality catalog.
        </Typography>
        <Typography variant='h5' sx={{ mt: 5, ml: 6}} >
          A community of 2,800 book lovers
        </Typography>
        <Typography variant='body2' sx={{ mt: 5, ml: 6 }} >
          LibraryThing connects you to people who read what you do.
        </Typography>
      </Box>

    </Box>
  );
}

export default About