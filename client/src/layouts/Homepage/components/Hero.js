
function Hero() {

  return (

    <div className="hero-section">
      <div className="hero-background"></div>
      <div className="container hero-content">
        <h1 className="display-4">Discover and Share Your Love for Books</h1>
        <p className="lead">Read reviews, share your thoughts, and find your next favorite book</p>
        <div className="input-group mb-3 w-75 mx-auto">
          <input type="text" className="form-control" placeholder="Search by title, author, or genre" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">Search</button>
          </div>
        </div>
        <div className="mt-4">
          <a href="/#" className="btn btn-outline-light btn-lg mr-2 me-3">Join Now</a>
          <a href="/#" className="btn btn-outline-light btn-lg">Explore Reviews</a>
        </div>
        </div>
    </div>
  )
}

export default Hero;