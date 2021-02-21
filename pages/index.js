import React, {useState, useEffect} from 'react'
import { CoinList, SearchBar } from '../src/components'
import { Pagebase } from '../src/layout'

export default function Home({filteredCoins}) {
  const [listCoin, setListCoin] = useState(filteredCoins)
  const [search, setSearch] = useState('')
  const [timer, setTimer] = useState(0)

  const callAPi = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=30&page=1&sparkline=false')
    const coins = await response.json()
    setListCoin(coins)
  }

  useEffect(()=>{
    const req = setInterval(() => {
      callAPi()
      setTimer(timer +1)
    }, 15000);
    return () => clearInterval(req)
  },[timer])

  const altCoins = listCoin.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  const OnChangeSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
    <Pagebase>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={OnChangeSearch} />
        <CoinList data={altCoins} />
      </div>
    </Pagebase>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=30&page=1&sparkline=false')
  const filteredCoins = await response.json()

  return {
    props: {
      filteredCoins
    }
  }

}
