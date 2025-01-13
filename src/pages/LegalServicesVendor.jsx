import React, { useState } from "react";
import VendorCard from "../components/VendorCard";
import { CiSearch } from "react-icons/ci";

const legalServicesData = [
  {
    id: "1",
    businessName: "LawExperts LLP",
    contact: "+9876543210",
    description: "Comprehensive legal services for businesses.",
    email: "lawexperts@legal.com",
    services: ["Corporate Law", "Contract Drafting"],
    ratings: 4.8,
  },
  {
    id: "2",
    businessName: "JusticeFirst",
    contact: "+8765432109",
    description: "Experts in criminal and civil cases.",
    email: "justicefirst@legal.com",
    services: ["Civil Litigation", "Criminal Defense"],
    ratings: 4.6,
  },
  {
    id: "3",
    businessName: "LegalEase Co.",
    contact: "+7654321098",
    description: "Affordable legal advice for startups.",
    email: "legalease@legal.com",
    services: ["Startup Legalities", "Taxation"],
    ratings: 4.7,
  },
  {
    id: "4",
    businessName: "TrustLaw Firm",
    contact: "+6543210987",
    description: "Specializes in family law and trusts.",
    email: "trustlaw@legal.com",
    services: ["Estate Planning", "Divorce Cases"],
    ratings: 4.5,
  },
  {
    id: "5",
    businessName: "IP Protect",
    contact: "+5432109876",
    description: "Intellectual property law experts.",
    email: "ipprotect@legal.com",
    services: ["Trademark Registration", "Patent Filing"],
    ratings: 4.8,
  },
  {
    id: "6",
    businessName: "RegulationsPro",
    contact: "+4321098765",
    description: "Legal compliance and regulatory assistance.",
    email: "regulationspro@legal.com",
    services: ["Regulatory Filings", "Compliance Audits"],
    ratings: 4.6,
  },
  {
    id: "7",
    businessName: "ContractMasters",
    contact: "+3210987654",
    description: "Drafting and reviewing all types of contracts.",
    email: "contractmasters@legal.com",
    services: ["Commercial Contracts", "NDAs"],
    ratings: 4.7,
  },
  {
    id: "8",
    businessName: "LitigateNow",
    contact: "+2109876543",
    description: "Litigation support for small businesses.",
    email: "litigatenow@legal.com",
    services: ["Court Representation", "Arbitration"],
    ratings: 4.4,
  },
  {
    id: "9",
    businessName: "CorporateShield",
    contact: "+1098765432",
    description: "Specialized in corporate legal solutions.",
    email: "corporateshield@legal.com",
    services: ["Business Structuring", "M&A Support"],
    ratings: 4.5,
  },
  {
    id: "10",
    businessName: "LegalAssist Co.",
    contact: "+9876123450",
    description: "Affordable legal advice for individuals.",
    email: "legalassist@legal.com",
    services: ["Legal Consultations", "Dispute Resolution"],
    ratings: 4.3,
  },
];

const LegalServicesVendor = () => {
  const [search, setSearch] = useState("");

  const filteredData = legalServicesData.filter((vendor) =>
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

export default LegalServicesVendor;
