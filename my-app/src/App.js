
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import TeamMembers from './pages/TeamMembers';

function App() {
  return (
    <div className="App">
    <Routes>
     <Route exact path="/" element={<Home/>}></Route>
     <Route exact path="/team" element={<TeamMembers/>}></Route>


    </Routes>
    </div>
  );
}

export default App;
