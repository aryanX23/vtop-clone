import './App.css';
import Home from './Home';
import MainPage from './MainPage';
import {Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="AppBody">
      <Routes>
        <Route path="/vtop-clone/" element={<MainPage/>} />
        <Route path="/vtop-clone/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
