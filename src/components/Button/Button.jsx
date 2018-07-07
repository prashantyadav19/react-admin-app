import React from 'react';


export const Button = ({text, type, onClick}) => {
    return (
        <div>
           <button type={type} onClick={(e) => onClick(e)}> {text}</button>
        </div>
    );
};