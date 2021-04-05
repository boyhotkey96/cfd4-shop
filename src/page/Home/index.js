import React from 'react'
import Banner from './components/Banner'
import Features from './components/Features'
import Pick from './components/Pick'
import TopSell from './components/TopSell'
import Review from './components/Review'
import Brand from './components/Brand'
import CountDown from './components/CountDown'

export default function Home() {
  return (
    <>
      <Banner />
      {/* FEATURES */}
      <Features />
      {/* BEST PICKS */}
      <Pick />
      {/* TOP SELLERS */}
      <TopSell />
      {/* COUNTDOWN */}
      <CountDown />
      {/* REVIEWS */}
      <Review />
      {/* BRANDS */}
      <Brand />
    </>
  )
}