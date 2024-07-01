import React from 'react'
import "../styles/globals.css"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import { aboutInfos } from '@/public/data/about'
import { contact } from '@/public/data/contact'


export default function about() {
  return (
    <>
      <Header />
      <AboutSection about={aboutInfos} />
      <ContactSection cardsData={contact} />
      <Footer />
    </>
  )
}
