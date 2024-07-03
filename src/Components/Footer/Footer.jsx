import React from 'react'

function Footer() {
    return (


        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GitHub Profile Finder</span>
                    </a>
                </div>
                <div className='flex flex-wrap'>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 GitHub_Profile_Finder™.</span>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">All Rights Reserved.</span>
                </div>
            </div>
        </footer>


    )
}

export default Footer