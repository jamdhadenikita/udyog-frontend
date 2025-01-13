import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContact] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !username || !email || !contactNumber || !password) {
      await Swal.fire({
        icon: "error",
        title: "All fields are required",
        text: "Please fill out all fields before submitting.",
      });
      return;
    }

    const userData = {
      fullName,
      username,
      email,
      contactNumber,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(userData),
      });

      const contentType = response.headers.get("content-type");
      let finalData;

      if (contentType && contentType.includes("application/json")) {
        finalData = await response.json();
      } else {
        finalData = { message: await response.text() };
      }

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text:
            finalData.message ||
            "Your registration has been done successfully!",
        });
        navigate("/login"); // Redirect to login page
      } else {
        throw new Error(finalData.message || "Failed to register user");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      await Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text:
          error.message ||
          "There was an error during registration. Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center p-10 bg-white">
      <div className="w-[50vw] h-[115vh] rounded-2xl bg-[#F0EDEB] border border-gray-400 px-14 py-8">
        <h1 className="text-4xl font-semibold font-mono">Sign up</h1>
        <p className="mt-4 text-md text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-900 font-semibold">
            Log In Here
          </Link>
        </p>

        <form onSubmit={handleSignUpSubmit} className="mt-6">
          <h3 className="text-lg font-semibold font-mono">Full Name</h3>
          <input
            className="w-[40vw] px-5 py-2 text-lg font-mono rounded-md border border-gray-400 mt-2"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <h3 className="text-lg font-semibold font-mono mt-3">Username</h3>
          <input
            className="w-[40vw] px-5 py-2 text-lg font-mono rounded-md border border-gray-400 mt-2"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <h3 className="text-lg font-semibold font-mono mt-3">Email</h3>
          <input
            className="w-[40vw] px-5 py-2 text-lg font-mono rounded-md border border-gray-400 mt-2"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3 className="text-lg font-semibold font-mono mt-3">
            Contact Number
          </h3>
          <input
            className="w-[40vw] px-5 py-2 text-lg font-mono rounded-md border border-gray-400 mt-2"
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Enter your contact number"
            value={contactNumber}
            onChange={(e) => setContact(e.target.value)}
            required
          />
          <h3 className="text-lg font-semibold font-mono mt-3">Password</h3>
          <input
            className="w-[40vw] px-5 py-2 text-lg font-mono rounded-md border border-gray-400 mt-2"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="text-lg px-10 py-3 tracking-wide font-semibold text-white border bg-[#006570] font-mono rounded-full mt-12"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
