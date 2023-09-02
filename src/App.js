import "./App.css";
import Homepage from "./pages/Home";
import Signin from "./pages/signin";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import Explore from "./pages/Explore";
import Ginger from "./pages/Extendedfarm";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/farm" element={<Explore />} />
          <Route path="/farmExtend" element={<Ginger />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
