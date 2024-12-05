///==============Task1=======================

type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Alice Smith",
  permissions: ["read", "write", "delete"],
  email: "alice.smith@example.com",
};
