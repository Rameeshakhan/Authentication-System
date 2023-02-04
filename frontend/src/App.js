import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
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
