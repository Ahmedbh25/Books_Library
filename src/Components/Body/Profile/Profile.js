import React, { useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CallIcon from '@mui/icons-material/Call';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GradeIcon from '@mui/icons-material/Grade';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import download from "../../../assets/images/download.jpeg";
import review from "../../../assets/images/review.jpg";
import profile from "../../../assets/images/profile.png";
import "./style.css"

const mdTheme = createTheme();
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Profile() {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("getFirstName")) {
      navigate("/login")
    }
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex', bgcolor: "silver" }}>
        <Box sx={{ display: 'flex' }} >
          <Box sx={{ bgcolor: '#1d1d1d', height: '700px', py: 2 }}>
            <Avatar alt="Remy Sharp" src="https://xsgames.co/randomusers/avatar.php?g=male" sx={{ display: "inline-block", width: 80, height: 80, border : "2px solid white" }} />
            <Typography variant="h4" sx={{ color: "white", mt: 5 }}>{localStorage.getItem("getFirstName")} {localStorage.getItem("getSecondName")} </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: '16px', color: "white", mt: 2 }}></Typography>
            <Box sx={{ width: '80%', mt: 5, maxWidth: 360, bgcolor: 'background.paper' }}>
              <nav aria-label="main mailbox folders">
                <List sx={{bgcolor: "#1d1d1d"}}>
                  <Link to="/Contacts" style={{ textDecoration: 'none', color:"white" }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <CallIcon sx={{color:"white"}} />
                        </ListItemIcon>
                        <ListItemText primary="Contact Us" />
                      </ListItemButton>
                    </ListItem>
                  </Link>

                  <Link to="/Profile/reviews" style={{ textDecoration: 'none', color:"white"  }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <VisibilityIcon sx={{color:"white"}}  />
                        </ListItemIcon>
                        <ListItemText primary="Make a Review" />
                      </ListItemButton>
                    </ListItem>
                  </Link>

                  <Link to="/profile/update" style={{ textDecoration: 'none' , color:"white" }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <PeopleAltIcon  sx={{color:"white"}} />
                        </ListItemIcon>
                        <ListItemText primary="Update Profile" />
                      </ListItemButton>
                    </ListItem>
                  </Link>

                </List>
              </nav>
              <Divider />
              <nav aria-label="main mailbox folders">
                <List sx={{bgcolor: "#1d1d1d"}}>
                  <Link style={{ textDecoration: 'none', color:"white" }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <MenuBookIcon sx={{color:"white"}} />
                        </ListItemIcon>
                        <ListItemText primary="My Books List" />
                      </ListItemButton>
                    </ListItem>
                  </Link>

                  <Link style={{ textDecoration: 'none', color:"white"  }}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <GradeIcon sx={{color:"white"}}  />
                        </ListItemIcon>
                        <ListItemText primary="My Ratings" />
                      </ListItemButton>
                    </ListItem>
                  </Link>

                </List>
              </nav>
            </Box>
          </Box>
        </Box>
        <Grid container spacing={0} sx={{ mt: 5, ml: 10 }}>
          <Grid container spacing={4}>
            <Grid item xs sx={{ height: '80%' }} >
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}
              >
                <CardMedia
                  width="100%"
                  height="250px"
                  component="img"
                  sx={{
                    // 16:9
                    pt: '0%',
                  }}
                  image={download}
                  alt="Your Ratings"
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="body1" display="block" >
                    Update & add Contacts
                  </Typography>
                  <Divider color="gray" ></Divider>

                </CardContent>

                <CardActions>
                  <Link to={`/Contacts`} style={{ color: 'purple', textDecoration: 'inherit', fontWeight: "bold" }} ><StarHalfIcon sx={{}} /> Contact US <StarHalfIcon /></Link>

                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={4} sx={{ height: '80%' }}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}
              >
                <CardMedia
                  width="100%"
                  height="250px"
                  component="img"
                  sx={{
                    // 16:9
                    pt: '0%',
                  }}
                  image={review}
                  alt="eee"
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="body1" display="block"  >
                    Update & add Reviews
                  </Typography>
                  <Divider color="gray" ></Divider>

                </CardContent>

                <CardActions>
                  <Link to={`/Profile/reviews`} style={{ color: 'purple', textDecoration: 'inherit', fontWeight: "bold" }} ><RemoveRedEyeIcon sx={{}} /> Reviews <RemoveRedEyeIcon /></Link>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs sx={{ height: '80%' }}>

              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}
              >
                <CardMedia
                  width="100%"
                  height="250px"
                  component="img"
                  sx={{
                    // 16:9
                    pt: '0%',
                  }}
                  image={profile}
                  alt="eee"
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="body1" display="block" >
                    Update Profile
                  </Typography>
                  <Divider color="gray" ></Divider>
                </CardContent>
                <CardActions>
                  <Link to={`/profile/update`} style={{ color: 'purple', textDecoration: 'inherit', fontWeight: "bold" }} ><PersonIcon sx={{}} /> Profile <PersonIcon /></Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </ThemeProvider>
  )
}

export default Profile;