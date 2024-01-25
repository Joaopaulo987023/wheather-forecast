
import './App.css'
import AppWeather from './AppWeather/AppWeather'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagErro from './AppWeather/PagErro';
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppWeather/>}/>
        <Route path="*" element={<PagErro/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
