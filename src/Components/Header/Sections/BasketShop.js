import React, {useState, useContext} from 'react'
import { Typography, Box, Menu, MenuItem, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../../Context/ContextShopping';
//            <ShoppingCartIcon sx={{ color: 'orange' }}  id="shoppingcard" />

function BasketShop() {
  const isLogin = localStorage.getItem('getID');
  const [BasketNav, setBasketNav] = useState(null);
  const {store, listbooks, userbudget} = useContext(ShoppingContext);

  const handleOpenNavBasket = (event) => {
    setBasketNav(event.currentTarget);
  };

  const handleCloseNavBasket = () => {
    setBasketNav(null);
  };



  return (

    <Box sx={{ mr: 2 }} >
      {isLogin ?
        <React.Fragment>
          <Box sx={{ display: 'inline' }}>
            
            
            <IconButton color="inherit">
              <Badge badgeContent={`${store}`} color="secondary">
                <ShoppingCartIcon onClick={handleOpenNavBasket} />
              </Badge>
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={BasketNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(BasketNav)}
              onClose={handleCloseNavBasket}

            >
              {listbooks.length == 0 ?
                <Box sx={{ bgcolor: 'black', color: 'white', mb: 1, pt: 1, px: 1 }}>
                  <Typography textAlign="center" sx={{ color: 'white', fontWeight: "bold" }}> Your Budget : <span style={{ color: 'red' }}>{userbudget} $</span></Typography>
                  <Typography variant='body2' sx={{ color: "orange", bgcolor: 'black', px: 0, py: 2 }} >The Busket is Empty, You have Not add Books Yet ...</Typography>
                  <Link to="/sales_list" style={{ textDecoration: "none", color: ' rgb(180, 206, 255)', fontsize: "17px", fontWeight: 'bold', position: 'relative', left: '30%' }} onClick={handleCloseNavBasket}>Show List</Link>
                </Box>
                :
                <Box sx={{ bgcolor: 'black', color: 'white', mb: 1, pt: 1, px: 1 }}>
                  <Box sx={{ display: 'flex' }}>
                    <PaidIcon sx={{ ml: 1, mr: 0.5 }} />
                    <Typography textAlign="center" sx={{ color: 'white', fontWeight: "bold" }}> Your Budget : <span style={{ color: 'red' }}>{userbudget} $</span></Typography>
                  </Box>
                  <Typography textAlign="center" sx={{ color: 'orange', fontWeight: "bold", my: 1 }}>{store} Books added : </Typography>
                  {listbooks.map((book, index) => (
                    <MenuItem key={index} onClick={handleCloseNavBasket}>
                      <Link to={`/bookItem/${book.id}`} style={{ textDecoration: 'none' }}><Typography textAlign="center" sx={{ pb: 1, color: 'white' }}>{index + 1} - {book.volumeInfo.title.slice(0, 25)} ...</Typography> </Link>
                    </MenuItem>
                  ))}
                  <Link to="/sales_list" style={{ textDecoration: "none", color: ' rgb(180, 206, 255)', fontsize: "17px", fontWeight: 'bold', position: 'relative', left: '30%' }} onClick={handleCloseNavBasket}>Show List</Link>

                </Box>
              }

            </Menu>
          </Box>
        </React.Fragment>
        :
        <React.Fragment>
          <RemoveShoppingCartIcon />
        </React.Fragment>
      }

    </Box>

  )
}

export default BasketShop

