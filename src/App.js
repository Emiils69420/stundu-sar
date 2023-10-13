import Diena from './Diena';

function App(props){
 const visasStundas = [
   {diena: "Pirmdiena",
  stundas:[
    "Tava",
    "Dzive",
    "Smird",
    "HAHAHAHA"
  ]
  },
  {diena: "Otrdiena",
  stundas:[
    "Tava",
    "Dzive",
    "Smird",
    "HAHAHAHA"
  ]
  },
  {diena: "Tresdiena",
  stundas:[
    "Tava",
    "Dzive",
    "Smird",
    "HAHAHAHA"
  ]
  },
  {diena: "Ceturtdiena",
  stundas:[
    "Tava",
    "Dzive",
    "Smird",
    "HAHAHAHA"
  ]
  },
  {diena: "Piektdiena",
  stundas:[
    "Tava",
    "Dzive",
    "Smird",
    "HAHAHAHA"
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