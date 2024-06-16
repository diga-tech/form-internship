import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/intern");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/intern/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns m-5 is-centered">
      <div className="columm is-half">
        <table className="table is-striped is fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Perusahaan</th>
              <th>Role</th>
              <th>Description</th>
              <th>Requirement</th>
              <th>Duration (Month)</th>
              <th>Deadline enroll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.description}</td>
                <td>{user.requirement}</td>
                <td>{user.duration}</td>
                <td>{user.deadline}</td>
                <td>
                  <Link to={`edit/${user.id}`} className="button is-small is-info">
                    Edit
                  </Link>
                  <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={"add"} className=" column button is-success">
          Add New
        </Link>
      </div>
    </div>
  );
};

export default UserList;
