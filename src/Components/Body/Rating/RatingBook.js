import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Button, FormControl, Typography, TextField, Paper, Container, Grid, Alert, AlertTitle } from '@mui/material';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import { useNavigate } from 'react-router-dom';
import { getBooks } from '../../utils/BooksApi';
import wallpaper from "../../../assets/images/background4.jpg";
import SingleBook from '../SingleBook/SingleBook';
import Loading from '../Loading/Loading';

function RatingBook() {
    const [value, setValue] = useState('');
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const SearchBook = async () => {
        setLoading(true);
        if(value.length < 3 ){
            return 
        }
        getBooks(value, 'intitle:%22').then(data => setBook(data));
        setLoading(false);
    }

    useEffect(() => {
        if (!localStorage.getItem("getFirstName")) {
            navigate('/Login');
        }
    }, [])
    console.log(book)
    return (

        <Box sx={{ mt: 1, borderRadius: 1, bgcolor:'silver', pb:5 }}>
            <Paper
                sx={{
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${wallpaper})`,
                    height: "500px"

                }}
            >
                <Container sx={{ width: "70%", pt: 6 }}>
                    <FormControl sx={{ background: "rgb(0 0 0 / 0.6)", display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: "10px", px: { md: "200px", sm: "100px" }, py: { md: "80px", xs: "50px" }, border: "1px solid silver" }}>
                        <Typography sx={{ m: "auto", fontSize: { lg: 40, md: 25, xs: 16 }, fontWeight: { md: "bold" } }} component="h1" variant="h3" color="inherit" gutterBottom>
                            Search Book To Rate :
                        </Typography>
                        <TextField label="Book's Name" color="primary" focused sx={{ mt: 8, mb: 3 }} value={value} onChange={handleChange} id='inputseart' />
                        <Button color='primary' variant="contained" size="medium" onClick={SearchBook} sx={{ width: "150px", m: "auto" }} >Search</Button>
                    </FormControl>
                </Container>
            </Paper>
            {loading & book ?
                (
                    <Loading />
                )
                : book ?
                    (
                        <React.Fragment>
                            <Typography variant="h6" sx={{ m: 'auto', width: '12%', border: '1px solid black', borderRadius: '5px', p: 1, mt: 2 }}>Books List : </Typography>
                            <Container sx={{ py: 0, mt: 5 }} maxWidth="md" >
                                <Grid container spacing={4}>
                                    {book.map((item, index) => (
                                        <Grid item key={index} xs={12} sm={5} md={3}>
                                            <SingleBook Databook={item} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                        </React.Fragment>
                    )
                    : 
                        (
                            <Box >
                            <Alert severity="info" sx={{ width: "60%", m: "auto",borderRadius: 2, mt:5, p: 15, bgcolor: 'pink', color: "red" }} >
                                <AlertTitle>Book Not Found</AlertTitle>
                                <Typography >There is no Books That Match [ {value} ] String — <strong>Enter a Correct Information Next Time .... <MoodBadIcon /></strong></Typography>
                            </Alert>
                            </Box>
                        )
            }
        </Box >

    )
}

export default RatingBook