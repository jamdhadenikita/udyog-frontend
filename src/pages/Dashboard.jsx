import React, { useState } from "react";
import { Search, Menu, Bell, User, Settings, LogOut } from "lucide-react";

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [users, setUsers] = useState([]);

  // Sample data for statistics
  const stats = [
    { title: "Article Views", value: "60.5k", icon: Search },
    { title: "Likes", value: "150", icon: Bell },
    { title: "Comments", value: "320", icon: User },
    { title: "Published", value: "70", icon: Settings },
  ];

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      // Add error handling here
    }
  };

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
                  {users.map((user) => (
                    <tr key={user.userId} className="border-b hover:bg-gray-50">
                      <td className="p-3">{user.userId}</td>
                      <td className="p-3">{user.fullName}</td>
                      <td className="p-3">{user.username}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">{user.contactNumber}</td>
                      <td className="p-3">*****</td>
                      <td className="p-3 space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                          Edit
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
