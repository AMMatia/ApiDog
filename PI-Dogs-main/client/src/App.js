import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Form, Landing, Detail } from "./views";
import { NavBar } from "./components";
import styles from './App.module.css'

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
