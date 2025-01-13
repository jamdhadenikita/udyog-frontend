import React from "react";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const VendorCard = ({ vendor }) => {
  return (
    <div className="bg-[#e0b7b7] border border-gray-300 rounded-xl p-6">
      <div className="flex justify-between items-start bg-[#e0b7b7]">
        <h3 className="text-2xl bg-[#e0b7b7] font-bold font-mono tracking-wide text-gray-900">
          {vendor.businessName}
        </h3>
        <div className="flex items-center bg-[#e0b7b7]">
          {/* <Star className="h-5 w-5 text-yellow-400 fill-current" /> */}
          <span className="text-gray-600 text-lg bg-[#e0b7b7] font-mono">
            {vendor.ratings} ⭐
          </span>
        </div>
      </div>

      <p className="text-xl mt-2 text-gray-600 font-mono bg-[#e0b7b7]">
        {vendor.description}
      </p>

      <div className="mt-4 space-y-2 bg-[#e0b7b7]">
        <div className="flex items-center text-gray-600 bg-[#e0b7b7]">
          {/* <Phone className="h-4 w-4 mr-2" /> */}
          <FiPhone className="mr-2 text-lg bg-[#e0b7b7]" />
          <span className=" ml-2 tracking-wide bg-[#e0b7b7] text-lg font-mono">
            {vendor.contact}
          </span>
        </div>
        <div className="flex items-center text-gray-600 bg-[#e0b7b7]">
          {/* <Mail className="h-4 w-4 mr-2" /> */}
          <CiMail className="mr-2 text-2xl bg-[#e0b7b7]" />
          <span className="font-mono text-lg tracking-wide bg-[#e0b7b7]">
            {vendor.email}
          </span>
        </div>
      </div>

      <div className="mt-4 bg-[#e0b7b7]">
        <h4 className="text-sm font-semibold text-gray-900 bg-[#e0b7b7]">
          Services:
        </h4>
        <div className="mt-2 flex flex-wrap gap-2 bg-[#e0b7b7]">
          {vendor.services.map((service) => (
            <span
              key={service}
              className="px-3 py-1 font-mono text-md bg-[#006570] text-white border rounded-full"
            >
              {/* #FFB6B6 */}
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
