import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
 
    const formatedDate = format(date, 'PP');
    useEffect(()=>{
        fetch(`http://localhost:5000/service`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[formatedDate])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center'> Available Appointment : {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment = {setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
            treatment={treatment}
            setTreatment={setTreatment}
            date = {date}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;