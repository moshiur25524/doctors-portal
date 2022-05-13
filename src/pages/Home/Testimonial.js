import React from 'react';
import quote from '../../assets/icons/quote.svg'
import prople1 from '../../assets/images/people1.png'
import prople2 from '../../assets/images/people2.png'
import prople3 from '../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <p className='text-secondary font-bold'>Testimonial</p>
                    <h1>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            {/* <div className=" card card-side bg-base-100 shadow-xl">
                <div>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                </div>
                <div className='flex'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={prople1} alt='' />
                        </div>
                    </div>
                    <div>
                        <h1>Moshiur Rahman</h1>
                        <p>Dhaka</p>
                    </div>
                </div>

            </div> */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-8'>
                <div className="card w-96 text-neutral-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions justify-end">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={prople1} alt='' />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-accent'>Moshiur Rahman</h1>
                                <p className='text-black'>Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 text-neutral-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions justify-end">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={prople2} alt='' />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-accent'>Sayma Rahman</h1>
                                <p className='text-black'>Borishal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 text-neutral-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions justify-end">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={prople3} alt='' />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-accent'>Tazrin Akter</h1>
                                <p className='text-black'>Borishal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;