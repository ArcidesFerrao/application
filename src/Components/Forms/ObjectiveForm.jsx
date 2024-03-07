import React from 'react';
import { useFormContext } from "react-hook-form";
import ConnectForm from '../ConnectForm';
import './Styles/ObjectiveForm.css';

export default function ObjectiveForm() {
  const { register } = useFormContext();

  return (
    <ConnectForm >
      {({register}) => 
        <div className='formObjective'>
          <h2>Objective</h2>
          <textarea 
            name="formObjectives" 
            id="formObjectives" 
            cols="25" 
            rows="7" 
            placeholder='tell us about your goals'
            {...register('objDescription')} 
          ></textarea>    
        </div>
      }
    </ConnectForm>
  )
}
