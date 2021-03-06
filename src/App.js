import './App.css';
import { useEffect} from 'react';
import { useState } from 'react';
import 'animate.css';
import image from "./dog.png"


function App() {

const [activity, setActivity] = useState("");
const [generate, setGenerate] = useState('');

const getAdvice = () => {
  setActivity(setGenerate);
}
useEffect(() => {
  async function fetchData() {
    const response = await fetch("https://www.boredapi.com/api/activity/");
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
   <h1 className='animate__animated animate__fadeInUp'>Looking for an idea for a weekend? ð¥ð¾ <br></br>
       Got tired from Monopoly game? ð© <br></br>
       Or simply you are bored? ð <br></br>
       WE GOT YOU! ð ðð½ðº </h1>
  </div>
    </div>
    <div className='app'>
      <p className='advice animate__animated animate__flipInX animate__slow'>{activity}</p>
      <button className='animate__animated animate__rotateInDownRight' onClick={getAdvice}>Get advð§</button>
    </div>
    </div>
  );
}

export default App;

