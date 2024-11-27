const mockRoles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ];
  
  export const getRoles = () => Promise.resolve(mockRoles);
  
  export const addRole = (role) => {
    mockRoles.push({ id: mockRoles.length + 1, ...role });
    return Promise.resolve({ success: true, role });
  };
  
  export const editRole = (id, updatedRole) => {
    const index = mockRoles.findIndex((r) => r.id === id);
    if (index !== -1) mockRoles[index] = { ...mockRoles[index], ...updatedRole };
    return Promise.resolve({ success: true });
  };
  
  export const deleteRole = (id) => {
    const index = mockRoles.findIndex((r) => r.id === id);
    if (index !== -1) mockRoles.splice(index, 1);
    return Promise.resolve({ success: true });
  };
  