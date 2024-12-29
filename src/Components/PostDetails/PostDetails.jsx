import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { postId } = useParams();
  console.log(postId);

  const handleReturn = () => {
    // navigate(`/posts`);
    navigate(-1);
  };

  const { title, body, id } = post;
  return (
    <div>
      <h3>Post details about: {id} </h3>
      <p>{title}</p>
      <p>{body}</p>
      <button onClick={handleReturn}>Go Back</button>
    </div>
  );
};

export default PostDetails;
