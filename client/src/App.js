import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HomePage from './layouts/Homepage/HomePage'
import SignInPage from './layouts/SignInSignUpPage/SignInPage'
import BookReviewPage from './layouts/BookReviewPage/BookReviewPage'

function App() {

  return (
    
    <>
    <HomePage />
    <SignInPage />
    <BookReviewPage />
    </>

  )
}

export default App;
