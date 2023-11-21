import { Outlet } from 'react-router-dom';
import Navbar from '../Layoute/Navbar';
import Footer from '../Footer/Footer';

export const Root = () => {
    return (
        <div className='root'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};