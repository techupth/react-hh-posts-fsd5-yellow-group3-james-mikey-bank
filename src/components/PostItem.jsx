export default function PostItem(props) {
  console.log(props);
  return (
    <div class="post-item">
      <div class="post-header">
        <h2>{props.title}</h2>
        <div class="post-social-media-stats">
          <span class="stats-topic">Likes: </span>
          <span class="post-likes">{props.likeCount}</span>
        </div>
      </div>
      <p class="post-content">{props.text}</p>
      <div class="post-actions">
        <button
          class="like-button"
          onClick={(e) => props.handleClick(e, props.id)}
        >
          Like
        </button>
        <button
          class="dislike-button"
          onClick={(e) => props.handleClick(e, props.id)}
        >
          Dislike
        </button>
      </div>
    </div>
  );
}
