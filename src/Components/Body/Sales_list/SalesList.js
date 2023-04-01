import React, { useContext } from 'react'
import { Typography, Box, Paper, Container, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { ShoppingContext } from '../../../Context/ContextShopping';
import backgroundImg from '../../../assets/images/background1.jpg';

function SalesList(e) {
    const {listbooks, UpdateBasket} = useContext(ShoppingContext);

    return (
        <Paper sx={{
            backgroundImage: `url(${backgroundImg})`,
            color: '#fff',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }} >
            <Box sx={{ textAlign: 'center',background: "rgb(0 0 0 / 0.6)", pt: 5 }}>
                <Typography variant="h3" sx={{  fontWeight: 'bold', m:3 }} >List Of Sales</Typography>
                {listbooks.length > 0 ?
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {listbooks.map((itembook, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
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
                                        image={itembook.volumeInfo.imageLinks && itembook.volumeInfo.imageLinks.smallThumbnail ? itembook.volumeInfo.imageLinks && itembook.volumeInfo.imageLinks.smallThumbnail : "https://source.unsplash.com/random"}
                                        alt={itembook.volumeInfo.imageLinks && itembook.volumeInfo.imageLinks.smallThumbnail}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="body1" display="block" >
                                            {itembook.volumeInfo.title}
                                        </Typography>
                                        <Button variant='outlined' sx={{ mt: 1, color: 'red', borderColor: 'red' }} value={itembook.id}  onClick={UpdateBasket} id="updated">Delete recumendation</Button>
                                    </CardContent>

                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                :
                <Typography variant="h6" sx={{pb : 40}}>You have not Recommande Books Yet ...</Typography>           
                }

            </Box>
        </Paper>
    )
}

export default SalesList