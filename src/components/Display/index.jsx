import { useSelector } from "react-redux";

const Display = () => {
  const { user } = useSelector((store) => store);

  return (
    <>
      <h2>{user.name}</h2>
      <ul>
        {user.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </>
  );
};

export default Display;
