import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postdetails = useLoaderData();
  const { title, body, id } = postdetails;

  return (
    <div className="w-full p-5 bg-green-300 shadow-2xl rounded-xl mx-auto justify-between flex flex-col">
      <p className="font-bold">Post : {id}</p>
      <h2 className=" text-2xl font-bold">{title}</h2>
      <p>{body}</p>
    </div>
  );;
};

export default PostDetails;
