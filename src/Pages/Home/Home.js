// import Navbar from '../../SharedPages/Navbar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import Parts from './Parts';
import Review from './Review';
import WelcomePage from './WelcomePage';
import WhyUs from './WhyUs'

const Home = () => {
    
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Banner></Banner>
            <Parts></Parts>
            <WelcomePage></WelcomePage>
            <BusinessSummary></BusinessSummary>
            <WhyUs></WhyUs>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;