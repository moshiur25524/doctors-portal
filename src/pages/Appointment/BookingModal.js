import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ setTreatment , treatment, date }) => {
    const {_id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        const name= event.target.name.value;
        const number = event.target.number.value;
        const email = event.target.email.value;
        console.log(_id, slot,name, number, email);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label  htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form className='grid grid-cols-1 gap-4 justify-items-center mt-4' onSubmit={handleBooking}>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" disabled />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled value={user?.displayName} name='name' className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email} name='email' className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='number' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="SUBMIT" className="btn btn-secondary" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;