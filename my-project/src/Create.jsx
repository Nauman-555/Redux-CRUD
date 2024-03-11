import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./assets/Redux/userReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const users = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            className="border-2"
            type="text"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            className="border-2"
            type="email"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Create;
