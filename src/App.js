import './App.css';
import fone from './fone.jpg'
import { useState } from "react"

function App() {

  const [listTips, setListTips] = useState([])
  const [arrayTips] = useState([])

  const fetchTips = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();

    if(listTips.length === 0) {
      document.querySelector('.deletebtn').style.display = 'block'
    }
    if (listTips.length > 3) {
      document.querySelector('.addbtn').style.display = 'none'
      document.querySelector('h2').style.display = 'block'
    }
    if (listTips.length > 4) {
      return false
    }
    
    arrayTips.push(data.activity)
    console.log(arrayTips);
    setListTips([...arrayTips])
  }


  return (
    <div className="App">
        <div>
          <img className='fon' src={fone} alt='фон'/>
        </div>

        <div className='container'>
          <h1>Get a activity</h1>
          <button className='addbtn' onClick={fetchTips}>Add Activity</button>
          <h2>Let's start!</h2>
          <div className='container-tips'>
            {listTips.map((item, index) => (
              <p key={index}>{index+1}. {item}</p>
            ))}
          </div>
          <button className='deletebtn' onClick={() => setListTips([])}>Delet All</button>
        </div>
    </div>
  );
}

export default App;
