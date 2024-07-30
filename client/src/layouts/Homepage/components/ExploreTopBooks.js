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
                <a className="btn btn-outline-secondary btn-lg" href="/#">View More</a>
            </div>
        </>
    )
}

export default ExploreTopBooks;


