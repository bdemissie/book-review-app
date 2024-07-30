import React from 'react'

function ReviewForm() {
  return (
    <div>        <h3>Add a Review</h3>
    <form id="reviewForm">
      <div class="form-group">
        <label for="reviewerName">Name</label>
        <input type="text" class="form-control" id="reviewerName" placeholder="Your Name" required/>
      </div>
      <div class="form-group">
        <label for="reviewerRating">Rating</label>
        <select class="form-control" id="reviewerRating" required>
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Very Good</option>
          <option value="3">3 - Good</option>
          <option value="2">2 - Fair</option>
          <option value="1">1 - Poor</option>
        </select>
      </div>
      <div class="form-group">
        <label for="reviewText">Review</label>
        <textarea class="form-control" id="reviewText" rows="3" placeholder="Your review..." required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit Review</button>
    </form></div>
  )
}

export default ReviewForm