import React, {useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import "./style.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'rgb(0 0 0 / 0.9)',
    color: 'white',
    border: '0.5px solid #000',
    boxShadow: 24,
    pt: 5,
    px: 4,
    display:'flex',
    width: {md:750, xs:500},
    height: 400,
    
};

function CardBook({ Databook }) {
    const [open, setOpen] = useState(false);

    let Thumbnail = Databook.volumeInfo.imageLinks && Databook.volumeInfo.imageLinks.smallThumbnail;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
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
                image={Thumbnail ? Thumbnail : "https://source.unsplash.com/random"}
                alt={Thumbnail}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="body1" display="block" >
                    {Databook.volumeInfo.title}
                </Typography>

            </CardContent>
            <CardActions>
                <Button onClick={handleOpen} size="small" >Show</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                    sx={{ color: 'black' }}
                >
                    <Box sx={{ ...style }}>
                            <img src={Thumbnail ? Thumbnail : "https://source.unsplash.com/random"} alt={Thumbnail} style={{ width: "150px", height: "300px", marginRight:'20px' }} /><br/>
                            <Box sx={{ml:5, mt:3}}>
                            <Typography variant="h6"> Title : {Databook.volumeInfo.title} </Typography><br/>
                            <Typography variant="body2" sx={{ml:1}}> Authors : {Databook.volumeInfo.authors}  </Typography><br/>
                            <Typography variant="body2"  sx={{ml:1}}>Publisher :{Databook.volumeInfo.publisher}  </Typography><br/>
                            <Typography variant="body2"  sx={{ml:1}}>Published Date : {Databook.volumeInfo.publishedDate} </Typography><br/>
                            <Typography variant="body2"  sx={{ml:1}}>Number Of Pages : {Databook.volumeInfo.pageCount} </Typography><br/>
                        <Button onClick={handleClose} > Close</Button>
                        <Link to={`/buy/${Databook.id}`} style={{ color: '#1976d2', textDecoration: 'inherit' }}> <Button onClick={handleClose} size="large" >Buy</Button></Link>
                    <Link to={`/rating/${Databook.id}`} style={{ color: '#1976d2', textDecoration: 'inherit' }} > Rate </Link>
                            </Box>
                    </Box>
                </Modal>
                <Link to={`/buy/${Databook.id}`} style={{ color: '#1976d2', textDecoration: 'inherit' }}><Button onClick={handleClose} size="small" >Buy</Button></Link>
                <Link to={`/rating/${Databook.id}`} style={{ color: '#1976d2', textDecoration: 'inherit' }} > <StarBorderIcon /> </Link>
            </CardActions>
        </Card>
    )
}

export default CardBook;