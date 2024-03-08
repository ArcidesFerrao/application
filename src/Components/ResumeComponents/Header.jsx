import React, { useState } from 'react';


export default function Header(props) {


  return (
    <div className="cvHeader fromRight"> 
        <h1>{props.person}</h1>
        <h2>{props.profession}</h2>
    </div>
  )
}
