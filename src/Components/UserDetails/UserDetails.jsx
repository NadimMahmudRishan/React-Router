import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetail = useLoaderData();
  const { name, email, phone, website } = userDetail;
  return (
    <div className="flex items-center h-full">
      <div className="text-left mx-auto p-10 border-2 bg-sky-300 border-[#25ffa4] rounded-lg shadow-2xl">
        <h3 className="text-2xl font-bold">Name : {name}</h3>
        <p className="font-semibold">Email : {email}</p>
        <p className="font-semibold">Phone : {phone}</p>
        <p className="font-semibold">Website : {website}</p>
      </div>
    </div>
  );
};

export default UserDetails;
