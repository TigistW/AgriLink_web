import "./App.css";
import Homepage from "./pages/Home";
import Signin from "./pages/signin";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Explore from "./pages/Explore";
import Ginger from "./pages/Extendedfarm";
import ChatHome from "./pages/chatHome";
import Account from "./pages/account";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Account />} />
          <Route path="/farm" element={<Explore />} />
          <Route path="/farmExtend" element={<Ginger />} />
          <Route path="/chathome" element={<ChatHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
