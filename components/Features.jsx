import React from 'react'
import Card from './Card'

function Features() {
  return (
    <div className='bg-white dark:bg-gray-900 flex flex-col py-6 gap-2 items-center'>

        <div className='dark:text-gray-200 flex flex-col gap-4 text-center max-w-[60%] py-4'>
            <h1 className='text-3xl font-bold'>Lorem, ipsum dolor.</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi fugit explicabo minus velit maiores reprehenderit ab officiis. Adipisci, iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi fugit explicabo minus velit maiores reprehenderit ab officiis. Adipisci, iste.
            </p>
        </div>
    
        <div className='flex gap-4 flex-wrap'>
            <Card />
            <Card />
            <Card />
        </div>

    </div>
  )
}

export default Features