
import React from 'react'

function AmazingNumberButton(props) {

  var handleClick = (e)=>{
    props.handleClickParent(e.target.value);
  }
  
    var buttonData = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9','SAVE'];
 
    return (
      <div>
        {buttonData.map((i)=> (
          <button key={i} value={i} onClick={(e)=> handleClick(e)}>{i}</button>
        ))}
      </div>    
    );
}

export default AmazingNumberButton;

