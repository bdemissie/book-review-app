import Hero from './components/Hero'
import Navbar from '../NavbarAndFooter/NavBar'
import Footer from '../NavbarAndFooter/Footer'
import ExploreTopBooks from './components/ExploreTopBooks';

function HomePage() {

    return (

        <>
            <Navbar />
            <Hero />
            <ExploreTopBooks />
            <Footer />
        </>

    )
}

export default HomePage;