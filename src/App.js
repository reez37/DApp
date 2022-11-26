import './App.scss';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';


function App() {

 const email = localStorage.getItem("email");

  return (
   
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/Home"
            element={email ? <Home /> : <Navigate to="/" />}
          />
      </Routes>
    </BrowserRouter>
  
  
  );
}

export default App;
