import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Body/Home/Home';
import About from './Components/Body/About/About';
import Services from './Components/Body/Services/Services';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import BooksList from './Components/Body/BooksList/BooksList';
import Filter from './Components/Body/Filter/Filter';
import Login from './Components/Body/Login/Login';
import Register from './Components/Body/Register/Register';
import Buy from './Components/Body/Buy/Buy';
import NotFound from './Components/Body/NotFound/NotFound';
import Profile from './Components/Body/Profile/Profile';
import ProfileUpdate from './Components/Body/Profile/Pages/Profile';
import Review from './Components/Body/Profile/Pages/Reviews';
import Ratings from './Components/Body/Rating/Rating';
import RatingBook from './Components/Body/Rating/RatingBook';
import Contact from './Components/Body/Contact/Contact';
import SalesList from './Components/Body/Sales_list/SalesList';
import SingleItem from './Components/Body/Sales_list/SingleItem';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/BooksList/:BookID" element={<BooksList />} />
        <Route path="/Rate" element={<RatingBook />} />
        <Route path="/rating/:idBook" element={<Ratings />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Buy/:idBook" element={<Buy />} />
        <Route path="/sales_list" element={< SalesList />} />
        <Route path="/bookItem/:ItemID" element={< SingleItem />} />
        <Route path='/Contacts' element={<Contact />} />
        <Route path='/Profile' element={< Profile />} />
        <Route path='/Profile/update' element={< ProfileUpdate />} />
        <Route path='/Profile/reviews' element={< Review />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>

  );
}

export default App;
