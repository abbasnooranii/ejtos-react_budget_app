import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Currency {
      <select className='bg-success text-white' name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option className='text-dark' value="£">£ Pound</option>
        <option className='text-dark' value="$">$ Dollar</option>
        <option className='text-dark' value="€">€ Euro</option>
        <option className='text-dark' value="₹">₹ Rupee</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;