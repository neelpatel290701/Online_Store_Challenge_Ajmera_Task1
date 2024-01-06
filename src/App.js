import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MasterView from './components/MasterView';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MasterView/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
