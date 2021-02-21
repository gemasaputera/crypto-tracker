import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Pagebase = ({children, title="Crypto Tracker"}) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a className="coin_logo">
            Crypto Tracker
          </a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Pagebase
