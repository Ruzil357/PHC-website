import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import {imageDir} from "../data/constants";

const MetaDecorator = ({ title, description }) => {
  const finalTitle = `PSN Hack Club | ${title}`;
  const [domain, setDomain] = useState('');

  useEffect(() => {
    setDomain(`${window.location.protocol}//${window.location.host}`)
  }, [])

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta property="og:title" content={finalTitle} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={`${domain}${imageDir}/logo512.png`}/>
    </Head>
  )
}

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MetaDecorator;
