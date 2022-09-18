import './BeautifulScreen.css';

function BeautifulScreen(props) {
  return (
    <div>
        {/* <span>{props.value}</span> */}

        <input value={props.value} onChange={props.calc} type="text"/> 
    </div>    
  );
}
export default BeautifulScreen;