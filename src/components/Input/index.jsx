import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunk";

const Input = () => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    dispatch(addCommentThunk(comment));
    setComment("");
  };

  return (
    <>
      <input
        placeholder="Adicione um comentário"
        value={comment}
        onChange={handleCommentChange}
      />
      <button onClick={handleCommentSubmit}>Adicionar</button>
    </>
  );
};

export default Input;
