import React from 'react';

function AboutSection({ about }) {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img class="w-full rounded-lg" src="./assets/images/show-01.png" alt="office content 1" />
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="./assets/images/show-02.png" alt="office content 2" />
                </div>

                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{ about?.aboutTitle }</h2>
                    <p className='mb-4'>
                        { about?.aboutText }
                    </p>
                </div>

            </div>
        </section>
    )
}

export default AboutSection;