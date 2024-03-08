import React, { useEffect } from 'react';
import './Styles/PageForm.css';

import { useFormContext } from "react-hook-form";
import ConnectForm from './ConnectForm';

import ExperienceForm from './Forms/ExperienceForm';
import ObjectiveForm from './Forms/ObjectiveForm';
import EducationForm from './Forms/EducationForm';
import LanguageForm from './Forms/LanguageForm';


export default function PageForm(props) {
    const { register } = useFormContext();
        
    const handleClick = () => {
        const formSlide = document.getElementById('formsSheet');
        formSlide.classList.remove('slideInLeft');
        formSlide.classList.add('slideOutLeft');
    }


    return (

        <ConnectForm >
            {({register}) => 
                <div className='formSheet fromRight' id='formsSheet'> 
                    <div className="formHeader"> 
                        <input 
                            type="text" 
                            className='headerName slideInTop' 
                            placeholder='Name: John Doe' 
                            {...register('fullName')}
                            maxLength="16"
                        />
                        <input 
                            type="text" 
                            className='headerOccupation firstDown' 
                            placeholder='Occupaction: Front-End Developer'
                            {...register('profession')}
                        />
                    </div>
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
                    </div>

                    <ExperienceForm />
                    <ObjectiveForm />
                    <EducationForm />
                    <LanguageForm />

                    <input 
                        className="buttonSubmit b" 
                        type="submit" 
                        value='Submit' 
                        onClick={handleClick}
                    />
                </div>
            }
        </ConnectForm>
    )
}
