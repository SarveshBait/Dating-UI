import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Image2 from "../assets/Images/profile2.jpeg";

export default function Profile() {
  const [progress] = useState(70);
  const navigate = useNavigate();
  const user = {
    name: "Alicia",
    age: 24,
    image: Image2,
    bio: "Loves hiking, coffee & adventures.",
    };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-orange-400 p-6">
      {/* 🔙 Back button */}
      <button
        onClick={() => navigate("/home")}
        className="absolute top-4 left-4 bg-white rounded-full px-4 py-2 shadow-md hover:bg-gray-200 transition"
      >
        ⬅
      </button>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center">
        {/* Tinder Logo */}
        <h1 className="text-red-500 font-bold text-2xl mb-6">Dating-UI</h1>

        {/* Profile Picture with Progress */}
        <div className="relative inline-block">
          <div className="w-32 h-32 rounded-full border-4 border-gray-200 flex items-center justify-center">
            <img
              src= {user.image}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>

          {/* Progress Bar (circle effect) */}
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full"
            style={{
              background: `conic-gradient(#ef4444 ${progress * 3.6}deg, #e5e7eb 0deg)`,
              mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)",
            }}
          ></div>

          {/* Progress Label */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 text-xs font-medium bg-gradient-to-br from-pink-500 to-orange-400 text-white px-2 py-1 rounded-full">
            {progress}% COMPLETE
          </span>
        </div>

        {/* Name and Age */}
        <p className="mt-6 text-lg font-semibold">{user.name} {user.age}</p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="flex flex-col items-center text-gray-600 hover:text-red-500">
            <span className="material-icons">settings</span>
            <p className="text-xs mt-1">SETTINGS</p>
          </button>

          <button className="flex flex-col items-center text-gray-600 hover:text-red-500">
            <span className="material-icons">edit</span>
            <p className="text-xs mt-1">EDIT PROFILE</p>
          </button>

          <button className="flex flex-col items-center text-gray-600 hover:text-red-500">
            <span className="material-icons">security</span>
            <p className="text-xs mt-1">SAFETY</p>
          </button>
        </div>

        {/* Tinder Platinum Section */}
        <div className="mt-8 p-4 rounded-xl bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800">💕 Dating-UI Premium 💕</h2>
          <p className="text-sm text-gray-500 mt-1">
            Level up every action you take on Tinder
          </p>
          <button className="mt-4 w-full bg-white-500 text-black py-2 rounded-full font-medium hover:bg-gradient-to-br from-pink-500 to-orange-400 transition">
            LEARN MORE
          </button>
        </div>

        {/* Bottom Navbar */}
        <div className="flex justify-between items-center mt-8 text-gray-500 text-2xl">
          <span className="material-icons hover:bg-gradient-to-br from-pink-500 to-orange-400 p-1">whatshot</span>
          <span className="material-icons hover:bg-gradient-to-br from-pink-500 to-orange-400 p-1">star</span>
          <span className="material-icons hover:bg-gradient-to-br from-pink-500 to-orange-400 p-1">search</span>
          <span className="material-icons hover:bg-gradient-to-br from-pink-500 to-orange-400 p-1">chat</span>
          <span className="material-icons hover:bg-gradient-to-br from-pink-500 to-orange-400 p-1">person</span>
        </div>
      </div>
    </div>
  );
}
