import { auth, signOut } from "@/auth";
import ProfileUpdate from "@/components/ProfileUpdate";
import { redirect } from "next/navigation";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

const page = async () => {
  const session = await auth();
  // console.log(session);

  const uid = session?.user?.id
  const uname = session?.user?.name

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center">
      <div className="space-y-5">
        <div className="border rounded-full border-gray-400">
          <img
            src={session?.user?.image}
            alt={session?.user?.name.slice(0, 1).toLowerCase()}
            className="w-80 h-80 rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold uppercase text-center">
          {session?.user?.name}
        </h2>

        {session?.user?.email && (
          <p className="text-xl text-gray-800 font-semibold text-center">
            {session?.user?.email}
          </p>
        )}

        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex items-center justify-center px-10 py-4 text-lg bg-red-600 text-white gap-3 mx-auto hover:bg-red-700 transition-all">
            <AiOutlineLogout className="text-xl" /> Log Out
          </button>
        </form>
      </div>

      <ProfileUpdate uid={uid} uname={uname}/>
    </main>
  );
};

export default page;
