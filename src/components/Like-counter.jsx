import React, { useState } from "react";

export default function LikeCounterPost(post) {
  const [likeCounter, setLikeCounter] = useState(0);
  const handleAddLike = () => {
    setLikeCounter(likeCounter + 1);
  };
  const handleAddDislike = () => {
    if (post.likes + likeCounter > 0) {
      setLikeCounter(likeCounter - 1);
    }
  };
  return (
    <div class="post-item">
      <div class="post-header">
        <h2>
          {post.title} #{post.id}
        </h2>
        <div class="post-social-media-stats">
          <span class="stats-topic">Likes: </span>
          <span class="post-likes">{post.likes + likeCounter}</span>
        </div>
      </div>
      <p class="post-content">{post.content}</p>
      <div class="post-actions">
        <button class="like-button" onClick={handleAddLike}>
          Like
        </button>
        <button class="dislike-button" onClick={handleAddDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
}
