import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

function User() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: state?.user?.name || "",
    email: state?.user?.email || "",
    dateofBirth: state?.user?.dateofBirth?.split("T")[0] || "",
    mobileNumber: state?.user?.mobileNumber || "",
  });

  const user = state?.user;

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE USER
  const updateUser = async () => {
    try {
      await axios.put(
        `https://week-8-userapp.onrender.com/user-api/users/${user._id}`,
        formData
      );
      alert("User updated successfully");
      setIsEditing(false);
navigate("/userlist", { state: { refresh: true } });    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Update failed");
    }
  };

  // DELETE USER (soft delete)
  const deleteUser = async () => {
    try {
      await axios.patch(
        `https://week-8-userapp.onrender.com/user-api/users/${user._id}`
      );
      alert("User deleted");
navigate("/userlist", { state: { refresh: true } });    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl mb-4">User Details</h2>

      {isEditing ? (
        <div className="flex flex-col gap-2">
          <input name="name" value={formData.name} onChange={handleChange} />
          <input name="email" value={formData.email} onChange={handleChange} />
          <input
            type="date"
            name="dateofBirth"
            value={formData.dateofBirth}
            onChange={handleChange}
          />
          <input
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />

          <button onClick={updateUser} className="bg-green-500 text-white p-2">
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <p>DOB: {user?.dateofBirth}</p>
          <p>Mobile: {user?.mobileNumber}</p>
        </div>
      )}

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-yellow-500 text-white p-2"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>

        <button
          onClick={deleteUser}
          className="bg-red-500 text-white p-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default User;