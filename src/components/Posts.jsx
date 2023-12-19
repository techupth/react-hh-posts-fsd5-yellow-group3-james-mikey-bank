import PostItem from "./PostItem";

function Posts() {
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        <PostItem title="Post Title #1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          perspiciatis, et, magni voluptates fugiat recusandae id beatae
          cupiditate ipsa impedit porro illum minus quasi accusantium tenetur
          eveniet libero quas! Nam dolorem nobis repudiandae, tenetur harum est
          eaque error architecto omnis dicta sed totam amet porro deleniti
          reiciendis laboriosam iusto soluta.
        </PostItem>
        <PostItem title="Post Title #2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod maxime
          quisquam ut tempore a. Laudantium magnam tempore quasi expedita!
          Molestias, numquam. Voluptates quaerat eaque facere nostrum
          praesentium aspernatur eius assumenda!
        </PostItem>
      </div>
    </div>
  );
}

export default Posts;
