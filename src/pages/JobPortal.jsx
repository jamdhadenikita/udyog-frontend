import React, { useState } from "react";
import VendorCard from "../components/VendorCard";
import { CiSearch } from "react-icons/ci";

const employmentData = [
  {
    id: "1",
    businessName: "JobBridge",
    contact: "+9871234560",
    description: "Connecting talent with top companies.",
    email: "jobbridge@employment.com",
    services: ["Job Placement", "Career Counseling"],
    ratings: 4.7,
  },
  {
    id: "2",
    businessName: "HireWell Co.",
    contact: "+8762345671",
    description: "Trusted hiring partner for businesses.",
    email: "hirewell@employment.com",
    services: ["Recruitment", "Talent Acquisition"],
    ratings: 4.6,
  },
  {
    id: "3",
    businessName: "CareerCraft",
    contact: "+7653456782",
    description: "Career development and job search assistance.",
    email: "careercraft@employment.com",
    services: ["Resume Writing", "Skill Assessment"],
    ratings: 4.8,
  },
  {
    id: "4",
    businessName: "StaffingPro",
    contact: "+6544567893",
    description: "Reliable staffing solutions for companies.",
    email: "staffingpro@employment.com",
    services: ["Temporary Staffing", "Contract Staffing"],
    ratings: 4.5,
  },
  {
    id: "5",
    businessName: "TalentLink",
    contact: "+5435678904",
    description: "Linking top talent with global opportunities.",
    email: "talentlink@employment.com",
    services: ["Executive Search", "International Placement"],
    ratings: 4.7,
  },
  {
    id: "6",
    businessName: "NextStep Careers",
    contact: "+4326789015",
    description: "Helping individuals take the next step in their career.",
    email: "nextstep@careers.com",
    services: ["Job Matching", "Career Advice"],
    ratings: 4.4,
  },
  {
    id: "7",
    businessName: "SkillUp Agency",
    contact: "+3217890126",
    description: "Upskilling and placement services.",
    email: "skillup@employment.com",
    services: ["Workshops", "Certification Programs"],
    ratings: 4.8,
  },
  {
    id: "8",
    businessName: "FlexiWork",
    contact: "+2108901237",
    description: "Focuses on flexible job opportunities.",
    email: "flexiwork@employment.com",
    services: ["Remote Work", "Freelance Jobs"],
    ratings: 4.6,
  },
  {
    id: "9",
    businessName: "WorkConnect",
    contact: "+1099012348",
    description: "Job connections for fresh graduates.",
    email: "workconnect@employment.com",
    services: ["Internships", "Entry-level Jobs"],
    ratings: 4.3,
  },
  {
    id: "10",
    businessName: "BrightFuture",
    contact: "+9980123459",
    description: "Building a bright future for job seekers.",
    email: "brightfuture@employment.com",
    services: ["Job Fairs", "Recruitment Drives"],
    ratings: 4.5,
  },
];

const JobPortal = () => {
  const [search, setSearch] = useState("");

  const filteredData = employmentData.filter((vendor) =>
    vendor.services.some((service) =>
      service.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <section className="bg-[#E0E5EC]">
      <div className="text-center p-8">
        <h1 className="text-3xl font-semibold tracking-wide">Find Vendors</h1>
      </div>
      {/* search bar */}
      <div className="flex items-center justify-center p-4">
        <div className="relative max-w-2xl w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg 
             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             placeholder-gray-400 bg-white"
            placeholder="Search vendors by business name or services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* cards section*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 p-10">
        {filteredData.length > 0 ? (
          filteredData.map((vendor) => {
            return <VendorCard key={vendor.id} vendor={vendor} />;
          })
        ) : (
          <p>No results found for "{search}"</p>
        )}
      </div>
    </section>
  );
};

export default JobPortal;
