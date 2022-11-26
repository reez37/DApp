import { useState, useEffect } from 'react';
import { loadBlockchainData, loadWeb3 } from "../../web3";
import { useNavigate, Link } from "react-router-dom";
import './signup.scss'
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate()
 
  const [accounts, setAccounts] = useState(null);
  const [auth, setAuth] = useState(null);
 
  const loadAccounts = async () => {
    let { auth, accounts } = await loadBlockchainData();
 
    setAccounts(accounts);
    setAuth(auth);
  };
 
  const signUp = async () => {
    if (!username || !email || !password) {
      alert("please fill all details");
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("please enter valid email address");
      return;
    }
    try {
      await auth.methods
        .createUser(username, email, password)
        .send({ from: accounts });
 
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    loadWeb3();
  }, []);
 
  useEffect(() => {
    loadAccounts();
  }, []);
 
  return (

    <div className='signup'>
    <div className='lbox'>
      <div className='already'>
      Already Registered To <span>DApp</span>?
      </div>
      <Link className='sign' to='/'>
        Go To Signin
      </Link>
    </div>
    
    <div className='contain'>
       <input
        className='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        type="text"
      />
      <input
      className='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
      />
      <input
      className='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button onClick={signUp}
      className='sbtn'>
      
        Sign Up
      </button>
      </div>
      <div className='triangle'></div>
    </div>
  )
}

export default Signup