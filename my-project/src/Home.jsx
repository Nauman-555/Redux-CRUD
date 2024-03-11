import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteUser } from "./assets/Redux/userReducer";
const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DeleteUser({ id: id }));
  };
  return (
    <div className="p-4">
      <div className="mb-4">
        <Link
          to="/Create"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </Link>
      </div>
      <div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border text-center px-4 py-2">{user.name}</td>
                <td className="border text-center px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="text-center">
                  <Link
                    to={`/edit/${user.id}`}
                    className="bg-red-500 hover:bg-blue-700 text-white font-bold mr-4 py-2 px-4 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
