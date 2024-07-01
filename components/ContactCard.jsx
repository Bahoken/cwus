import React from 'react';

function ContactCard({ info }) {
  return (
    <div className='flex items-center justify-center gap-4 w-[100%] border-[1px] border-dashed hover:border-none hover:shadow-2xl hover:cursor-pointer px-2 py-4 rounded-md transition-all'>
        <img
            className='w-[4rem]' 
            src="./assets/vectors/msg.svg"  
            alt="icon" 
        />
        <div className='flex flex-col dark:text-gray-200'>
            <h1 className='font-bold text-2xl'>{ info.title }</h1>
            <p className='text-md'>{info.desc}</p>
        </div>
    </div>
  )
}

export default ContactCard;