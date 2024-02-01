import React from 'react'
import Script from '../../../node_modules/next/script';
import Head from '../../../node_modules/next/head';
const index = () => {
  return (

    <div>
    <Head>
        <title>hello index</title>
        <meta name='description' content='Genrated by next app'></meta>
        <meta name='keywords' content='next,blog,coder blog'/>
        {/* <script src='/sc.js'></script> */}
    </Head>
    {/* <Script src='/sc.js' strategy='lazyOnload'></Script> */}
        index
    </div>
  )
}

export default index;