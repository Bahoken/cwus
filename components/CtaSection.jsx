import React from 'react';
import '../styles/CtaSection.css';

function CtaSection() {
    return (
        <div
            className="cta-section bg-cover p-r z-1 pt-20 pb-20"
            style={{
                backgroundImage: 'url(assets/images/bg.jpg)'
            }}
        >
            <div class="flex justify-around max-lg:flex max-lg:flex-col max-lg:gap-4 max-lg:items-center">
                <p className='font-semibold text-3xl max-w-[50%] max-lg:text-center'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className='font-semibold text-white bg-blue-500 py-2 px-4 rounded-lg w-fit'>
                    Get Consultation
                </button>
            </div>
        </div>
    )
}

export default CtaSection