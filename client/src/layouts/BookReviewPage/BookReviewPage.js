import React from 'react'
import BookDetails from './components/BookDetails';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';

function BookReviewPage() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <BookDetails />
                <div className='col-md-8'>
                    <ReviewList />
                    <ReviewForm />
                </div>
            </div>
        </div>
    )
}

export default BookReviewPage