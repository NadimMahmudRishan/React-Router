import PropTypes from "prop-types";
const Post = ({ post }) => {
  const { title, body,id } = post;

  return <div className="w-full p-5 bg-green-300 shadow-2xl rounded-xl mx-auto">
    <p className="font-bold">Post : {id}</p>
    <h2 className=" text-2xl font-bold">{title}</h2>
    <p>{body}</p>
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