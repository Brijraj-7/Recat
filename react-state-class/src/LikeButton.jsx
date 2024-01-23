import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [cliks, setClicks] = useState(0);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(cliks + 1);
  };

  let styles = { color: "red" };
  return (
    <div>
      <h1 onClick={toggleLike}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={styles}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </h1>
      <h2>Likes {cliks}</h2>
    </div>
  );
}
