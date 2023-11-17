import { useEffect, useState } from "react";
import axios from "axios";
import { deleteUser, showUser } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserScreen = () => {
  const dispatch = useDispatch();
  //get data form state
  const users = useSelector((state) => state.users.users);
  // console.log(users);

  //featching data form server and dispatch to state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/users");
        dispatch(showUser(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //delete
  const handleDeleteUser = async (id) => {
    await axios
      .delete("http://localhost:4000/api/users/" + id)
      .then(() => {
        dispatch(deleteUser(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Users List </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              const { id, name, email, age } = user;
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{age}</td>
                  <td>
                    <Link to={`/update-user/${user.id}`}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserScreen;
