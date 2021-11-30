import '../styles/globals.scss'
import Layout from "../components/Layout";
import React, {useEffect, useState} from "react";
import {imageDir} from "../data/constants";
import Head from "next/head";

function MyApp({Component, pageProps}) {
  const [domain, setDomain] = useState('');

  useEffect(() => {
    setDomain(`${window.location.protocol}//${window.location.host}`)
  }, [])

  return (
    <Layout>
      <Head>
        <meta property="og:image" content={`${domain}${imageDir}/logo512.png`}/>
        <meta name="theme-color" content="#e71d36"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
