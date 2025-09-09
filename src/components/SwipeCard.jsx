import { useState } from "react";
import TinderCard from "react-tinder-card";

export default function SwipeCard({ person }) {
  const [lastDirection, setLastDirection] = useState();
  const [showAction, setShowAction] = useState(null); // for ❌ ⭐ 💚 overlay

  const swiped = (direction) => {
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    setShowAction(null); // reset overlay after card leaves
  };

  // handle button click (simulate swipe)
  const handleAction = (action) => {
    setShowAction(action);
    setTimeout(() => setShowAction(null), 800); // hide after 0.8s
  };

  return (
    <div className="absolute w-full h-full">
      <TinderCard
        className="absolute w-full h-full"
        onSwipe={swiped}
        onCardLeftScreen={() => outOfFrame(person.name)}
        preventSwipe={["up", "down"]}
      >
        <div className="relative bg-white rounded-2xl shadow-lg w-full h-full overflow-hidden">
          {/* Profile Image */}
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-3/4 object-cover"
          />

          {/* Name + Bio */}
          <div className="p-4">
            <h2 className="text-xl font-bold">
              {person.name}, {person.age}
            </h2>
            <p className="text-gray-600">{person.bio}</p>
          </div>

          {/* Overlay Action (❌ ⭐ 💚) */}
          {showAction && (
            <div className="absolute inset-0 flex items-center justify-center">
              {showAction === "dislike" && (
                <div className="bg-red-500/70 text-white px-6 py-3 rounded-xl text-3xl font-bold">
                  ❌ Nope
                </div>
              )}
              {showAction === "star" && (
                <div className="bg-yellow-400/80 text-white px-6 py-3 rounded-xl text-3xl font-bold">
                  ⭐ Super Like
                </div>
              )}
              {showAction === "like" && (
                <div className="bg-green-500/70 text-white px-6 py-3 rounded-xl text-3xl font-bold">
                  💚 Like
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-6">
            <button
              onClick={() => handleAction("dislike")}
              className="bg-red-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
            >
              ❌
            </button>
            <button
              onClick={() => handleAction("star")}
              className="bg-yellow-400 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
            >
              ⭐
            </button>
            <button
              onClick={() => handleAction("like")}
              className="bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
            >
              💚
            </button>
          </div>
        </div>
      </TinderCard>
    </div>
  );
}
