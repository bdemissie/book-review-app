import {Link} from 'react-router-dom'
import BookCard from './BookCard'

function ExploreTopBooks() {

    return (

        <>
            <div className="container mt-5">
                <div className="row">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
            <div className="mt-3 text-center">
                <Link className="btn btn-outline-dark btn-lg text-black" to="">View More</Link>
            </div>
        </>
    )
}

export default ExploreTopBooks;


