import { useState } from "react";

function PostItem(props) {
  const [likesCount, setLikesCount] = useState(0);

  function handleLike(action) {
    setLikesCount((prevLikesCount) => {
      if (action === "like") {
        return prevLikesCount + 1;
      } else if (action === "dislike") {
        return prevLikesCount - 1;
      }
      return prevLikesCount;
    });
  }

  return (
    <div class="post-item">
      <div class="post-header">
        <h2>{props.title}</h2>
        <div class="post-social-media-stats">
          <span class="stats-topic">Likes:</span>
          <span class="post-likes">{likesCount}</span>
        </div>
      </div>
      <p class="post-content">{props.children}</p>
      <div class="post-actions">
        <button class="like-button" onClick={() => handleLike("like")}>
          Like
        </button>
        <button class="dislike-button" onClick={() => handleLike("dislike")}>
          Dislike
        </button>
      </div>
    </div>
  );
}
export default PostItem;
