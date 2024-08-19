import React from 'react';
import '../css/radioForm.css'
const RadioButtonGroup = ({ name, options, selectedOption, onChange ,radioFromName}) => {
    return (
        <div className='radioForm'>
             <h4>{radioFromName}</h4>
             <div className='radioOptions'>
            {options.map((option) => (
                <label key={option.value}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedOption === option.value}
                        onChange={onChange}
                    />
                    {option.label}
                </label>
            ))}
            </div>
        </div>
    );
};

export default RadioButtonGroup;