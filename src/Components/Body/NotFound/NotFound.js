import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: "black",
                color:"orange"

            }}
        >
            <Container maxWidth="md" sx ={{ml : {xs:10}}} >
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Typography variant="h1">
                            404
                        </Typography>
                        <Typography variant="h4">
                            The page you’re looking for doesn’t exist.
                        </Typography>
                        <Button variant="contained" sx={{mt:5}} onClick={() =>navigate('/')}>Back Home</Button>
                    </Grid>


                </Grid>
            </Container>
        </Box>
    )
}

export default NotFound;