import React, { useState, useContext } from 'react'
import { Modal, Container, Button, AppBar, Typography, Box, Avatar, Toolbar, CssBaseline, IconButton, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as Linko } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import SearchInput from './Sections/Search';
import BasketShop from './Sections/BasketShop';
import logo from '../../assets/images/logo.jpeg';
import './style.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'rgb(0 0 0 / 0.9)',
  textAlign: "center",
  boxShadow: 24,
  width: '600px',
  py: 2,
  border: '2px solid white'
};

const pages = ['Home', 'About', "Filter", 'Rate'];
const links = ['Adventure', 'Classics', 'Crime', 'Fantasy', 'Historical fiction', 'Horror', 'Humour and satire'];

function Header() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const isLogin = localStorage.getItem('getID');
  const navigate = useNavigate();



  const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
  };

  const CloseModal = () => {
    setTimeout(handleClose, 2000);
    console.log('hello')
}




  const Logout = () => {
    if (localStorage) {
      localStorage.clear()
      navigate('/');
    }
  };
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  console.log(loading);

  return (
    <React.Fragment>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {result ?
            <>
              {result.map((res, index) => (
                <Box sx={{ display: "flex", ml: 10, mt: 2 }} key={index}>
                  <Box
                    component="img"
                    sx={{
                      height: 233,
                      width: 350,
                      maxHeight: { xs: 40, md: 40 },
                      maxWidth: { xs: 40, md: 50 },
                      border: '2px solid orange',

                    }}
                    alt="The house from the offer."
                    src={res.volumeInfo.imageLinks && res.volumeInfo.imageLinks.smallThumbnail ? res.volumeInfo.imageLinks && res.volumeInfo.imageLinks.smallThumbnail : "https://source.unsplash.com/random"}
                  />
                  <Typography variant='h6' sx={{ ml: 3, color: 'white' }} > {index + 1} - <Link to={`buy/${res.id}`} style={{ textDecoration: 'none' }} id='book_link' onClick={CloseModal} >{res.volumeInfo.title}</Link> .</Typography>
                </Box>
              ))
              }
            </>
            :
            <>
              <CircularProgress sx={{ color: '#00bcd4' }} />
              <Typography variant='h6' sx={{ color: '#00bcd4' }}>Loading For Books Data ...</Typography>
            </>
          }


        </Box>
      </Modal>

      <AppBar position="static" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CssBaseline />
            <Avatar alt="User avatar" src={logo} />
            <Typography
              variant="h5"
              //noWrap
              component={Link}
              to="/"
              sx={{
                ml: 1,
                mr: 2,
                display: { xs: 'flex' },
                flexGrow: { md: 0.3, sm: 1 },
                letterSpacing: { md: ".2rem" },
                fontFamily: "Proxima Nova",
                color: 'inherit',
                textDecoration: 'none',
                fontSize: { xs: 13, sm: 16, md: 20 }
              }}
            >
              Library Books
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link to={page === 'Home' ? '/' : `${page}`} key={page} style={{ textDecoration: 'none' }}><Button
                  id="btnnavlink"
                  //onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: 15, fontWeight: "bold", ml: 5, position: "relative", top: 3 }}
                >
                  {page}
                </Button></Link>
              ))}
            </Box>
            <BasketShop />

            <SearchInput handleOpen={handleOpen} setResult={setResult} result={result} setLoading={setLoading} />

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },

                }}
            >
                {pages.map((page, index) => (
                    <Box key={index} >
                        <Link to={page === 'Home' ? '/' : `${page}`} style={{ textDecoration: 'none' }}><Button
                            id="btnnavlink"

                            sx={{ my: 2, color: 'white', display: 'block', fontSize: 15, fontWeight: "bold", m: 1, position: "relative", top: 3 }}
                        >
                            <Typography variant='h6' sx={{ color: "rgb(0, 89, 255)", fontSize: '15px', }}>{page}</Typography>

                        </Button></Link>
                    </Box>
                ))}
                {isLogin ?
                    <Box sx={{}}>

                        <Link to='/Profile' >
                            <Avatar alt="Profile" src="https://xsgames.co/randomusers/avatar.php?g=male" sx={{ ml: 2, mt: 4, width: 40, height: 40, border: '1px solid gray' }} />
                        </Link>
                        <Button onClick={Logout} style={{ display: 'block', fontWeight: 'bold', color: 'red', border: '1px solid red' }}>
                            Logout
                        </Button>

                    </Box>
                    :
                    <Box>
                        <Button variant="contained" size="small" onClick={() => navigate('/login')} >
                            Login
                        </Button>
                        <Button variant="contained" size="small" sx={{ ml: 2 }} onClick={() => navigate('/Register')}>
                            Register
                        </Button>
                    </Box>

                }
            </Menu>
        </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ padding: 1, display: { xs: 'none', md: 'flex' } }}
      >
        {links.map((link) => (
          <Linko
            id="categorieLink"
            color="inherit"
            //noWrap
            key={link}
            variant="body2"
            component={Link}
            to={`/BooksList/${link}`}
            sx={{ p: 1, pr: { lg: 9.5, xs: 5, xl: 20 }, flexShrink: 0, textDecoration: 'none', fontWeight: "bold", m: "auto" }}
          >
            {link}
          </Linko>
        ))}

        {isLogin ?
          <Box>
            <Button onClick={Logout} style={{ position: 'relative', bottom: 12, right: 15, textDecoration: 'none', color: "red", fontWeight: "bold", "&:hover": { backgroundColor: 'lightblue' } }}>
              Logout
            </Button>
            <Link to='/Profile' >
              <Avatar alt="Profile" src="https://xsgames.co/randomusers/avatar.php?g=male" sx={{ display: "inline-block", width: 40, height: 40, border: '1px solid gray' }} />
            </Link>
          </Box>
          :
          <Box>
            <Button variant="outlined" size="small" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="contained" size="small" sx={{ ml: 2 }} onClick={() => navigate('/Register')}>
              Register
            </Button>
          </Box>

        }

      </Toolbar>
    </React.Fragment >

  )
}

export default Header;