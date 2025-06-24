import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    
    <>
      <main className="min-h-dvh bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
      <section className="min-h-dvh bg-black/50 flex items-center justify-center">
        <div className="lg:w-3/4 max-md:p-3">
          <h1 className="text-white lg:text-5xl font-extrabold text-center uppercase text-2xl md:text-3xl">Welcome to ConnectHive</h1>
          <p className="text-gray-100 lg:text-xl mt-4 text-center">your ultimate gateway to a thriving global network of professionals and Artisan alike. Whether you're seeking collaboration, mentorship, or new opportunities, ConnectHive brings together experts from every industry and corner of the world, empowering you to build meaningful connections, share knowledge, and grow your career like never before.</p>
          <div className="flex justify-center items-center mt-8 lg:gap-10 max-md:flex-col gap-5 w-full">
            <button className="mt-6 px-6 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-colors duration-300 max-md:w-full">
              Connect Now
            </button>
            <button className="mt-6 px-6 py-3 bg-blue-700 text-white border border-blue-700 rounded-lg hover:bg-transparent hover:border-white transition-colors duration-300 max-md:w-full">
              Learn More
            </button>

          </div>
        </div>
      </section>
    </main>
    <About />
    </>
  );
}
