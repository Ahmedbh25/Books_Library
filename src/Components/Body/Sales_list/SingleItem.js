import React, {  useContext } from 'react'
import { Typography, Box, Card, CardMedia, CardContent, Grid, Container, Paper, Button } from '@mui/material';
import { ShoppingContext } from '../../../Context/ContextShopping';
import { useParams } from 'react-router-dom';
import  backgroundImg from '../../../assets/images/background1.jpg';

function SingleItem() {
    const {book, listbooks,  UpdateBasket} = useContext(ShoppingContext);

    // the useCallback for prevent bookItem/qbrgAAAAMAAJ, whene listbooks && BookItem undefined.
    const bookid = useParams();

    let BookItem = listbooks.filter(book => book.id == bookid.ItemID)[0];

    console.log(BookItem)
    let Thumbnail = BookItem.volumeInfo.imageLinks && BookItem.volumeInfo.imageLinks.smallThumbnail;

    return (
        <Paper sx={{
            backgroundImage: `url(${backgroundImg})`,
            color: '#fff',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }} >
            <Box sx={{ background: "rgb(0 0 0 / 0.6)", pt: 5 }}>
                <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold' }} >List Of Sales</Typography>

                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item key={book.id} xs={12} sm={6} md={4}>

                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}
                            >
                                <CardMedia
                                    width="50%"
                                    height="250px"
                                    component="img"
                                    sx={{
                                        // 16:9
                                        pt: '0%',
                                    }}
                                    image={Thumbnail ? Thumbnail : "https://source.unsplash.com/random"}
                                    alt={Thumbnail}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="body1" display="block" >
                                        {BookItem.volumeInfo.title}
                                    </Typography>
                                    <Button variant='outlined' sx={{mt:1, color: 'red', borderColor:'red'}} value= {BookItem.id} onClick={UpdateBasket}>Delete recumendation</Button>

                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Paper>
    )
}

export default SingleItem