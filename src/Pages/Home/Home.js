// import Navbar from '../../SharedPages/Navbar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
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
        </div>
    );
};

export default Home;