import Nav from '../../Shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <div className='md:mx-24'>
                <Nav></Nav>
                <Outlet></Outlet>
                <Gallery></Gallery>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;