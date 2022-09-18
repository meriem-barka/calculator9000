import './MagnificientEqualButton'; 

function MagnificientEqualButton(props) {

    var handleClick = (e)=>{
      console.log(e.target.value)
        // props.handleClickParent(e.target.value);
    }

    var operData = ['='];

    return (
      <div>
          <button value='=' onClick={(e)=> handleClick(e)}>=</button>
          {/* <button key={total} value={total} onClick={(e)=> handleClick(e)}>{total}</button> */}
      </div>  
    );  
}

export default MagnificientEqualButton;


// var handleClick = (e)=>{
//   // props.handleClickParent(e.target.value);
//   console.log(e.target.value)
// }

// var operData = ['='];

// return (
// <div>
//     <button value='=' onClick={(e)=> handleClick(e)}>=</button>
// </div>  
// );  
// }