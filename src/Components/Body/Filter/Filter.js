import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Box, InputLabel, Select, MenuItem, FormControl, Typography, Paper, Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, AlertTitle, CircularProgress, TextField } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import SingleBook from "../SingleBook/SingleBook"
import Loading from '../Loading/Loading';
import wallpaper from "../../../assets/images/background4.jpg";
import { getBooks } from '../../utils/BooksApi';

const theme = createTheme();
function Filter() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChangeSelect = (event) => {
    setFilter(event.target.value);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilterdResult = async () => {
    setLoading(true)

    if (filter === "author" && search.length > 3) {

      getBooks(search, 'inauthor:%22').then(data => setResult(data));

    } else if (filter === "title" && search.length > 3) {

      getBooks(search, 'intitle:%22').then(data => setResult(data));

    } else if (filter === "publisher" && search.length > 3) {

      getBooks(search, 'inpublisher:%22').then(data => setResult(data));

    } else if (filter === "subject" && search.length > 3) {
      getBooks(search, 'subject:%22').then(data => setResult(data));

    } else if (search.length < 4) {
      document.getElementById("attention").innerHTML = "Search Must Contain More Than 3 Caracters";
    } else if (result.length === 0) {
      document.getElementById('attention').innerHTML = `There is no results That mutch ${search} !`;
    }
    if (filter === '') {
      document.getElementById("attention").innerHTML = "You Must Select one Field of The List";
    }
    if (search.length > 3) {
      document.getElementById("attention").innerHTML = "";

    }
    setLoading(false);

    console.log(result);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'rgb(219, 219, 219)', pb: 5 }}>
        <Paper
          sx={{
            backgroundColor: 'grey.800',
            color: '#fff',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${wallpaper})`,
            height: "650px"

          }}
        >
          <Container sx={{ width: "70%", pt: 6 }}>



            <FormControl variant="standard" sx={{ background: "rgb(0 0 0 / 0.6)",display: 'flex',flexDirection: 'column',alignItems: 'center', borderRadius: "10px", px: { md: "200px", sm:"100px" }, py: { md: "80px", xs: "50px" }, border: "1px solid silver" }}>
            <Typography sx={{ m: "auto", fontSize: { lg: 40, md: 25, xs: 16 }, fontWeight: { md: "bold" } }} component="h1" variant="h3" color="inherit" gutterBottom>
              Find & Buy Books :
            </Typography>
              <InputLabel id="demo-simple-select-standard-label">Filter:</InputLabel>
              <Select
                sx={{ border: '1px solid white', pl:2, width:'250px',borderRadius:"5px", color:'white', fontSize:"20px" }}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={filter}
                onChange={handleChangeSelect}
                label="Filter"
                
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="author">authors</MenuItem>
                <MenuItem value="title">title</MenuItem>
                <MenuItem value="publisher">publisher</MenuItem>
                <MenuItem value="subject">subject</MenuItem>
              </Select>
              {filter !== "" ?
                (<TextField
                  sx={{ mt: 3 ,  fontSize:"18px"}}
                  id="email"
                  label="Search"
                  value={search}
                  focused
                  onChange={handleChangeSearch}
                />) :
                ''
              }
              <Typography variant="body2" display="block" id="attention" sx={{fontSize:'15px', color: "red", mt:2, fontWeight:"bold" }} gutterBottom></Typography>
              <Button variant="contained" color="success" sx={{ mt: 3 }} onClick={getFilterdResult}>Search</Button>
              <Typography variant="body2" display="block"  sx={{fontSize:'18px', color: "white", mt:2, fontWeight:"bold" }} gutterBottom>Books Result Down</Typography>
              <ArrowDownwardIcon sx={{m:'auto',  fontSize: "80px"}}/>

            </FormControl>
          </Container>
        </Paper>

        {loading && search.length > 3 && result ? (
          <Loading />
        ) :
          (result ?
            (
              <Container sx={{ py: 0, mt: 5 }} maxWidth="md" >
                <Grid container spacing={4}>
                  {result.map((book, index) => (
                    <Grid item key={index} xs={12} sm={5} md={3}>
                      <SingleBook Databook={book} />
                    </Grid>
                  ))}
                </Grid>
              </Container>

            ) :
            ( 
                <Alert severity="info" sx={{ width: "50%", m: "auto",mt:5, p:5, bgcolor: 'pink', color: "red" }} >
                  <AlertTitle>Books</AlertTitle>
                  <Typography >There is no Books That Match [ {search} ] String — <strong>Enter a Correct Information Next Time .... <MoodBadIcon /></strong></Typography>
                </Alert>
            )
          )

        }

      </Box>
    </ThemeProvider>
  )
}

export default Filter;