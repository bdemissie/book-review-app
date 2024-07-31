import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './layouts/NavBarAndFooter/NavBar'
import Footer from './layouts/NavBarAndFooter/Footer'
import HomePage from './layouts/Homepage/HomePage'
import BookReviewPage from './layouts/BookReviewPage/BookReviewPage'
import SignInPage from './layouts/SignInSignUpPage/SignInPage'


function App() {

  return (

    <div className='d-flex flex-column min-vh-100'>
      <NavBar />
      <div className='flex-grow-1'>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/book-review' element={<BookReviewPage />} />
      </Routes>
      </div>
      <Footer />
    </div>

  )
}

export default App;
