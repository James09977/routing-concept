import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const user = useLoaderData();
  const { name, email, phone, website } = user;
  return (
    <div>
      <h2>Details about user: {name} </h2>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetail;
