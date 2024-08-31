import React from 'react'

function About() {
  return (
    <>
      <div className="aboutsection w-full px-8 mt-[5vh] mb-[15vh]">
        <h1 className='text-center font-bold text-4xl mb-4'>About GitHub Profile Tracker</h1>
        <p>Welcome to GitHub Profile Tracker, your go-to tool for obtaining quick and comprehensive details about GitHub profiles! And also it is sometimes difficult to land on a developer's profile even if you know the username, you can't find the profile. That's where this tool can help you to also find the user's profile. </p>

        <p>This platform is designed to provide you with key information about any GitHub user by their user ID, ensuring you get the essential details you need without hassle.</p>

        <h2 className='font-bold text-2xl mt-10'>WHAT THIS TOOL OFFER</h2>
        <ul>
          <li className='mt-[2vh]'>
            <span className='font-bold text-xl mx-1'>Quick Profile Overview: </span>
            <span>Simply input the GitHub user ID, and we'll fetch the profile details in an instant.</span>
          </li>
          <li className='mt-[2vh]'>
            <span className='font-bold text-xl mx-1'>Key Profile Information: </span>
            <span>Gain quick insights with essential profile data, including:</span>
            <ul>
              <li className='mt-[2vh]'>
                <span className='font-bold text-xl mx-1'>Username: </span>
                <span>Confirm the identity of the user.</span>
              </li>
              <li className='mt-[2vh]'>
                <span className='font-bold text-xl mx-1'>Account Type: </span>
                <span>Is it a Personal accounts, Organization accounts or Enterprise accounts.</span>
              </li>
              <li className='mt-[2vh]'>
                <span className='font-bold text-xl mx-1'>Profile Picture: </span>
                <span>Get a visual identity.</span>
              </li>
              <li className='mt-[2vh]'>
                <span className='font-bold text-xl mx-1'>Bio: </span>
                <span>Learn more about the user's professional background and interests.</span>
              </li>
              <li className='mt-[2vh]'>
                <span className='font-bold text-xl mx-1'>Location: </span>
                <span>Discover where the user is based.</span>
              </li>
              <li className='mt-[2vh]'>
                <span className='font-bold text-xl mx-1'>Public Repositories: </span>
                <span>Explore the projects and contributions of the user.</span>
              </li>
              <li className='mt-[2vh]'>
                <span className='font-bold text-xl mx-1'>Followers and Following: </span>
                <span>Track the user's influence and network.</span>
              </li>
              <li className='mt-[2vh]'>
                <span className='font-bold text-xl mx-1'>Profile Creation Date: </span>
                <span>Know when the account was created.</span>
              </li>
              <li className='mt-[2vh]'>
                <span className='font-bold text-xl mx-1'>Last Updatedation Date: </span>
                <span>See when the profile was last updated.</span>
              </li>
            </ul>
          </li>
        </ul>
        
        {/* <h2 className='font-bold text-2xl mt-10'>Why GitHub Profile Tracker?</h2>
        <p>At GitHub Profile Tracker, we are dedicated to providing a seamless and efficient experience. Our service is not just about displaying profile information; it's about offering valuable insights, enhancing collaboration, and building a community of developers who can easily connect and share their work.</p>
        <p>We understand the importance of accurate information and quick access in the fast-paced tech world. That's why we've built a platform that's intuitive, reliable, and packed with features to help you get the most out of GitHub profiles.</p> */}
      </div>
    </>
  )
}

export default About
