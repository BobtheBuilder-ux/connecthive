"use client";
import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const ProfileUpdate = ({ uid, uname }) => {
  const [name, setName] = useState(uname);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Name cannot be empty");
    }
    try {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, { name });
      alert("Profile updated sucessfully");
    } catch (error) {
      console.error(error);
      alert("Error updating profile, try again later");
    }
  };

  return (
    <main>
      <form className="my-10" onSubmit={handleUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Update your name..."
          className="w-full rounded-md border border-gray-300 outline-none p-2"
        />

        <button className="mt-3 py-2 w-full bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
          Update Profile
        </button>
      </form>
    </main>
  );
};

export default ProfileUpdate;
