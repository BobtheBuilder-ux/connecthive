import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-dvh bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover">
        <section className="min-h-dvh bg-black/70 flex items-center justify-center">
          <div className="lg:w-3/4 space-y-10 max-md:p-3">
            <h1 className="text-white font-extrabold text-center text-2xl md:text-3xl lg:text-5xl uppercase">
              welcome to connecthive
            </h1>
            <p className="lg:text-xl text-base text-gray-100 text-center">
              Your one stop shop to connect with professionals all around the
              globe. Connect with like-minded individuals and grow together.
              Your ultimate gateway to a thriving global network of professonals
              and artisans alike.
            </p>
            <div className="flex max-md:flex-col items-center md:gap-10 gap-5 w-full justify-center">
              <button className="border border-white px-10 py-2 text-white text-base lg:text-lg max-md:w-full hover:bg-blue-600 hover:border-blue-600 transition-all">
                Connect Now
              </button>
              <button className="border border-white px-10 py-2 text-white text-base lg:text-lg max-md:w-full hover:bg-blue-600 hover:border-blue-600 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Hero />
    </>
  );
}
