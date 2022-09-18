import './GreatOperationButton.css';


function  GreatOperationButton(props) {

    var handleClick = (e)=>{
        props.handleClickParent(e.target.value);
    }

    var operData = ["+", "-", "*", "/", ".","C"];

    return (
      <div>
         {operData.map((pD)=> (
          <button key={pD} value={pD} onClick={pD==="C"?(props.set):(e)=> handleClick(e)}>{pD}</button>
        ))}
      </div>  
    );  
}

export default GreatOperationButton;