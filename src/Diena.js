import Stunda from './Stunda';
import styles from "./diena.module.css";
function Diena(props){
  const stundasJSX = props.stundas.map((stunda) =>{
    return <Stunda nosaukums={stunda}/>
  });

  return(
    <>
    <div class ="emils">
        <h2 className={styles.violets}>{props.diena}</h2>
        <ol type="1">
          {stundasJSX}
 
    </ol>
    </div>
    </>
  );
}
export default Diena;