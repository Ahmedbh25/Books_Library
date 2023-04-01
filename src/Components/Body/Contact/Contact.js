import React, { useState, useRef,useContext } from 'react';
import { Grid, Box, Typography, Button, TextField} from '@mui/material';
import { ReviewContext } from '../../../Context/ContextReview';
import { Link } from 'react-router-dom';

import Contacts from '../../../Data/Contacts.js';

function Contact() {
  const [contact, setContact] = useState(Contacts.filter(contact => contact.user_id == localStorage.getItem('getID')));
  const [ShowModal] = useContext(ReviewContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const opinionRef = useRef(null);
  const errorDescription = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = opinionRef.current.value;

    const verify_message = contact.filter(contact => contact.content === message);



    if (message.length < 8) {
      return errorDescription.current.innerHTML = "Your Message Must Contain over 7 Caracters";
    } else if (verify_message.length > 0) {
      return errorDescription.current.innerHTML = "You Write This Contact before";
    }else{
      errorDescription.current.innerHTML= "";
    }

    const date = new Date();
    const newContact = {
      id: contact.length + 1,
      user_id: localStorage.getItem('getID'),
      content: message,
      published_date: `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`
    }

    setContact([...contact, newContact])

  }
  const HandleDeleteContact = (e) => {
    /* Add Code Here To Delete is From Databse,
    if not when The Page Reload The Deleted Element Will Show Again */
    setContact(contact.filter(cont => cont.id !== parseInt(e.target.value) ));
  }
  
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
          <Typography variant='h3' sx={{ color: 'white' }}>Add Contact : </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              inputRef={opinionRef}
              id="review"
              label='Contact US'
              multiline
              rows={4}
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
              add Contact
            </Button>
          </Box>
        </Box>
      </Box>
      {contact.map(cont => (
        <Grid item key={cont.id} xs={12} sm={6} md={4} sx={{ border: '2px solid silver', borderRadius: '10px', width: '70%', m: "auto", p: 2, mb: 5, overflow: 'auto' }}>
          <Typography variant="h5" sx={{ mb: 3, ml: 2}}  >Contact Message :  {cont.content}. </Typography>
          <Typography variant="h6" sx={{ mb: 3, ml: 2 }}  >Date Of Publication :  {cont.published_date}. </Typography>

          <Box sx={{ ml: 4, mt: 2 }} >
            <Button onClick={HandleDeleteContact} value={cont.id} sx={{ border: '1px solid red' }}>Delete</Button>
            <Button onClick={handleOpen} sx={{ ml: 4, border: '1px solid red' }}>Update</Button>
            <ShowModal open={open} setOpen={setOpen} UpdateKey={cont.id} review= {contact} setReview={setContact} />
          </Box>
        </Grid>
      ))}

    </Box>
  )
}

export default Contact;