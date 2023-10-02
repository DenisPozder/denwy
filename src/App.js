import { React } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
    </Routes>
  );
}

export default App;
