import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };
  return (
    <section id="contact" className="mt-10 w-full min-h-screen p-10">
      <div className="text-center">
        <h1 className="text-5xl font-semibold font-mono">Get in touch</h1>
        <h3 className="text-lg font-mono mt-2">
          We'll get back to you within 24 hours.
        </h3>
      </div>
      <div className="mt-4">
        <form
          onSubmit={handleContactSubmit}
          className="flex flex-col items-center justify-center"
        >
          <h3 className="text-lg font-semibold font-mono">Full Name</h3>
          <input
            className="w-[40vw] px-5 py-2 text-lg font-mono rounded-md border border-gray-400 mt-2"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <h3 className="text-lg font-semibold font-mono mt-3">Email</h3>
          <input
            className="w-[40vw] px-5 py-2 text-lg font-mono rounded-md border border-gray-400 mt-2"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <h3 className="text-lg font-semibold font-mono mt-3">Message</h3>
          <textarea
            className="w-[40vw] px-5 py-2 text-lg font-mono rounded-md border border-gray-400 mt-2"
            rows="4"
            placeholder="Message Us"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <button className="text-xl px-10 py-3 tracking-wide font-semibold text-white border bg-[#006570] font-mono rounded-full mt-10">
            Message Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
