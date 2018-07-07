import React from 'react';


export const InputBox = ({label, placeholder, value, type, onChange, onSubmit}) => {
    return (
        <div>
            { label ? <span>{label}</span> : ''}
            { type === 'submit' ?
                <input type={type} value={value} placeholder={placeholder} onClick={(e) => onSubmit(e)} /> :
                <input type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e)} />}
        </div>
    );
};