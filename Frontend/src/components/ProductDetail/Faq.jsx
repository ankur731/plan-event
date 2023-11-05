import React from 'react'
import "./Faq.css"
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';

function Faq(props) {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
  return (
    <div className='faq'>
         <div className='faqHeading' onClick={toggle}> {open ? <RemoveIcon fontSize='large'/> : <AddIcon fontSize='large'/>}<h3> {props.ques}</h3></div>
         {open && (
            <div className="faqtoggle">
             <p>{props.ans}</p>
            </div>
          )}
    </div>
  )
}

export default Faq
