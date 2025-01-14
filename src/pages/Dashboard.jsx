import React, { useState, useEffect } from "react";
import { Search, Menu, Bell, User, Settings, LogOut } from "lucide-react";
import Swal from "sweetalert2"; // Make sure to import Swal

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    contactNumber: "",
    password: "",
  });

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      // If user confirms deletion
      if (result.isConfirmed) {
        const response = await fetch(
          `http://localhost:8080/user/delete/${userId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete user");
        }

        // Remove user from state
        setUsers(users.filter((user) => user.userId !== userId));

        // Show success message
        await Swal.fire(
          "Deleted!",
          "User has been deleted successfully.",
          "success"
        );
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      await Swal.fire(
        "Error!",
        "Failed to delete user. Please try again.",
        "error"
      );
    }
  };

  const handleEdit = (user) => {
    // Set the selected user for editing
    setSelectedUser(user);
    setFormData({
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      contactNumber: user.contactNumber,
      password: user.password,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/user/update/${selectedUser.userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      // Update the user list with the new user data
      setUsers(
        users.map((user) =>
          user.userId === selectedUser.userId ? { ...user, ...formData } : user
        )
      );

      await Swal.fire(
        "Success!",
        "User has been updated successfully.",
        "success"
      );

      // Close the edit modal/form
      setSelectedUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
      await Swal.fire(
        "Error!",
        "Failed to update user. Please try again.",
        "error"
      );
    }
  };

  // Sample data for statistics
  const stats = [
    { title: "Article Views", value: "60.5k", icon: Search },
    { title: "Likes", value: "150", icon: Bell },
    { title: "Comments", value: "320", icon: User },
    { title: "Published", value: "70", icon: Settings },
  ];

  const handleLogout = () => {
    // Add logout logic here
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full h-[70px] bg-white shadow-md px-8 flex items-center justify-between z-50">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold text-blue-900">B2B</h1>
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-64 h-10 px-4 rounded-l-full bg-gray-100 focus:outline-none"
          />
          <button className="h-10 w-12 bg-blue-900 rounded-r-full flex items-center justify-center">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* User Section */}
        <div className="flex items-center gap-6">
          <Bell className="w-6 h-6 text-gray-600" />
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-[70px] flex">
        {/* Sidebar */}
        <nav
          className={`fixed h-[calc(100vh-70px)] w-64 bg-white shadow-lg transition-all duration-300 ${
            isNavOpen ? "left-0" : "-left-64"
          }`}
        >
          <div className="flex flex-col gap-4 p-4">
            <button className="flex items-center gap-4 px-4 py-3 bg-blue-900 text-white rounded-lg">
              <Search className="w-6 h-6" />
              <span>Dashboard</span>
            </button>
            <button className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 rounded-lg">
              <User className="w-6 h-6" />
              <span>Profile</span>
            </button>
            <button className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 rounded-lg">
              <Settings className="w-6 h-6" />
              <span>Settings</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 rounded-lg"
            >
              <LogOut className="w-6 h-6" />
              <span>Logout</span>
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <main
          className={`flex-1 p-6 ${
            isNavOpen ? "ml-64" : "ml-0"
          } transition-all duration-300`}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-blue-900 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold">{stat.value}</h2>
                    <p className="text-sm mt-1">{stat.title}</p>
                  </div>
                  <stat.icon className="w-12 h-12 opacity-80" />
                </div>
              </div>
            ))}
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900">
                List of All Users!
              </h2>
              <button
                onClick={fetchUsers}
                className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
              >
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="p-3 text-left">ID</th>
                    <th className="p-3 text-left">Full Name</th>
                    <th className="p-3 text-left">Username</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Contact</th>
                    <th className="p-3 text-left">Password</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr
                        key={user.userId}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="p-3">{user.userId}</td>
                        <td className="p-3">{user.fullName}</td>
                        <td className="p-3">{user.username}</td>
                        <td className="p-3">{user.email}</td>
                        <td className="p-3">{user.contactNumber}</td>
                        <td className="p-3">*****</td>
                        <td className="p-3 space-x-2">
                          <button
                            onClick={() => handleEdit(user)}
                            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(user.userId)}
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center p-3">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Edit User Form (Modal) */}
          {selectedUser && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
                <form onSubmit={handleUpdate}>
                  <div className="mb-4">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full h-10 px-4 border rounded-lg mt-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full h-10 px-4 border rounded-lg mt-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-10 px-4 border rounded-lg mt-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="contactNumber"
                      className="block text-sm font-medium"
                    >
                      Contact Number
                    </label>
                    <input
                      id="contactNumber"
                      type="text"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full h-10 px-4 border rounded-lg mt-2"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full h-10 px-4 border rounded-lg mt-2"
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedUser(null)}
                      className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
