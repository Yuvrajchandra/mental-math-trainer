import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
  const [duration, setDuration] = useState(0);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(0);
  const [operands, setOperands] = useState([]);


  const [isAdditionChecked, setIsAdditionChecked] = useState(false);
  const [isSubtractionChecked, setIsSubtractionChecked] = useState(false);
  const [isMultiplicationChecked, setIsMultiplicationChecked] = useState(false);
  const [isDivisionChecked, setIsDivisionChecked] = useState(false);


  const handleDurationChange =(event) => {
    setDuration(event.target.value);
  }
  const handleMinRangeChange =(event) => {
    setMinRange(event.target.value);
  }
  const handleMaxRangeChange =(event) => {
    setMaxRange(event.target.value);
  }


  const handleAdditionChange = () => {
    setIsAdditionChecked(!isAdditionChecked);
    if(isAdditionChecked === false) {
      setOperands([...operands,"+"]);
    } else {
      setOperands(operands.filter(a => a !== "+"));
    }
  };

  const handleSubtractionChange = () => {
    setIsSubtractionChecked(!isSubtractionChecked);
    if(isSubtractionChecked === false) {
      setOperands([...operands,"-"]);
    } else {
      setOperands(operands.filter(a => a !== "-"));
    }
  };

  const handleMultiplicationChange = () => {
    setIsMultiplicationChecked(!isMultiplicationChecked);
    if(isMultiplicationChecked === false) {
      setOperands([...operands,"*"]);
    } else {
      setOperands(operands.filter(a => a !== "*"));
    }
  };

  const handleDivisionChange = () => {
    setIsDivisionChecked(!isDivisionChecked);
    if(isDivisionChecked === false) {
      setOperands([...operands,"/"]);
    } else {
      setOperands(operands.filter(a => a !== "/"));
    }
  };

  const navigate = useNavigate();

  const navigateToChildComponent = () => {
    navigate("/trainer", { state: { duration, minRange, maxRange, operands } });
  };

  return (
    <>
    <h1>Mental Math Trainer</h1>
    <h2>Train your mental arithmetic skills</h2>
    <h3>Options</h3>
    <br />
    <p>Run for
    <input  
      type="number"  
      value={duration || ''} 
      onChange={handleDurationChange} 
    />
       minutes.</p>
    <br />
    <p>Create questions with numbers in the following range:</p>
    <br />
    <p>Min: </p>
    <input  
      type="number"  
      value={minRange || ''} 
      onChange={handleMinRangeChange} 
    />
    <br />
    <p>Max: </p>
    <input  
      type="number"  
      value={maxRange || ''} 
      onChange={handleMaxRangeChange} 
    />
    <br />
    <p>Include:</p> 
    <input
      type="checkbox"
      id="addition"
      name="addition"
      value="+"
      checked={isAdditionChecked}
      onChange={handleAdditionChange}
    />
    <p>Addition</p> 
    <input
      type="checkbox"
      id="subtraction"
      name="subtraction"
      value="-"
      checked={isSubtractionChecked}
      onChange={handleSubtractionChange}
    />
    <p>Subtraction</p>
    <input
      type="checkbox"
      id="multiplication"
      name="multiplication"
      value="*"
      checked={isMultiplicationChecked}
      onChange={handleMultiplicationChange}
    />
    <p>Multiplication</p>
    <input
      type="checkbox"
      id="division"
      name="division"
      value="/"
      checked={isDivisionChecked}
      onChange={handleDivisionChange}
    />
    <p>Division</p>
    <button onClick={() => navigateToChildComponent()}>
        Start
    </button>
    {console.log(operands)}
    {console.log(minRange)}
    {console.log(maxRange)}
    {console.log(duration)}
    </>
  )
}

export default Home;
