import{ useEffect, useState } from 'react'
import { loadBlockchainData, loadWeb3 } from "../../web3";
import { useNavigate, Link } from "react-router-dom";
import './signin.scss'
function Signin() {
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


      const login = async () => {
        if (!email || !password) {
          alert("please fill all details");
          
          return;
        }
     
        try {
          const res = await auth.methods.usersList(email).call();
          if (res.password === password) {
            localStorage.setItem("email", email);
            localStorage.setItem("account", accounts);
            localStorage.setItem("username", res.username);
            ;
          } else {
            alert("wrong user credentials or please signup");
          }
        } catch (error) {
          alert(error.message);
        }
        navigate("/Home")
      };

      useEffect(() => {
        loadWeb3();
      }, []);
     
      useEffect(() => {
        loadAccounts();
      }, []);
      



  return (
   
    <div className='signin'>
    <div className='rbox'>
      <div className='newto'>
      New to <span>DApp</span>?
      </div>
      <Link className='create' to='./signup'>
        Create New Account
      </Link>
    </div>
    <div className='sbox'>

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
      <button className='sbtn' onClick={login} >
        Sign In
      </button>
      
      </div>
      <div className='circle'></div>
    </div>
    
  )
}

export default Signin