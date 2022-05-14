import React from 'react';
import fluoride from '../../../src/assets/images/fluoride.png'
import cavity from '../../../src/assets/images/cavity.png'
import whitening from '../../../src/assets/images/whitening.png'
import treatment from '../../../src/assets/images/treatment.png'
import doctorSmall from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const Services = () => {
    return (
        <div className='my-16'>
            <p className='text-center text-secondary font-bold'>Our Services</p>
            <h1 className='text-center text-accent'>Services We Provide</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-2">
                        <img src={fluoride} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Button>GET STARTED</Button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={cavity} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Button>GET STARTED</Button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={whitening} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <Button>GET STARTED</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row my-20">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
                        <div>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <Button>GET STARTED</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen" style={{
                    background: `url(${appointment})`
                }}>
                    <div className="hero-content flex-col lg:flex-row mt-20">
                        <div className=''>
                            <img className='mt-[-300px] hidden lg:block' src={doctorSmall} className="max-w-lg rounded-lg shadow-2xl" alt='treatment' />
                        </div>
                        <div>
                            <p className='text-secondary font-bold text-white'>Appointment</p>
                            <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <Button>GET STARTED</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;