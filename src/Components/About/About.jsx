import React from 'react'

function About() {
  return (
    <>
    <div className="aboutsection w-full px-8 mt-[5vh] mb-[15vh]">
    <h1 className='text-center font-bold text-4xl mb-4' >About GitHub Profile Finder</h1>
    <p>Welcome to GitHub Profile Finder, the ultimate solution for discovering GitHub profiles that are hard to find! In the vast world of developers and repositories, finding a specific GitHub user can sometimes be a daunting task, especially if their profile isn't easily accessible through search engines like Google. That's where we come in.</p>

    <p>Our platform is designed to help you locate any GitHub user by their user ID, ensuring you never miss out on connecting with the developer you need. Whether you're a recruiter searching for top talent, a fellow developer looking to collaborate, or just someone interested in exploring GitHub's rich ecosystem, we've got you covered.</p>
    <h2 className='font-bold text-2xl mt-10'>WHAT WE OFFER</h2>
    <ul>
      <li className='mt-[2vh]' ><span className='font-bold text-xl mx-1'>Accurate Profile Search: </span><span>Simply input the GitHub user ID, and we'll do the rest. Our powerful search engine will fetch the profile details you're looking for in an instant.</span></li>
      <li className='mt-[2vh]' ><span className='font-bold text-xl mx-1'>Comprehensive Profile Information: </span><span>Gain in-depth insights with detailed profile data, including:</span>
      <ul>
        <li className='mt-[2vh]' ><span className='font-bold text-xl mx-1'>Profile Creation Date:</span><span>Know when the account was created.</span></li>
        <li className='mt-[2vh]' ><span className='font-bold text-xl mx-1'>Last Updated Date:</span><span>See the most recent activity.</span></li>
        <li className='mt-[2vh]' ><span className='font-bold text-xl mx-1'>Followers and Following: </span><span>Track the user's influence and network.</span></li>
        <li className='mt-[2vh]' ><span className='font-bold text-xl mx-1'>Profile Picture:</span><span>Get a visual identity.</span></li>
        <li className='mt-[2vh]' ><span className='font-bold text-xl mx-1'>Location:</span><span>Discover where the user is based.</span></li>
        <li className='mt-[2vh]' ><span className='font-bold text-xl mx-1'>Bio: </span><span>Learn more about the user's professional background and interests.</span></li>
        <li className='mt-[2vh]' ><span className='font-bold text-xl mx-1'>Username: </span><span>Confirm the identity of the user</span></li>
        <li className='mt-[2vh]' ><span className='font-bold text-xl mx-1'>Public Repositories:</span><span>Explore the projects and contributions of the user.</span></li>
      </ul>
      </li>
    </ul>
    <h2 className='font-bold text-2xl mt-10'>Why Choose Us?</h2>
    <p>At GitHub Profile Finder, we are committed to providing a seamless and efficient experience. Our service is not just about finding profiles; it's about connecting people, enhancing collaboration, and building a community of developers who can easily find each other and share their work.</p>
    <p>We understand the value of accurate information and quick access in the fast-paced tech world. That's why we've built a platform that's intuitive, reliable, and packed with features to help you get the most out of GitHub.</p>
    </div>
    </>
  )
}

export default About