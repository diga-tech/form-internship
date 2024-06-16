import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [requirement, setRequirement] = useState("");
  const [duration, setDuration] = useState("");
  const [deadline, setDeadline] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUsersById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/intern/${id}`, {
        name,
        role,
        description,
        requirement,
        duration,
        deadline,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersById = async () => {
    const response = await axios.get(`http://localhost:5000/intern/${id}`);
    setName(response.data.name);
    setRole(response.data.role);
    setDescription(response.data.description);
    setRequirement(response.data.requirement);
    setDuration(response.data.duration);
    setDeadline(response.data.deadline);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1 className="has-text-weight-bold has-text-centered is-capitalized is-size-3">Update Data Internship</h1>
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Role</label>
            <div className="control">
              <input type="text" className="input" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea class="textarea" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Requirement</label>
            <div className="control">
              <textarea class="textarea" type="text" value={requirement} onChange={(e) => setRequirement(e.target.value)} placeholder="Description"></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Duration (Month)</label>
            <div className="control">
              <input type="number" className="input" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" />
            </div>
          </div>
          <div className="field">
            <label className="label">Deadline</label>
            <div className="control">
              <input type="date" className="input" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Requirement" />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
