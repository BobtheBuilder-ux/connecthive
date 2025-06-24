import React from 'react'

const page = () => {
  return (

      <main>
        <div className="w-full text-center bg-black py-16 px-5">
          <h1 className="text-[3em] font-bold text-white font-[Playfair_Display] m-0">ConnectHive</h1>
          <p className="text-[1.2em] text-white">Where Connections Thrive</p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 p-10">
          <div className="max-w-[600px] flex-1">
            <img
              src="/connect.jpg"
              alt="Professionals"
              className="w-full rounded-[20px]"
            />
          </div>

          <div className="max-w-[600px] flex-1">
            <h2 className="text-black font-semibold text-2xl mb-2">Who We Are</h2>
            <p>
              ConnectHive is a platform built to bridge the gap between skilled professionals and those who need them.
              Whether it's beauty, tech, or lifestyle, we help individuals grow through trusted, modern connections.
            </p>

            <h2 className="text-blak font-semibold  text-2xl mt-4 mb-2">Our Mission</h2>
            <p>
              To connect people, services, and opportunities through a smart, intuitive, and vibrant platform that
              prioritizes trust, visibility, and growth.
            </p>

            <h2 className="text-balck font-semibold  text-2xl mt-4 mb-2">Our Vision</h2>
            <p>
              A world where talent meets demand effortlessly, giving every person the visibility and tools to thrive.
            </p>

            <h2 className="text-black font-semibold  text-2xl mt-4 mb-2">What We Offer</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>For Professionals:</strong> Customizable profiles, client discovery, secure payments, and branding tools.
              </li>
              <li>
                <strong>For Customers:</strong> Trusted experts, real-time chat, easy booking, and transparent reviews.
              </li>
              <li>
                <strong>For Everyone:</strong> A vibrant community that encourages feedback, collaboration, and growth.
              </li>
            </ul>
            <img
              src="/offer.png"
              alt="What We Offer"
              className="w-full rounded-[20px] mt-5"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 p-10 bg-black text-white w-full">
          <div className="text-center max-w-[200px]">
            <h3 className="text-white mb-2 text-xl">🔒 Secure</h3>
            <p>Verified users and safe transactions ensure peace of mind.</p>
          </div>
          <div className="text-center max-w-[200px]">
            <h3 className="text-white mb-2 text-xl">💬 Community</h3>
            <p>A space that fosters trust, feedback, and collaboration.</p>
          </div>
          <div className="text-center max-w-[200px]">
            <h3 className="text-white mb-2 text-xl">🚀 Growth</h3>
            <p>Tools and support to help every member grow and thrive.</p>
          </div>
        </div>

        <div className="text-center py-10">
          <a
            href="#"
            className="bg-black text-white px-6 py-3 rounded-full font-bold no-underline"
          >
            Join the Hive
          </a>
        </div>
        </main>
 
  )
}

export default page