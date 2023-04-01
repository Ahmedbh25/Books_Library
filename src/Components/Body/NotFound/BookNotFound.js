import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import bookswall from "../../../assets/images/bookswall.jpg";

function BookNotFound() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
                backgroundImage: `url(${bookswall})`,
            }}
        >
            <Container maxWidth="md" style={{ width: "80%", margin: "auto", }} >
                <Grid container spacing={2}>
                    <Grid xs={6} >
                        <Typography variant="h1" sx={{ margin: "30px", color:'red' }} >
                            400
                            <SentimentVeryDissatisfiedIcon sx={{ width: "80px", height: "80px" }} />
                        </Typography>

                        <Alert severity="warning" sx={{ margin: "30px", width: "160%", fontSize: "30px", borderRadius: "30px" }}>
                            This Book Is not available for rating right now
                        </Alert>
                        <Button variant="contained" color="error" onClick={() => navigate('/Rate')} sx={{ margin: "30px", ml:10 }}>Go Back</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default BookNotFound