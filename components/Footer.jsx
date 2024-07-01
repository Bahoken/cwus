import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

function Footer() {
    return (


        <footer class="bg-white dark:bg-gray-900 border-t-2">
            <div class="mx-auto w-full max-w-screen-xl px-2 py-4 lg:py-4">
                <div class="md:flex md:justify-between">
                    <div class="mb-4 md:mb-0">
                        <Link href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="./assets/images/logo.png" class="h-8 rounded-md" alt="Flowbite Logo" />
                            <p class="self-center max-w-20  text-xs font-semibold dark:text-white">Accounting & Tax services</p>
                        </Link>
                    </div>
                    <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Ngola Tech™ </a>. All Rights Reserved.
                    </span>
                    
                </div>
                </div>
                
            </div>
        </footer>

    )
}

export default Footer