import React, { useState } from 'react';
import { useFormContext } from "react-hook-form";
import ConnectForm from '../ConnectForm';
import './Styles/EducationForm.css';


export default function EducationForm() {
    const { register } = useFormContext();
    const [startEdit, setStartEd] = useState(false);


  return (
    <ConnectForm >
        {({register}) => 
            <div className='formEducation fromRight'>
                <div className='edu'>
                    <h2>Education</h2>
                </div>

                <div className="first-school">
                    <div className='edSchool'>
                        <input 
                            type="text" 
                            className='schoolName' 
                            placeholder='School Name:'
                            {...register('schoolName')}
                        />
                    </div>
                    <div className="add-button">
                        {!startEdit && <button  onClick={(e) => {
                                e.preventDefault();
                                setStartEd(!startEdit)
                            }} >+</button> }
                        
                    </div>
                    <div className='edDate'>
                        <input 
                            type="text" 
                            className='eDate' 
                            placeholder='Date: 03-2024'
                            {...register('schoolDate')}
                            maxlength="7"
                        />
                    </div>
                    <div className="eduDegree">
                        <input 
                            type="text" 
                            className='eDegree' 
                            placeholder='Degree:' 
                            {...register('degree')}
                        />            
                    </div>
                </div>

                { startEdit && <div className="second-school">
                    <div className='edSchool'>
                        <input 
                            type="text" 
                            className='schoolName' 
                            placeholder='School Name:'
                            {...register('schoolNameNd')}
                        />
                    </div>
                    <div className="add-button">
                    {
                        !startEdit ? <button  onClick={(e) => {
                                e.preventDefault();
                                setStartEd(!startEdit)
                            }} >+</button> : <button  onClick={(e) => { 
                                    e.preventDefault(); 
                                    setStartEd(!startEdit)
                                }} >-</button>
                    }
                    </div>
                    <div className='edDate'>
                        <input 
                            type="text" 
                            className='eDate' 
                            placeholder='Date: 03-2024'
                            {...register('schoolDateNd')}
                            maxlength="7"
                        />
                    </div>
                    <div className="eduDegree">
                        <input 
                            type="text" 
                            className='eDegree' 
                            placeholder='Degree:' 
                            {...register('degreeNd')}
                        />            
                    </div>
                </div>
                }
            </div>
        }
    </ConnectForm>
  )
}
