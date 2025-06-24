import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth()

  if (session) {
    redirect("/")
  }
  
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="space-y-10 max-md:p-3">
        <h1 className="md:text-4xl text-2xl text-blue-600 font-bold max-md:text-center">
          Sign in to ConnectHive
        </h1>

        <div className=" flex flex-col gap-10">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button className="border w-full flex items-center justify-center gap-3 text-lg rounded-full py-3">
              <FcGoogle className="text-2xl" />
              Sign in with Google
            </button>
          </form>
          <button className="border flex items-center justify-center gap-3 text-lg rounded-full py-3">
            <FaGithub className="text-2xl" />
            Sign in with Github
          </button>
          <button className="border flex items-center justify-center gap-3 text-lg rounded-full py-3">
            <FaXTwitter className="text-2xl" />
            Sign in with Twitter
          </button>
        </div>

        <p className="text-sm max-md:text-center text-gray-500">
          By signing in, you agree with our{" "}
          <span className="hover:text-blue-600 hover:underline">
            Terms of Use
          </span>
          , and{" "}
          <span className="hover:text-blue-600 hover:underline">
            privacy Policy
          </span>
        </p>
      </div>
    </main>
  );
};

export default page;
