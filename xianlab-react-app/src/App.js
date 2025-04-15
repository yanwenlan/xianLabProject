import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import StrFormat from "./components/StringConverter";
import StringConverter from "./components/StringConverter"
import Home from "./components/Home";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/> } />
                <Route path="/StringConverter" element={<StringConverter/>} />
            </Routes>
        </div>
    );
}

export default App;
