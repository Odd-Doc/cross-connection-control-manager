
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import AddDevice from './components/add-device';
import Facility from './components/facility';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<AddDevice />} />
        <Route path='/facility' element={<Facility />} />

      </Routes>
    </div>

  );
}

export default App;
