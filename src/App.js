import Diena from './Diena';

function App(props){
 const visasStundas = [
   {diena: "Pirmdiena",
  stundas:[
    "nez"
  ]
  },
  {diena: "Otrdiena",
  stundas:[
    "nez"
  ]
  },
  {diena: "Tresdiena",
  stundas:[
    "nez"
  ]
  },
  {diena: "Ceturtdiena",
  stundas:[
    "nez"
  ]
  },
  {diena: "Piektdiena",
  stundas:[
    "nez"
  ]},
 ]



    const DienasJSX = visasStundas.map((diena, indekss) =>{
      return <Diena diena={indekss} diena={diena.diena}stundas={diena.stundas}/>
    })
  return(

    <>
    <div>
      {DienasJSX}
    </div>
    </>
  );
}
export default App;