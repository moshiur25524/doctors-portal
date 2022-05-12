import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const CardItems = () => {
    return (
        <div className='grid grid-cols-3 gap-4 mx-6'>
            <div class="card card-side bg-gradient-to-r from-secondary to-primary ... shadow-xl">
                <figure><img src={clock} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-white">Opening hours</h2>
                    <p class="text-white">Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div class="card card-side bg-accent shadow-xl">
                <figure><img src={marker} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-white">Visit Our Location</h2>
                    <p class="text-white">Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div class="card card-side bg-gradient-to-r from-secondary to-primary ... shadow-xl">
                <figure><img src={phone} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-white">Contact Us Now</h2>
                    <p class="text-white">+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default CardItems;