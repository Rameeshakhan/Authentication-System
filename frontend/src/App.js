import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      {/* <Login />  */}
      {/* <Signup /> */}
    </>
  );
}

export default App;
