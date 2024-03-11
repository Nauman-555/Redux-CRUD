import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateUser } from "./assets/Redux/userReducer";
const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(UpdateUser({ id: id, name: uname, email: uemail }));
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="">Name</label>
          <input
            className="border-2"
            type="text"
            placeholder="enter name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            className="border-2"
            type="email"
            placeholder="enter email"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
