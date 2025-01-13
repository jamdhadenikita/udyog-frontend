import React, { useState } from "react";
// import hardware from "../assets/hardware.png";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Category = () => {
  const [selectedTab, setSelectedTab] = useState("hardware");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const selectedColor = {
    backgroundColor: "#FFB6B6",
    color: "black",
  };

  const defaultColor = {
    backgroundColor: "#dfd9d9",
    color: "black",
  };

  const images = {
    hardware: "/hardware.png",
    equipments: "/equipments.png",
    marketing: "/marketing.png",
    legal: "/legal.png",
    hiring: "/hiring.png",
  };

  return (
    <section
      id="category"
      className="border border-gray-500 w-[94vw] min-h-screen rounded-3xl mt-20 ml-2"
    >
      <div className="p-10 flex gap-2 mt-3">
        <button
          className="text-xl font-medium tracking-tight font-sans px-6 py-4 rounded-full hover:bg-[#bdb7b7]"
          onClick={() => {
            handleTabClick("hardware");
          }}
          style={selectedTab === "hardware" ? selectedColor : defaultColor}
        >
          H/W & Elec.
        </button>
        <button
          className="text-xl font-medium tracking-tight font-sans px-6 py-4 rounded-full hover:bg-[#bdb7b7]"
          onClick={() => {
            handleTabClick("equipments");
          }}
          style={selectedTab === "equipments" ? selectedColor : defaultColor}
        >
          Office Equipments
        </button>
        <button
          className="text-xl font-medium tracking-tight font-sans px-6 py-4 rounded-full hover:bg-[#bdb7b7]"
          onClick={() => {
            handleTabClick("marketing");
          }}
          style={selectedTab === "marketing" ? selectedColor : defaultColor}
        >
          Marketing
        </button>
        <button
          className="text-xl font-medium tracking-tight font-sans px-6 py-4 rounded-full hover:bg-[#bdb7b7]"
          onClick={() => {
            handleTabClick("legal");
          }}
          style={selectedTab === "legal" ? selectedColor : defaultColor}
        >
          Legal Services
        </button>
        <button
          className="text-xl font-medium tracking-tight font-sans px-6 py-4 rounded-full hover:bg-[#bdb7b7]"
          onClick={() => {
            handleTabClick("hiring");
          }}
          style={selectedTab === "hiring" ? selectedColor : defaultColor}
        >
          Hiring Portal
        </button>
      </div>
      <div className="flex">
        <div className="w-[1/2] px-16 py-10">
          <div className="w-[44vw] h-[65vh]">
            <img
              className="w-full h-full bg-cover rounded-3xl"
              src={images[selectedTab]}
              alt={selectedTab}
            />
          </div>
        </div>
        <div className="w-[1/2] py-28">
          {selectedTab === "hardware" && (
            <>
              <h1 className="text-5xl font-mono font-semibold">
                Hardware & Electronics
              </h1>
              <div className="ml-6">
                <p className="text-xl mt-6 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Streamline campaign management
                </p>
                <p className="text-xl mt-2 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Enhance creative production
                </p>
                <p className="text-xl mt-2 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Manage events and editorial calendars
                </p>
              </div>
              <Link to="/vendors/hardware&electronics">
                <button className="mt-6 px-7 py-4 text-xl font-semibold rounded-full border border-gray-700 hover-transform">
                  Explore Hardware
                </button>
              </Link>
            </>
          )}
          {selectedTab === "equipments" && (
            <>
              <h1 className="text-5xl font-mono font-semibold">
                Office Equipments
              </h1>
              <div className="ml-6">
                <p className="text-xl mt-6 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Efficient office tools and resources
                </p>
                <p className="text-xl mt-2 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Streamline workflow management
                </p>
                <p className="text-xl mt-2 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Manage events and editorial calendars
                </p>
              </div>
              <Link to="/vendors/equipment">
                <button className="mt-6 px-7 py-4 text-xl font-semibold rounded-full border border-gray-700 hover-transform">
                  Explore Office Equipments
                </button>
              </Link>
            </>
          )}
          {selectedTab === "marketing" && (
            <>
              <h1 className="text-5xl font-mono font-semibold">Marketing</h1>
              <div className="ml-6">
                <p className="text-xl mt-6 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Boost your brand presence
                </p>
                <p className="text-xl mt-2 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Optimize digital marketing strategies
                </p>
                <p className="text-xl mt-2 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Manage events and editorial calendars
                </p>
              </div>
              <Link to="/vendors/marketing">
                <button className="mt-6 px-7 py-4 text-xl font-semibold rounded-full border border-gray-700 hover-transform">
                  Explore Marketing
                </button>
              </Link>
            </>
          )}
          {selectedTab === "legal" && (
            <>
              <h1 className="text-5xl font-mono font-semibold">
                Legal Services
              </h1>
              <div className="ml-6">
                <p className="text-xl mt-6 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Protect your business
                </p>
                <p className="text-xl mt-2 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Ensure legal compliance and regulations
                </p>
                <p className="text-xl mt-2 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Manage events and editorial calendars
                </p>
              </div>
              <Link to="/vendors/legalservices">
                <button className="mt-6 px-7 py-4 text-xl font-semibold rounded-full border border-gray-700 hover-transform">
                  Explore Legal Services
                </button>
              </Link>
            </>
          )}
          {selectedTab === "hiring" && (
            <>
              <h1 className="text-5xl font-mono font-semibold">
                Hiring Portal
              </h1>
              <div className="ml-6">
                <p className="text-xl mt-6 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Find the best talent
                </p>
                <p className="text-xl mt-2 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Streamline recruitment process
                </p>
                <p className="text-xl mt-2 flex items-center gap-3 font-mono">
                  <span>
                    <IoIosArrowDropright />
                  </span>
                  Manage events and editorial calendars
                </p>
              </div>
              <Link to="/vendors/jobportal">
                <button className="mt-6 px-7 py-4 text-xl font-semibold rounded-full border border-gray-700 hover-transform">
                  Explore Hiring Portal
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;
