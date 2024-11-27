const mockUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
  ];
  
  export const getUsers = () => Promise.resolve(mockUsers);
  
  export const addUser = (user) => {
    mockUsers.push({ id: mockUsers.length + 1, ...user });
    return Promise.resolve({ success: true, user });
  };
  
  export const editUser = (id, updatedUser) => {
    const index = mockUsers.findIndex((u) => u.id === id);
    if (index !== -1) mockUsers[index] = { ...mockUsers[index], ...updatedUser };
    return Promise.resolve({ success: true });
  };
  
  export const deleteUser = (id) => {
    const index = mockUsers.findIndex((u) => u.id === id);
    if (index !== -1) mockUsers.splice(index, 1);
    return Promise.resolve({ success: true });
  };
  