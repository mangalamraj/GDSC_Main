
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
     <Route exact path="/" element={<Home/>}></Route>


    </Routes>
    </div>
  );
}

export default App;
