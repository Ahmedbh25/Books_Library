import React, { useState, useRef, useContext } from 'react'
import { Grid, Box, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReviewContext } from '../../../../Context/ContextReview';
import Books from '../../../../Data/Books.js';
import Reviews from '../../../../Data/Reviews.js';

function Review() {
  const [review, setReview] = useState(Reviews.filter(review => review.user_id == localStorage.getItem('getID')));
  const [ShowModal] = useContext(ReviewContext);
  const [open, setOpen] = useState(false);
  
  const bookRef = useRef(null);
  const opinionRef = useRef(null);
  const errorBook = useRef(null);
  const errorDescription = useRef(null);

  const handleOpen = () => setOpen(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = bookRef.current.value;
    const opinion = opinionRef.current.value;

    if (book.trim() === "") {
      errorBook.current.innerHTML = 'Empty Field Please Enter Book Name !';
      return;
    } else {
      errorBook.current.innerHTML = ''
    }

    if (opinion.trim().length < 8) {
      errorDescription.current.innerHTML = 'This Field Must Contain at Least 8 Caracters ! ';
      return;
    } else {
      errorDescription.current.innerHTML = ''
    }

    let bookID = Books.filter(booky => booky.name.toLowerCase().trim() == book.toLowerCase().trim());

    if (bookID.length !== 0) {
      bookID = bookID[0].id;
      const test = review.filter(rev => rev.book_id == bookID)
      console.log(test)
      if (test.length !== 0) {
        return errorBook.current.innerHTML = 'This book has already been rated';
      }
      else {
        errorBook.current.innerHTML = '';
      }
    }
    else {
      return errorBook.current.innerHTML = 'This book is not available in our list right now'
    }

    const newReview =
    {
      id: review.length + 1,
      user_id: localStorage.getItem('getID'),
      review: opinionRef.current.value,
      book_id: bookID,
    };

    console.log(newReview)
    setReview([newReview, ...review]);
  }

  const HandleDelete = (e) => {
    /* Add Code Here To Delete is From Databse,
    if not when The Page Reload The Deleted Element Will Show Again */
    console.log(e.target.value)
    setReview(review.filter(rev => rev.id != e.target.value));
  }
  const BookNames = [];
  review.map(rev => Books.map(book => book.id == rev.book_id && BookNames.push(book.name)));

  return (
    <Box sx={{ background: "rgb(0 0 0 / 0.9)", color: 'white', pb: 5 }}>
      <Box>
        <Link to="/profile" className="fixedbtn">Profile</Link>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '10px',
            width: '70%',
            m: "auto",
            py: 5,
          }}
        >
          <Typography variant='h3' sx={{ color: 'white' }}>Add Review</Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              inputRef={bookRef}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Book Name"
              name="name"
              autoComplete="name"
              color="primary"
              focused
              autoFocus
            />
            <Typography variant="h6" fontSize={15} color="red" id="erroremail" ref={errorBook}></Typography><br />
            <TextField
              inputRef={opinionRef}
              id="review"
              label='Add Book Review'
              multiline
              rows={3}
              sx={{ width: 350 }}
              focused
            />

            <Typography variant="h6" fontSize={15} color="red" id="erroremail" ref={errorDescription}></Typography><br />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ ml: 9, mt: 0, mb: 3, width: "50%" }}
              onClick={handleSubmit}
            >
              add Review
            </Button>
          </Box>
        </Box>
      </Box>
      {review.map((rev, index) => (
        <Grid item key={rev.id} xs={12} sm={6} md={4} sx={{ border: '2px solid silver', borderRadius: '10px', width: '70%', m: "auto", p: 2, mb: 5, overflow: 'auto' }}>
          <Typography variant="h5" sx={{ mb: 2, ml: 2 }} >Name :  {BookNames[index]}. </Typography>
          <Typography variant="h5" sx={{ mb: 3, ml: 2 }}  >Review :  {rev.review}. </Typography>
          <Box sx={{ ml: 4, mt: 2 }} >
            <Button onClick={HandleDelete} value={rev.id} sx={{ border: '1px solid red' }}>Delete</Button>
            <Button onClick={handleOpen} sx={{ ml: 4, border: '1px solid red' }}>Update</Button>
            <ShowModal open={open} setOpen={setOpen} UpdateKey={rev.id} review= {review} setReview={setReview} />
          </Box>
        </Grid>
      ))}

    </Box>
  )
}

export default Review;