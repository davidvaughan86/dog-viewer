
import './App.css';
import DogButton from './dogButton'
// import Header from 'react'
import DogContainer from './dogContainer'
import React, {useState} from 'react'

function App() {
  const [dogPic, setdogPic] = useState('')
  async function getDog() {
    
    const dogPromise = fetch('https://dog.ceo/api/breeds/image/random', {
      
    });
    const response = await dogPromise;
    const dogData = await response.json();

    console.log(dogData.message)
    
    
  }
  
  
  return (
    <div className="App">
      
      <DogButton dog ={getDog}/>
      <DogContainer url={dogPic}/>
    </div>
  );
}

export default App;
