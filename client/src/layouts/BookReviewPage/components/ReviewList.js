import React from 'react'

function ReviewList() {

    const reviews = [
        { name: 'Reviewer Name', date: 'July 30, 2024', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.', rating: 4 },
        { name: 'Reviewer Name', date: 'July 28, 2024', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.', rating: 5 }
      ]

    return (
        <div>
            <h3>Reviews</h3>
          {reviews.map((review, index) => (
            <div className="review mb-4" key={index}>
              <h5>{review.name}</h5>
              <p className="text-muted">Reviewed on {review.date}</p>
              <p>{review.text}</p>
              <p><strong>Rating:</strong> {review.rating}/5</p>
            </div>
          ))}
        </div>
      );
}

export default ReviewList