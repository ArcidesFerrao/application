import React from 'react'
import './Styles/Contact.css';

export default function Contact(props) {


  return (
    <div className="cvContact">
        <div className="conTitle">
            <h2>Contact</h2>
        </div>
        <div className="contDescription">
            <h4>{props.city}</h4>
            <h4>{props.email}</h4>
        </div>
    </div>
  )
}
