import React from "react";

const PermissionTable = ({ permissions }) => {
  return (
    <ul>
      {permissions.map((permission, index) => (
        <li key={index}>{permission}</li>
      ))}
    </ul>
  );
};

export default PermissionTable;
