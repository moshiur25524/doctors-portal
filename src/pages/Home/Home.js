import React from 'react';
import CardItems from '../CardItems/CardItems';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <CardItems></CardItems>
            <Services></Services>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;