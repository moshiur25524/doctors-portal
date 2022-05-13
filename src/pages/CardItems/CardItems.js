import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const CardItems = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-8'>
            <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary ... shadow-xl">
                <figure><img className='pl-5 pt-2' src={clock} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Opening hours</h2>
                    <p className="text-white">Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className="card lg:card-side bg-accent shadow-xl">
                <figure><img className='pl-5 pt-2' src={marker} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Visit Our Location</h2>
                    <p className="text-white">Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className="card lg:card-side bg-gradient-to-r from-secondary to-primary ... shadow-xl">
                <figure><img className='pl-5 pt-2' src={phone} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Contact Us Now</h2>
                    <p className="text-white">+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default CardItems;