import React from 'react'

function BookDetails() {
    return (
        <div className="col-md-4">
            <img src="./images/Misc/book-placeholder.jpg" className="img-fluid" alt="Book Cover" />
            <h2 className="mt-3 ms-3">Book Title</h2>
            <div className='ms-5'>
                <p>by <strong>Author Name</strong></p>
                <p><strong>Genre:</strong> Fiction</p>
                <p><strong>Published:</strong> 2024</p>
                <p><strong>Rating:</strong> 4.5/5</p>
            </div>
        </div>
    );
}

export default BookDetails