import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="mx-9">
      <h2 className="text-center text-2xl font-bold">Total Post : {posts.length}</h2>
      <div className="grid grid-cols-4 gap-9 my-9 ">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
