import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [requirement, setRequirement] = useState("");
  const [duration, setDuration] = useState("");
  const [deadline, setDeadline] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/intern", {
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

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1 className="has-text-weight-bold has-text-centered is-capitalized is-size-3">Input Data Internship</h1>
        <form onSubmit={saveUser}>
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
              <textarea class="textarea" type="text" value={requirement} onChange={(e) => setRequirement(e.target.value)} placeholder="Requirement"></textarea>
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
