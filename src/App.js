import Diena from './Diena';

function App(props){
  const PirmdienasStundas = [
      "Sports",
      "DabasZinibas",
      "Vesture",
      "Krievu valoda"
  
  ]
    const OtrdienasStundas = [
        "Sports",
        "DabasZinibas",
        "Vesture",
        "Krievu valoda"
    
    ]
  return(
    <>
    <div>
    <Diena diena = "Pirmdiena" stundas={PirmdienasStundas}/>
    </div>
    </>
  );
}
export default App;