import './App.css';
import { useEffect} from 'react';
import { useState } from 'react';
import image from "./dog.png"


function App() {

const [activity, setActivity] = useState("Get your dog to the walk!");
const [generate, setGenerate] = useState('');

const getAdvice = () => {
  setActivity(setGenerate);
}
useEffect(() => {
  async function fetchData() {
    const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    setActivity(data.activity)
  }
  fetchData();
},[generate])

  return (
    <div>
    <div className='text'>
    <img src={image} width="700px" alt='doggy' />
    <div className='texttwo'>
   <h1>Looking for an idea for a weekend? 🔥🎾 <br></br>
       Got tired from Monopoly game? 🎩 <br></br>
       Or simply you are bored? 😔 <br></br>
       WE GOT YOU! 😉 💃🏽🕺 </h1>
  </div>
    </div>
    <div className='app'>
      <p className='advice'>{activity}</p>
      <button onClick={getAdvice}>Get adv🧊</button>
    </div>
    </div>
  );
}

export default App;
