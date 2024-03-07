import React from 'react';
import { useFormContext } from "react-hook-form";
import ConnectForm from '../ConnectForm';
import './Styles/ExperienceForm.css';

export default function ExperienceForm() {
    const { register } = useFormContext();

  return (
    <ConnectForm >
        {({register}) => 
            <div className="formExperience">
                <div className='xpTitle'>
                    <h2>Experience</h2>
                </div>
                <div className='expPlace'>
                    <input 
                        type="text" 
                        className='workPlace' 
                        placeholder='Work place'
                        {...register('workPlace')}
                    />
                </div>
                <div className='workDate'>
                    <input 
                        type="text" 
                        className='expDate' 
                        placeholder='Date: 03-2024' 
                    />
                </div>
                <div className="workDesc">
                    <textarea 
                        name="desc" 
                        id="" 
                        cols="20"
                        rows="8" 
                        placeholder='Describe your experience...' 
                        {...register('workDescription')}
                    ></textarea>
                </div>
                {/* <input type="text" className='expDescription' placeholder=''/> */}
            </div>
        }
    </ConnectForm>
  )
}
