import React, { createContext, useState } from "react";

export const RBACContext = createContext();

export const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const addUser = (user) => setUsers([...users, { id: users.length + 1, ...user }]);
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  const addRole = (role) => setRoles([...roles, { id: roles.length + 1, ...role }]);
  const deleteRole = (id) => setRoles(roles.filter((role) => role.id !== id));

  return (
    <RBACContext.Provider value={{ users, roles, addUser, deleteUser, addRole, deleteRole }}>
      {children}
    </RBACContext.Provider>
  );
};
