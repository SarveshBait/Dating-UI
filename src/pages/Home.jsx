import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TinderCard from "react-tinder-card";
import Image2 from "../assets/Images/profile2.jpeg";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const navigate = useNavigate();
  const cardRef = useRef();
  const [swipeDir, setSwipeDir] = useState("");

  const user = {
    name: "Alicia",
    age: 24,
    image: Image2,
    bio: "Loves hiking, coffee & adventures.",
  };

  const swiped = (direction) => {
    setSwipeDir(direction);
    setTimeout(() => setSwipeDir(""), 800);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  const swipe = (dir) => {
    setSwipeDir(dir);
    cardRef.current.swipe(dir);
    setTimeout(() => setSwipeDir(""), 800);
  };

  return (
    <div className="h-screen w-full overflow-x-hidden flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 to-orange-400 px-4">
      {/* Top-right profile button */}
      <button
        onClick={() => navigate("/profile")}
        className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center border hover:scale-105 transition"
      >
        <img
          src={user.image}
          alt="Profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
      </button>

      {/* Centered Tinder Card */}
      <div className="relative flex justify-center w-full">
        <div className="relative w-full max-w-sm sm:w-96 lg:w-[28rem] h-[70vh] sm:h-[34rem]">
          <TinderCard
            ref={cardRef}
            className="absolute w-full h-full"
            onSwipe={swiped}
            onCardLeftScreen={() => outOfFrame(user.name)}
            preventSwipe={["down"]}
          >
            <div className="relative w-full h-full">
              <ProfileCard {...user} />

              {/* Overlay Labels */}
              {swipeDir === "left" && (
                <div className="absolute top-6 left-3 sm:top-8 sm:left-4 text-xl sm:text-2xl font-extrabold text-red-500 border-2 sm:border-4 border-red-500 px-3 py-1 sm:px-4 sm:py-1 rounded-lg rotate-[-20deg]">
                  NOPE
                </div>
              )}
              {swipeDir === "right" && (
                <div className="absolute top-6 right-3 sm:top-8 sm:right-4 text-xl sm:text-2xl font-extrabold text-green-500 border-2 sm:border-4 border-green-500 px-3 py-1 sm:px-4 sm:py-1 rounded-lg rotate-[20deg]">
                  LIKE
                </div>
              )}
              {swipeDir === "up" && (
                <div className="absolute top-1 left-1/2 -translate-x-1/2 text-xl sm:text-2xl font-extrabold text-yellow-400 border-2 sm:border-4 border-yellow-400 px-3 py-1 sm:px-4 sm:py-1 rounded-lg">
                  SAVED ⭐
                </div>
              )}

              {/* Action buttons */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4 sm:space-x-6">
                <button
                  onClick={() => swipe("left")}
                  className="bg-red-500 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center text-xl sm:text-2xl hover:scale-110 transition"
                >
                  ❌
                </button>
                <button
                  onClick={() => swipe("up")}
                  className="bg-yellow-400 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center text-xl sm:text-2xl hover:scale-110 transition"
                >
                  ⭐
                </button>
                <button
                  onClick={() => swipe("right")}
                  className="bg-green-500 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center text-xl sm:text-2xl hover:scale-110 transition"
                >
                  💚
                </button>
              </div>
            </div>
          </TinderCard>
        </div>
      </div>
    </div>
  );
}
