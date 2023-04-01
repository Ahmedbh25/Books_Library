import React, { useState, createContext, useContext } from 'react'

import { CardMedia, FormControl, Container, Alert, Modal, Button, Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import tobuybook from "../assets/images/tobuybook.jpg";
import { useNavigate } from 'react-router-dom';
export const ShoppingContext = createContext();

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


const BookData = () => {
    const {book, message, setMessage, addRateValue} = useContext(ShoppingContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => {
        setMessage('');
        setOpen(false);
    };
    
    return (
        <Box sx={{ backgroundColor: "#b4b4b4", }}>
            <CardMedia
                width="100%"
                height="200px"
                component="img"
                sx={{
                    // 16:9
                    pt: '0%',
                    mb: "50px"
                }}
                image={tobuybook}
                alt={tobuybook}
            />
            <Container sx={{ pb: 10, display: "flex" }}>

                <img
                    src={(book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail) || 'https://picsum.photos/200/300'}
                    style={{ width: "250px", borderRadius: '5px', border: '1px solid black' }}
                />
                <Box sx={{ mt: 0, ml: 10 }}>

                    <Typography variant='h5' sx={{ my: 5 }} >Click The Link Bellow For Rating Book</Typography>
                    <Typography variant='h6' sx={{ mb: 5 }} >title : {book.volumeInfo.title}</Typography>
                    <Typography variant='h6' sx={{ mb: 5 }} >Author : {book.volumeInfo.authors}</Typography>
                    <Button variant="outlined" onClick={handleOpen} sx={{ ml: 2 }}> Buy This Book </Button>
                </Box>
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    < ShoppingCartIcon style={{ width: "250px", height: "120px", color: 'yellow' }} /><br />

                    <Typography variant="h6" color="#ff9800" component="legend">Title : </Typography>
                    <Typography variant="h6" component="h5" sx={{ color: 'white', width :"70%", m:"auto" }}> {book.volumeInfo.title}</Typography>
                    <FormControl onSubmit={(e) => e.preventDefault()}>
                        <Button variant="contained" sx={{ mt: 5 }} onClick={addRateValue}>Add Book</Button>
                    </FormControl>
                    {message == 'Book Added To The Basket' ?
                        <Alert variant="filled" severity="success" sx={{width :"70%", m:"auto", mt: 2 }} >
                            This Book was Added Successfully
                        </Alert>
                        :
                        <Typography variant="h6" component="h6" sx={{ mt: 2, color: 'red' }}> {message}</Typography>
                    }
                </Box>
            </Modal>
        </Box>
    )
}

function ShoppingProvider(props) {
    const [book, setBook] = useState([]);
    const [store, setStore] = useState(0);
    const [listbooks, setListbooks] = useState([]);
    const [userbudget, setUserbudget] = useState(Math.floor(Math.random() * (100 - 30 + 1)) + 30);
    const [message, setMessage] = useState('');
    const [price, setPrice] = useState(Math.floor(Math.random() * (25 - 12 + 1)) + 12);
    const navigate = useNavigate();
    console.log(listbooks);

    const addRateValue = async () => {
        const findBook = listbooks.filter(booky => booky.volumeInfo.title == book.volumeInfo.title);

        if (findBook.length > 0) {
            return setMessage("You Buy This Book Before !")
        } else if (userbudget < price) {
            return setMessage(`Your Budget is ${userbudget} $, Not Enough To Buy This Book That Cost ${price} $ !`);
        } else {
            setMessage('');
        }
        setStore(store + 1);
        setListbooks([...listbooks, book]);
        const newUserBudget = userbudget - price;
        setUserbudget(newUserBudget);
        setMessage('Book Added To The Basket');


    }

    const UpdateBasket = (e) =>{
        const DeleteBook = listbooks.filter(book => book.id != e.target.value);
        console.log(DeleteBook);
        console.log(e.target.value);
        setStore(store - 1);

        navigate('/sales_list');

        if(listbooks.length == 1){
            setUserbudget(Math.floor(Math.random() * (100 - 30 + 1)) + 30);
            setListbooks(DeleteBook);
        }else{
            setListbooks(DeleteBook);
        }
    }

    return (
        <ShoppingContext.Provider value={{book, setBook, store, setStore, listbooks, setListbooks, userbudget, message, setMessage, addRateValue, price, BookData, UpdateBasket}}>
            {props.children}
        </ShoppingContext.Provider>
    )
}

export default ShoppingProvider