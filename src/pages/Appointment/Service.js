import React from 'react';


const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-xl font-bold text-secondary text-bold text-center">{name}</h2>
                    <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slots Available</span>}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                    <div className="card-actions justify-center">
                        <label
                             htmlFor="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            className="btn btn-sm btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary ...">BOOK APOINTMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;