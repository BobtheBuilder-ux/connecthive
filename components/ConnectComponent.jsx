"use client";
import { db } from "@/lib/firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { BiLoaderCircle } from "react-icons/bi";

export default function ConnectComponent({ session }) {
  const uid = session?.user?.id;
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchAchievements = async () => {
    try {
      const achievementData = [];
      const querySnapshot = await getDocs(collection(db, "achievements"));
      querySnapshot.forEach((doc) => {
        const achieve = { id: doc.id, ...doc.data() };
        achievementData.push(achieve);
      });
      setAchievements(achievementData);
    } catch (error) {
      console.error(error);
      alert("oops, something went wrong");
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, [achievements]);

  const handleLike = async (postId) => {
    const userId = session?.user?.id;
    const postRef = doc(db, "achievements", postId);
    try {
      const postSnap = await getDoc(postRef);
      if (!postSnap.exists()) {
        alert("Post not found");
      }

      const postData = postSnap.data();
      const postLikes = postData.likes || [];

      let updatedLikes = null;
      if (postLikes.includes(userId)) {
        // unlike posts
        updatedLikes = postLikes.filter((id) => id !== userId);
      } else {
        // like posts
        updatedLikes = [...postLikes, userId];
      }

      await updateDoc(postRef, { likes: updatedLikes });
      fetchAchievements();
    } catch (error) {
      console.error("Error updating like", error);
      alert("An error occurred while liking you rpost");
    }
  };

  const handleDel = async (id) => {
    await deleteDoc(doc(db, "achievements", id));
    fetchAchievements();
  };

  if (loading) {
    return <div className="flex gap-2 items-center justify-center h-dvh">
      <BiLoaderCircle className="animate-spin text-2xl" />
      Loading...
    </div>
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 min-h-dvh">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Recent Achievements
      </h1>

      <div className="space-y-6">
        {achievements.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 relative"
          >
            <div className="flex max-md:flex-col items-center mb-4">
              <img
                src={post.image}
                alt={post.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h2 className="font-semibold text-lg">{post.author}</h2>
                <p className="text-sm text-gray-500">{post.position}</p>
              </div>
            </div>

            <p className="text-gray-700 text-base mb-3">{post.achievement}</p>
            <p className="text-sm text-gray-400">{post.timestamp}</p>

            <button
              onClick={() => handleLike(post.id)}
              className={`flex items-center gap-2 ${
                post.likes?.includes(session?.user?.id)
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              <FaHeart />
              <span>{post.likes?.length || 0}</span>
            </button>

            {uid == post.userId && (
              <button
                onClick={() => handleDel(post.id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 text-xs rounded-md w-fit"
              >
                <IoTrashBinSharp />
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
