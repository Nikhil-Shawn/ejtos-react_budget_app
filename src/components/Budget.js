import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
        </div>
    );
};

export default Budget;
