import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, spending, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value <= spending) {
            alert("You cannot reduce the budget lower than the spending");
            
            return;
        }else{

            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary' style={{width: 220}}>
<span>Budget: {currency} </span><input type="number" step="10" style={{width: 100}} value={newBudget} onChange={handleBudgetChange}></input>

</div>
    );
};
export default Budget;
