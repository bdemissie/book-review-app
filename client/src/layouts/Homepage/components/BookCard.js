import React from 'react'

const BookCard = () => {
    const book = {
        image: null, // Set to null to use the default image
        title: "Default Book Title",
        author: "Default Author",
        reviews: [
            {
                user: "User1",
                review: "This is an amazing book! Highly recommended."
            },
            {
                user: "User2",
                review: "An enjoyable read with some great insights."
            }
        ]
    };

    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 mb-3">
            <div className="text-center">
                {book.image ? (
                    <img
                        src={book.image}
                        width="265"
                        height="408"
                        alt="book"
                    />
                ) : (
                    <img
                        src="./images/Misc/book-placeholder.jpg"
                        width="265"
                        height="408"
                        alt="book"
                    />
                )}
                <h6 className="mt-2">{book.title}</h6>
                <p>{book.author}</p>
                <div className="reviews mt-3 text-start">
                    {book.reviews.map((review, index) => (
                        <div key={index} className="review">
                            <strong>{review.user}:</strong> {review.review}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookCard;