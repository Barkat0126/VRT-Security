import React, { useContext } from "react";
import { RBACContext } from "../../context/RBACContext";
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";

const RoleTable = () => {
  const { roles, deleteRole } = useContext(RBACContext);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Permissions</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.id}>
            <TableCell>{role.id}</TableCell>
            <TableCell>{role.name}</TableCell>
            <TableCell>{role.permissions.join(", ")}</TableCell>
            <TableCell>
              <Button onClick={() => deleteRole(role.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RoleTable;
