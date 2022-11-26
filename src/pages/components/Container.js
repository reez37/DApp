import React from 'react'
import './container.scss'
function Container({image, name, symbol, price, market_cap, percentage,rank}) {
  return (
    <div className='box'>
    <div className='container'>
    
        <div className='firstrow'>
            <img className="cryptoimage" src={image} alt = {name}/>
            <div className = 'cryptoname'>{name}</div>
            <div className = 'cryptosymbol'>({symbol})</div>
        </div>
        
        <div className='scndrow'>
               Rank {rank}
            </div>
            <div className='thirdrow'>
            <div className='cryptoprice'>
            ₹ {price}
            </div>
            {percentage < 0 ? (
                <div className='cryptoperc red'>{percentage}%</div>
            ):(
                <div className='cryptoperc green'>{percentage}%</div>
            
            )}
            </div>
            <div className = 'forthrow'>
                Market Capacity: ₹ {market_cap}
            </div>
        
        </div>
    </div>
  )
}

export default Container;