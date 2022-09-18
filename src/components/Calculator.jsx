//import ' ./Calculator.css'; 
import { useState } from 'react';
import BeautifulScreen from './BeautifulScreen';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import ItSOverNineThousand from './ItSOverNineThousand';


function Calculator() {
    const [value , setValue]=useState('')

    const calculate =()=>{     
        setValue(eval(value)!== 9000)
    }

    const handleClick=(e)=>{
        console.log(e);
        setValue(value + e);
    }
  
    return(
        <div>
            <BeautifulScreen value={value} calc={(e)=>setValue(e.target.value)}/>
            <AmazingNumberButton handleClickParent={handleClick}/>
            <GreatOperationButton set={()=> setValue('')} handleClickParent={handleClick}/>
            <MagnificientEqualButton handleClickParent={calculate}/>   
            {value > 9000  &&  <ItSOverNineThousand/> }  
        </div> 
    );  
}

export default Calculator;