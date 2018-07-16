import React from 'react';
import './button.css';

export const Button = ({text, type, onClick}) => {
    return (
        <div>
           <button type={type} className="button" onClick={(e) => onClick(e)}> {text}</button>
        </div>
    );
};