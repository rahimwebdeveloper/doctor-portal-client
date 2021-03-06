import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className="hero lg:my-16 ">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-md rounded-lg lg:ml-32 shadow-2xl" alt='' />
                <div>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    /> 
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;