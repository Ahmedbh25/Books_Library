import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import {Typography, Paper, Container } from '@mui/material';


function Loading() {
    return (
        <Paper
            sx={{
                backgroundColor: 'black',
                color: '#fff',
                backgroundPosition: 'center',
                height: "500px",
            }}
        >
            <Container sx={{ width: { xs: "50%", md: '30%' }, pt: "150px" }}>
                <CircularProgress sx={{ width: "150px", color: "green", ml: "100px" }} />
                <Typography variant="h6">Loading From Book's Data ...</Typography>
            </Container>
        </Paper>
    )
}

export default Loading