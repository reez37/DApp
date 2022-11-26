import './home.scss';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';


function Home() {

  const [coins, setcoins] = useState([])
  const navigate = useNavigate();
  var username = localStorage.getItem("username");
  useEffect(() =>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false')
    .then(res=>{
      setcoins(res.data)
      console.log(coins)
    .catch(error =>{
      
      console.log(error)
    })
    })
  })

  const remove = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <div className="home">
     <div className='nav'>
      <div className='header'>
      DApp
      </div>
      <div className='navright'>
        <div className='name'>
          Hi {username}
        </div>
        <div onClick={remove} className='Logout'>
          Logout
        </div>
      </div>
     </div>
    <div className="box">
    {coins.map(coin =>{
      return <Container 
      key = {coin.id}
      image = {coin.image}
      name = {coin.name}
      symbol = {coin.symbol}
      price = {coin.current_price}
      market_cap = {coin.market_cap}
      percentage = {coin.price_change_percentage_24h}
      rank = {coin.market_cap_rank}
      />
    })}
    </div>
    </div>
  );
}

export default Home;
