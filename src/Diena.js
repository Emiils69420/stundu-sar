import Stunda from './Stunda';
function Diena(props){
  const StundasJSX = props.Stundas.map(() =>{};
  return(
    <>
    <div class ="emils">
        <h2>{props.diena}</h2>
        <ol type="1">
    <Stunda nosaukums={props.Stundas[0]}/>
    <Stunda nosaukums={props.Stundas[1]}/>
    <Stunda nosaukums={props.Stundas[2]}/>
    <Stunda nosaukums={props.Stundas[3]}/>
    </ol>
    </div>
    </>
  );
}
export default Diena;