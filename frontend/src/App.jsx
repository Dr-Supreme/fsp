import { useState, useEffect } from 'react'
import Card from "./Card.jsx";
import DBZ from './assets/DBZ.jpg'
import Code from './assets/Code.jpg'
import FMB from './assets/FMB.jpg'
import Naruto from './assets/Naruto.jpg'
import Onepiece from './assets/Onepiece.jpg'
import ColorPicker from './ColorPicker.jsx';

function App() {
  const [data, setData] = useState([])
  const [response, setResponse] = useState([])
// I use the use effect here to fetch the data and set the data and then to show the data in the console
  useEffect(() => {
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL)
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}posts`)
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      }catch(error){
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <>
    Hello Roulettech My name Isaac Ojigho
    <div> 
      This is the api endpoints i have created in django : {data.map(el => <li key = {el.id}>{el.title}</li> )}
      </div>
      <p>Today i will be showing you my top 5 animes as of currently and a color picker</p>

      <title>Introducing my top 5:</title>
      <Card title="Code Geass" text="5" image={Code}/>
    <Card title="Full Metal Alchemist" text="4" image={FMB}/>
    <Card title="One Piece" text="3" image={Onepiece}/>
    <Card title="Naruto" text="2" image={Naruto}/>
    <Card className="color-picker-container" title="Dragon ball" text="1" image={DBZ}/>

    <p className="color-picker-container">Here is the Color Picker:</p>
    <ColorPicker/>
    </>
  )
}

export default App
