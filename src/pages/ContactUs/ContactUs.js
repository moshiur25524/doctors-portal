import React from 'react';
import apppointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const ContactUs = () => {
    return (
        <div className='my-20 py-20' style={{
            background:`url(${apppointment})`
        }}>
            <p className='text-center text-lg'>Contact us</p>
            <h1 className='text-center text-2xl'>Stay Connected With Us</h1>
            <form className='w-1/2 mx-auto mt-14'>
                <input type="email" placeholder="Email Address" className="input w-full max-w-xs" />
                <br /><br />
                <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
                <br /><br />
                <textarea className="textarea" placeholder="Bio"></textarea>
                <br /><br />

                <Button>SUBMIT</Button>
            </form>
        </div>
    );
};

export default ContactUs;