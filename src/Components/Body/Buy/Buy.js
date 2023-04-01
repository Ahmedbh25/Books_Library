import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Loading from '../Loading/Loading';
import BookNotFound from '../NotFound/BookNotFound';
import { ShoppingContext } from '../../../Context/ContextShopping';
import './style.css';

function Buy() {
  const {book, setBook, BookData} = useContext(ShoppingContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();

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
  }, []);

  return (
    <React.Fragment>
      {loading ?
        (
          <Loading />
        )
        : book.length !== 0 ?
          <BookData />
          :
          <BookNotFound />
      }
    </React.Fragment>
  )
}

export default Buy;