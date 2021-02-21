import React from 'react'
import { Coins } from '..'

export default function CoinList(props) {
  return (
    <>
      {
        props.data.map((item)=>{
          return(
            <Coins
              name={item.name}
              id={item.id}
              price={item.current_price}
              symbol={item.symbol}
              marketcap={item.market_cap}
              volume={item.total_volume}
              image={item.image}
              priceChange={item.price_change_percentage_24h}
              key={item.id}/>
          )
        })
      }
    </>
  )
}
