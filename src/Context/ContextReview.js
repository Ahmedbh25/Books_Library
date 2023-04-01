import React, { createContext, useReducer, useRef } from 'react';
import Box from '@mui/material/Box';
import { TextField, Button, Typography, Modal, FormControl } from '@mui/material';

import './style.css';

export const ReviewContext = createContext();

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'rgb(0 0 0 / 0.9)',
    textAlign: "center",
    boxShadow: 24,
    width: '600px',
    py: 10,
    border: '2px solid white'
};


const ShowModal = ({open, setOpen, UpdateKey,review, setReview}) => {
    const UpdatedElement = useRef();
    const handleClose = () => setOpen(false);

    const handleUpdate = () => {
        /* Add Code Here To Update is From Databse,
        if not when The Page Reload The Updated Element Will Desepear*/
        //const index = review.findIndex(elem => elem.id == UpdateKey);

        const updatedReviews = [...review];

        console.log(UpdateKey)
        const message = UpdatedElement.current.value;


        if(message){
            //console.log(index)
            console.log(UpdateKey);
            const updatedReview = [
                ...review.slice(0,UpdateKey),
                {...review[UpdateKey], review : message},
                ...review.slice(UpdateKey + 1)
            ];
            console.log(updatedReviews);
            setReview(updatedReview);
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <FormControl onSubmit={(e) => e.preventDefault()}>
                    <Typography variant="h6" color="#ff9800" component="legend">Update Your Message : </Typography>
                    <TextField
                        inputRef={UpdatedElement}
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Update Message"
                        name="message"
                        autoComplete="message"
                        color="secondary"
                        focused
                        autoFocus
                        multiline
                        rows={3}
                    />
                    <Button variant="contained" sx={{ mt: 5 }} onClick={handleUpdate}>Update</Button>
                </FormControl>
            </Box>
        </Modal>
    )
}



function ReviewProvider(props) {
    return (
        <ReviewContext.Provider value={ [ ShowModal ]}>
            {props.children}
        </ReviewContext.Provider>
    )
}




export default ReviewProvider
