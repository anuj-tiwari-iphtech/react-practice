
import { useState } from "react";

function LikedButton() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(100);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  return (
    <div>
      <h2>Likes:{likes}</h2>

      <button onClick={handleLike}>
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default LikedButton;