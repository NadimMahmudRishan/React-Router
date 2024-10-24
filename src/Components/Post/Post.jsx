import PropTypes from "prop-types";
import { Link } from "react-router-dom";
Link
const Post = ({ post }) => {
  const { title, body,id } = post;

  return <div className="w-full p-5 bg-green-300 shadow-2xl rounded-xl mx-auto justify-between flex flex-col">
    <p className="font-bold">Post : {id}</p>
    <h2 className=" text-2xl font-bold">{title}</h2>
    <p>{body}</p>
    <Link className="text-blue-600 hover:text-blue-800" to={`/PostDetails/${id}`}>See more</Link>
  </div>;
};

export default Post;
Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};