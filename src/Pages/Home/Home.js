// import Navbar from '../../SharedPages/Navbar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';

const Home = () => {
    
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;