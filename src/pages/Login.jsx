import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission via the browser

    // Admin credentials
    const adminUser = "admin";
    const adminPass = "adminPass";

    // Ensure fields are not empty
    if (!username.trim() || !password.trim()) {
      Swal.fire("Error", "Please fill in both username and password.", "error");
      return;
    }

    try {
      // Admin login
      if (username === adminUser && password === adminPass) {
        Swal.fire("Success", "Welcome Admin!", "success").then(() => {
          navigate("/dashboard"); // Redirect to admin dashboard
        });
        return;
      }

      // Backend API call for user login
      const response = await fetch(
        `http://localhost:8080/user/login?username=${encodeURIComponent(
          username
        )}&password=${encodeURIComponent(password)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json(); // Parse JSON response
        console.log("Response:", result);

        Swal.fire("Success", "Login successful!", "success").then(() => {
          navigate("/"); // Redirect to user dashboard
        });
      } else {
        const errorMessage = await response.text();
        Swal.fire(
          "Error",
          errorMessage || "Invalid username or password.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire(
        "Error",
        "An error occurred while logging in. Please try again later.",
        "error"
      );
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="w-[27vw] h-[80vh] rounded-2xl bg-[#F0EDEB] border border-gray-400 p-10">
        <h1 className="text-4xl font-semibold font-mono">Log in</h1>
        <form onSubmit={handleLoginSubmit} className="mt-10">
          <h3 className="text-lg font-semibold font-mono">Username</h3>
          <input
            className="w-[21vw] px-5 py-2 text-lg font-mono rounded-md border border-gray-400 mt-2"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <h3 className="text-lg font-semibold font-mono mt-6">Password</h3>
          <input
            className="w-[21vw] px-5 py-2 text-lg font-mono rounded-md border border-gray-400 mt-2"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="text-lg px-10 py-3 tracking-wide font-semibold text-white border bg-[#006570] font-mono rounded-full mt-10"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
