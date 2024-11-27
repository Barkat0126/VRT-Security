export const validateName = (name) => {
    if (!name) return "Name is required.";
    if (name.length < 3) return "Name must be at least 3 characters long.";
    return null;
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required.";
    if (!emailRegex.test(email)) return "Invalid email format.";
    return null;
  };
  
  export const validateRole = (role) => {
    if (!role) return "Role is required.";
    return null;
  };
  
  export const validateForm = (formData) => {
    const errors = {};
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const roleError = validateRole(formData.role);
  
    if (nameError) errors.name = nameError;
    if (emailError) errors.email = emailError;
    if (roleError) errors.role = roleError;
  
    return errors;
  };
  