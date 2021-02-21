import React from 'react'
import { Pagebase } from '../../src/layout'
import styles from './CoinPage.module.css'

const CoinPage = ({coin}) => {
  return (
    <Pagebase>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img src={coin.image.large} alt={coin.name}  className={styles.coin_image}/>
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p className={styles.coin_ticker}>{coin.symbol}</p>
          <p className={styles.coin_current}>IDR {coin.market_data.current_price.idr.toLocaleString('id')}</p>
        </div>
      </div>
    </Pagebase>
  )
}

export default CoinPage

export const getServerSideProps = async (context) =>{
  const {id} = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  const coin = await res.json()
  return {
    props: {
      coin
    }
  }
}