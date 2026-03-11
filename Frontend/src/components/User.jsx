import React from "react";
import { useLocation } from "react-router";

function User() {
  const { state } = useLocation();

  const user = state?.user;

  return (
    <div>
      <h2>User Details</h2>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>DOB: {user?.dateofBirth}</p>
      <p>Mobile: {user?.mobileNumber}</p>
    </div>
  );
}

export default User;