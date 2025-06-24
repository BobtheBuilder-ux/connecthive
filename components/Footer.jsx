import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="border-t border-gray-300 px-8 py-2">
      <div className="flex items-center justify-between max-lg:flex-col">
        <div className="flex items-center gap-1">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={800}
            height={800}
            className="w-10 h-10"
          />
          <p className="font-bold text-lg text-gray-800 max-md:hidden">
            ConnectHive
          </p>
        </div>

        <div className="flex max-md:flex-col max-lg:py-5 items-center gap-5 text-sm text-gray-600">
          <Link href={"#"} className="hover:underline hover:text-gray-900">FAQs</Link>
          <Link href={"#"} className="hover:underline hover:text-gray-900">Blog</Link>
          <Link href={"#"} className="hover:underline hover:text-gray-900">Terms of Use</Link>
          <Link href={"#"} className="hover:underline hover:text-gray-900">Privacy Policy</Link>
        </div>

        <div className="flex items-center gap-5 text-lg text-gray-600">
          <Link href={"#"} className="hover:text-black">
            <FaInstagram />
          </Link>
          <Link href={"#"} className="hover:text-black">
            <RiTwitterXFill />
          </Link>
          <Link href={"#"} className="hover:text-black">
            <FaGithub />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Footer;
