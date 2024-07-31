import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
function Hero() {

  return (

    <div className="hero-section">
      <div className="hero-background"></div>
      <div className="container hero-content">
        <h1 className="display-4">Discover and Share Your Love for Books</h1>
        <p className="lead">Read reviews, share your thoughts, and find your next favorite book</p>
        <SearchBar />
        <div className="mt-4">
          <Link to="/sign-in" className="btn btn-outline-light btn-lg mr-2 me-3">Join Now</Link>
          <Link to="/book-review" className="btn btn-outline-light btn-lg">Explore Reviews</Link>
        </div>
        </div>
    </div>
  )
}

export default Hero;