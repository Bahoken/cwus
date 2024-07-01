import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'
import "../styles/globals.css"
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AboutSection from '@/components/AboutSection'
import CtaSection from '@/components/CtaSection'
import { aboutInfos } from '@/public/data/about'
import { infos } from '@/public/data'

export default function index() {
  return (
    <>
      <Header />
      <Hero infos={infos} />
      <AboutSection  about={aboutInfos} />
      <Features />
      <CtaSection />
      <Footer />
    </>
  )
}
