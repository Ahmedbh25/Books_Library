import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import GradeIcon from '@mui/icons-material/Grade';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import { useNavigate, useParams } from "react-router-dom";
import { FormControl } from '@mui/material';
import { Container } from '@mui/system';

import { getBooks } from '../../utils/BooksApi';
import Loading from '../Loading/Loading';
import BookNotFound from '../NotFound/BookNotFound';
import './style.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'rgb(0 0 0 / 0.9)',
  textAlign: "center",
  boxShadow: 24,
  width: '450px',
  py: 10,
};

const boxSX = {
  "&:hover": {
    border: "1px solid #ffcdd2",
    color: 'red',
    backgroundColor: '#757575'
  },
};

export default function Ratings() {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState([]);
  const [add, setAdd] = useState(false);
  const [loading, setLoading] = useState(true);
  const [exist, setExist] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const params = useParams();


  const handleClick = (e) => {
    setValue(Number(e.target.value));
  }

  const addRateValue = async () => {
    // verify id user add a rate on this movie once
    // if yes set the state of exist true
    if (!exist && value) {
      setAdd(true);
      await setInterval(() => {
        setValue(null);
        setAdd(false);
        window.location.replace('/');
        //navigate('/', { replace: false });
      }, 2000);
    }
  }

  const getBook = async () => {
    setLoading(true);

    await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params.idBook}&key=AIzaSyDKG8AN_GKcPk-V3AaA0DXYvuJ2kpdXUG8`)
      .then(res => {
        setBook(res.data.items[0])
      })
      .catch(error => {
        //setBook(null)
        console.log(error)
      })
    setLoading(false);
  }
  useEffect(() => {
    if (!localStorage.getItem("getFirstName")) {
      navigate('/Login');
    } else {
      getBook();
    }
  }, [])

  return (
    <Box sx={{ backgroundColor: "silver" }}>
      {loading ?
        (
          <Loading />
        )
        : book.length !== 0 ?
          (
            <Container sx={{ py:10, display: "flex" }}>
              <img
                src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail || 'https://picsum.photos/200/300'}
                style={{ width: "250px", borderRadius: '5px' }}
              />
              <Box sx={{ mt: 0, ml: 5 }}>

                <Typography variant='h5' sx={{ my: 5 }} >Click The Link Bellow For Rating Book</Typography>
                <Typography variant='h6' sx={{ mb: 5 }} >title : {book.volumeInfo.title}</Typography>
                <Typography variant='h6' sx={{ mb: 5 }} >Author : {book.volumeInfo.authors}</Typography>
                <Button variant="outlined" onClick={handleOpen} sx={{ ml: 2 }}> Rate Book </Button>
              </Box>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                    <GradeIcon style={{ width: "250px", height: "120px", color: 'yellow' }} /><br />
                    <Typography variant="h6" color="#ff9800" component="legend">Rate This Book</Typography>
                    <Typography variant="h6" component="h5" sx={{ color: 'white' }}>Book : {book.volumeInfo.title}</Typography>
                    <FormControl onSubmit={(e) => e.preventDefault()}>
                      <Rating name="customized-10" value={value} onClick={handleClick} max={10}        sx={{my: 5, p: 1,color:'orange', backgroundColor:'rgb(240, 240, 240)', borderRadius:"5px" }} />
                      <Button variant="contained" sx={{ width: "50%", m: "auto" }} onClick={addRateValue}>Rate</Button>
                    </FormControl>
                    {value && book.length !== 0 && add ?
                      <Alert variant="filled" severity="success" sx={{ mt: 2  }} >
                        This Book was rated Successfully
                      </Alert>
                      : exist ?
                        <h2>Error you rate this number once </h2>
                        : !value && add ?
                          <h2>add rate number please ... </h2>
                          : ''
                    }
                </Box>
              </Modal>
            </Container>
          )
          :
          <BookNotFound />
      }
    </Box>

  );
}