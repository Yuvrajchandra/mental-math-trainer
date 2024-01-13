import { Routes,  Route  } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Trainer from './components/Trainer/Trainer.jsx'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/trainer" element={<Trainer />} />
    </Routes>
    </>
  )
}

export default App;
