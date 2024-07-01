import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import "../styles/globals.css"
import ContactForm from '@/components/ContactForm';
// import { contact } from '@/public/data/contact';

function contact() {
  return (
    <>
        <Header />
        {/* <ContactSection /> */}
        <ContactForm />
        <Footer />
    </>
  )
}

export default contact;
