import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import Achievement from "./Achievement";

const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/auth/signin");
  }
  return (
    <main className="min-h-dvh p-5">
      <Achievement session={session}/>
    </main>
  );
};

export default page;
