import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import UserTable from "../../components/UserManagement/UserTable";
import UserForm from "../../components/UserManagement/UserForm";
import RoleTable from "../../components/RoleManagement/RoleTable";
import PermissionTable from "../../components/PermissionManagement/PermissionTable";

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* User Management Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">User Management</Typography>
            <UserTable />
            <UserForm />
          </Paper>
        </Grid>

        {/* Role Management Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">Role Management</Typography>
            <RoleTable />
          </Paper>
        </Grid>

        {/* Permission Management Section */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">Permissions</Typography>
            <PermissionTable permissions={["Read", "Write", "Delete"]} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
