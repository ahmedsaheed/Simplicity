import Nav from "./nav"
import Footer from "./footer"
import Head from 'next/head'
import React, { Component } from "react";

function Layout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
      return (
        <>
        <Head>
        <title>App Name</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <main className="layout">

      <PageComponent {...pageProps} />

        <Footer/>
        </main>
        </>
    )
}
return PageComponentWithLayout
}

export default Layout;