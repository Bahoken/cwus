import React from 'react';
import ContactCard from './ContactCard';

function ContactSection({ cardsData }) {
  return (
    <div className='dark:bg-gray-900  flex gap-8 pb-8 justify-center items-center border-blue-500'>
        <div className='max-lg:hidden'>
            <img
                className='w-[23rem] h-[28rem] object-cover rounded-md -rotate-1' 
                src="./assets/images/contact.jpg" 
                alt="contact" 
            />
        </div>
        <div className='flex flex-col gap-4'>
          {
            cardsData.map(elt => {
              return <ContactCard info={elt} />
            })
          }
        </div>
    </div>
  )
}

export default ContactSection;