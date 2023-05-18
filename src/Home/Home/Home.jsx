import Nav from '../../Shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const Home = () => {
    return (
        <div>
            <div className='md:mx-24'>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;