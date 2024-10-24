import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, username, email, phone, website } = user;
  return (
    <div className="border-red-600 border rounded-xl p-3 my-5 text-center bg-sky-200 shadow-lg ">
      <h2 className="font-bold">{username}</h2>
      <div className="text-left">
        <h3>Name : {name}</h3>
        <p>Email : {email}</p>
        <p>Phone : {phone}</p>
        <p>Website : {website}</p>
      </div>
      <Link
        className="text-blue-700 hover:text-blue-800 font-medium"
        to={`/Users/${id}`}
      >
        Show details
      </Link>
    </div>
  );
};

export default User;
User.PropTypes = {
  user: PropTypes.object.isRequired,
};
