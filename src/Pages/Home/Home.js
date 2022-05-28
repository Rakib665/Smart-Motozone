// import Navbar from '../../SharedPages/Navbar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;