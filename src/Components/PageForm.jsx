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
    
    
    // useEffect(() => {
    //     const formSlide = document.getElementById('formsSheet');
        
    //     if (props.move) {
    //         formSlide.classList.add('slideInLeft');
    //     } else {
    //         formSlide.classList.remove('slideInLeft');

    //     }
    // }, [props.move])
    
    const handleClick = () => {
        const formSlide = document.getElementById('formsSheet');
        formSlide.classList.remove('slideInLeft');
        formSlide.classList.add('slideOutLeft');
        
    }


    return (

        <ConnectForm >
            {({register}) => 
                <div className='formSheet slideInLeft' id='formsSheet'> 
                    <div className="formHeader"> 
                        <input 
                            type="text" 
                            className='headerName' 
                            placeholder='John Doe' 
                            {...register('fullName')}
                        />
                        <input 
                            type="text" 
                            className='headerOccupation' 
                            placeholder='Front-End Developer'
                            {...register('profession')}
                        />
                    </div>
                    <div className="formContact">
                        <h2>Contact</h2>
                        <input 
                            type="text" 
                            className='formCity' 
                            placeholder='Maputo, MZ' 
                            {...register('city')}
                        />
                        <input 
                            type="email" 
                            className='formEmail' 
                            placeholder='cidesferrao@gmail.com'
                            {...register('email')}
                        />
                    </div>

                    <ExperienceForm />
                    <ObjectiveForm />
                    <EducationForm />
                    <LanguageForm />

                    <input 
                        className="buttonSubmit" 
                        type="submit" 
                        value='Submit' 
                        onClick={handleClick}
                    />
                </div>
            }
        </ConnectForm>

  )
}
