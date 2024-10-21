import React from 'react';
import './Styles/ContactForm.css';

import { useFormContext } from 'react-hook-form';
import ConnectForm from '../ConnectForm';


export default function ContactForm() {
    const { register } = useFormContext();

  return (
    <ConnectForm >
        {({register}) => 

            <div className="formContact slideInLeft">
                <h2>Contact</h2>
                <input 
                    type="text" 
                    className='formCity' 
                    placeholder='City: Maputo, MZ' 
                    {...register('city')}
                    maxLength="22"
                />
                <input 
                    type="email" 
                    className='formEmail' 
                    placeholder='Email: ...@gmail.com'
                    {...register('email')}
                    maxLength="22"
                />
                <input 
                    className='git'
                    {...register("git")}
                    placeholder='GitHub'
                />
                {/* <PhoneInput 
                    className='phoneNumberI'
                    {...register("phone")}
                    international
                    value={value}
                    onChange={setValue}
                    placeholder="Phone Number"
                    limitMaxLength={true}
                    defaultCountry='MZ'
                /> */}
            </div>

        }
    </ConnectForm>
  )
}
