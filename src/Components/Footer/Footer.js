import { Box, Typography } from '@mui/material';
import React from 'react'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <Box sx={{ bgcolor: 'silver', p: 3 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Books Library
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        We Hope You Found What You Need
      </Typography>
      <Grid container spacing={2} sx={{width: {lg :'25%', md:'35%', sm: "50%", xs: '100%' }, m:"auto", background:"gray", borderRadius:"10px", pb:2}} >
        <Grid item >
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>

  )
}

export default Footer;