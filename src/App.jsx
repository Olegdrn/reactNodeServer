import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import './App.css';
import Form from './components/form';
import ServerAnswer from './components/serverAnswer';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 >The cone data</h2>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/api' element={<ServerAnswer />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
