import { useLoaderData } from "react-router-dom";
import User from "./User/User";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="flex items-center">
      <div className="mx-auto">
        <h2 className="font-bold text-3xl">This is Users</h2>
        <h2 className="font-bold text-2xl">User Length : {users.length}</h2>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
