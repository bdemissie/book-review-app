
function Hero () {

    return (

        <div className="hero-section">
    <div className="hero-background"></div>
    <div className="container hero-content">
      <h1 className="display-4">Discover and Share Your Love for Books</h1>
      <p className="lead">Read reviews, share your thoughts, and find your next favorite book</p>
      <div className="input-group mb-3 w-75 mx-auto">
        <input type="text" className="form-control" placeholder="Search by title, author, or genre"/>
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">Search</button>
        </div>
      </div>
      <div className="mt-4">
        <a href="#" className="btn btn-primary btn-lg mr-2">Join Now</a>
        <a href="#" className="btn btn-outline-light btn-lg">Explore Reviews</a>
      </div>
      <div className="row mt-5">
        {/* <!-- Featured Reviews Placeholder --> */}
        <div className="col-md-4">
          <div className="card bg-dark text-white">
            <img src="./images/HomePage/bookShelf.jpg" className="card-img" alt="Book Cover"/>
            <div className="card-img-overlay">
              <h5 className="card-title">Book Title</h5>
              <p className="card-text">This is a short review of the book. It’s engaging and insightful.</p>
            </div>
          </div>
        </div>
        {/* <!-- Repeat for more books --> */}
      </div>
      <div className="mt-5">
        {/* <!-- Testimonials Placeholder --> */}
        <blockquote className="blockquote">
          <p className="mb-0">"This site is amazing! I found so many great book recommendations."</p>
          <footer className="blockquote-footer">User Name</footer>
        </blockquote>
        {/* <!-- Repeat for more testimonials --> */}
      </div>
    </div>
  </div>
    )
}

export default Hero;