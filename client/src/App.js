import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HomePage from './layouts/Homepage/HomePage'
import SignInPage from './layouts/SignInSignUpPage/SignInPage'
import BookReviewPage from './layouts/BookReviewPage/BookReviewPage'
import NavBar from './layouts/NavBarAndFooter/NavBar'
import Footer from './layouts/NavBarAndFooter/Footer'

function App() {

  return (
    
    <>
    <NavBar />
    <HomePage />
    <SignInPage />
    <BookReviewPage />
    <Footer />
    </>

  )
}

export default App;
