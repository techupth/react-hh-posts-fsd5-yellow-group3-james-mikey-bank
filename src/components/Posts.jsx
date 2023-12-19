import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import PostItem from "./PostItem";

function Posts() {
  const [postsData, setPostsData] = useState([
    {
      id: nanoid(),
      title: "Post Title #1",
      likeCount: 10,
      textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
      turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi tincidunt,
      leo non molestie consectetur, elit libero faucibus tellus, sed fringilla
      tortor libero sit amet odio. Maecenas sed ante condimentum mauris
      euismod pellentesque eu eu justo...`,
    },
  ]);

  function handleClick(e, id) {
    const { innerText } = e.target;
    setPostsData((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          if (innerText === "Like") {
            return {
              ...post,
              likeCount: post.likeCount++,
            };
          } else {
            if (post.likeCount > 0) {
              return {
                ...post,
                likeCount: post.likeCount--,
              };
            } else {
              return post;
            }
          }
        } else {
          return post;
        }
      });
    });
  }

  const PostLists = postsData.map((post) => (
    <PostItem
      id={post.id}
      title={post.title}
      likeCount={post.likeCount}
      text={post.textContent}
      handleClick={handleClick}
    />
  ));

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">{PostLists}</div>
    </div>
  );
}

export default Posts;
