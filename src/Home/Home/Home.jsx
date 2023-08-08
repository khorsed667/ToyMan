
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import Tab from '../Tab/Tab';
import AgeShop from '../AgeShop/AgeShop';
import Partners from '../Partners/Partners';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tab></Tab>
            <AgeShop></AgeShop>
            <Partners></Partners>
            <Contact></Contact>
        </div>
    );
};

export default Home;