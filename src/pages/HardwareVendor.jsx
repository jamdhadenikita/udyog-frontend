import React, { useState } from "react";
import VendorCard from "../components/VendorCard";
import { CiSearch } from "react-icons/ci";

const hardwareData = [
  {
    id: "1",
    businessName: "OfficePro",
    contact: "+0987654321",
    description: "Specialist in office furniture and equipment.",
    email: "officepro@equipment.com",
    services: ["Office Desks", "Chairs", "Storage"],
    ratings: 4.6,
  },
  {
    id: "2",
    businessName: "Stationery Supplies Inc.",
    contact: "+1122445566",
    description: "All your office stationery needs in one place.",
    email: "stationery@supplies.com",
    services: ["Notebooks", "Pens", "Printers"],
    ratings: 4.3,
  },
  {
    id: "3",
    businessName: "TechEquip Solutions",
    contact: "+2233445566",
    description: "Provider of office tech equipment.",
    email: "techequip@solutions.com",
    services: ["Printers", "Scanners", "Projectors"],
    ratings: 4.7,
  },
  {
    id: "4",
    businessName: "FurnitureMart",
    contact: "+3344556677",
    description: "Affordable office furniture.",
    email: "furniture@mart.com",
    services: ["Ergonomic Chairs", "Adjustable Desks"],
    ratings: 4.5,
  },
  {
    id: "5",
    businessName: "OfficeSetup Co.",
    contact: "+4455667788",
    description: "Complete office setup solutions.",
    email: "officesetup@co.com",
    services: ["Office Layout", "Equipment Installation"],
    ratings: 4.4,
  },
  {
    id: "6",
    businessName: "WorkSpace Essentials",
    contact: "+5566778899",
    description: "Modern office essentials supplier.",
    email: "workspace@essentials.com",
    services: ["Modular Furniture", "IT Supplies"],
    ratings: 4.8,
  },
  {
    id: "7",
    businessName: "Organized Office",
    contact: "+6677889900",
    description: "Tools to organize your workspace.",
    email: "organized@office.com",
    services: ["Storage Solutions", "Filing Cabinets"],
    ratings: 4.2,
  },
  {
    id: "8",
    businessName: "SupplyHub",
    contact: "+7788990011",
    description: "Everything for your office under one roof.",
    email: "supplyhub@office.com",
    services: ["Bulk Stationery", "Office Electronics"],
    ratings: 4.1,
  },
  {
    id: "9",
    businessName: "Professional Interiors",
    contact: "+8899001122",
    description: "Custom-designed office interiors.",
    email: "prointeriors@office.com",
    services: ["Interior Design", "Custom Furniture"],
    ratings: 4.5,
  },
  {
    id: "10",
    businessName: "FastOffice Supplies",
    contact: "+9900112233",
    description: "Quick and reliable office supplies.",
    email: "fastoffice@supplies.com",
    services: ["Stationery", "Electronics"],
    ratings: 4.3,
  },
];

const HardwareVendor = () => {
  const [search, setSearch] = useState("");

  const filteredData = hardwareData.filter((vendor) =>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
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

export default HardwareVendor;
{
  /* <div className="grid grid-cols-3 gap-8 p-10">
  {hardwareData.map((vendor) => {
    return <VendorCard key={vendor.id} vendor={vendor} />;
  })}
</div>; */
}
