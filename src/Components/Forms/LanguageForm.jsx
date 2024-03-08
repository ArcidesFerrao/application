import React from 'react';

import { useFormContext } from "react-hook-form";
import ConnectForm from '../ConnectForm';

import Idiomas from './Idiomas';
import './Styles/LanguageForm.css';


export default function LanguageForm() {
  const { register } = useFormContext();

  return (
    <ConnectForm>
      {({register}) => 
        <div className='formLinguas slideInLeft'>
          <h2>Languages</h2>
          <div className='picklanguage'>
              <Idiomas  />
          </div>
          <div className="speechLevel">
              <select 
                name="level" 
                id="scheech" 
                {...register('level')}
              >
                  <option defaultValue="none" disabled hidden>Level:</option>
                  <option value="native">Native</option>
                  <option value="fluent">Fluent</option>
                  <option value="proficient">Proficient</option>
              </select>
          </div>
       </div>
      }
    </ConnectForm>
  )
}
