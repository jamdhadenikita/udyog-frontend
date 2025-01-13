import React, { useState } from "react";
import VendorCard from "../components/VendorCard";
import { CiSearch } from "react-icons/ci";

const marketingData = [
  {
    id: "1",
    businessName: "MarketMinds",
    contact: "+3344556677",
    description: "Your go-to digital marketing partner.",
    email: "marketminds@marketing.com",
    services: ["SEO", "Social Media Management"],
    ratings: 4.7,
  },
  {
    id: "2",
    businessName: "AdBoosters",
    contact: "+4455667788",
    description: "Boost your brand with creative ad campaigns.",
    email: "adboosters@marketing.com",
    services: ["Online Ads", "Email Campaigns"],
    ratings: 4.5,
  },
  {
    id: "3",
    businessName: "BrandWave",
    contact: "+5566778899",
    description: "Helping businesses create lasting brands.",
    email: "brandwave@marketing.com",
    services: ["Brand Strategy", "Identity Design"],
    ratings: 4.8,
  },
  {
    id: "4",
    businessName: "CreativeSpark",
    contact: "+6677889900",
    description: "Specializes in creative marketing campaigns.",
    email: "creativespark@marketing.com",
    services: ["Content Creation", "Visual Campaigns"],
    ratings: 4.6,
  },
  {
    id: "5",
    businessName: "GrowthHacks Co.",
    contact: "+7788990011",
    description: "Growth hacking solutions for startups.",
    email: "growthhacks@marketing.com",
    services: ["Customer Acquisition", "Retargeting"],
    ratings: 4.7,
  },
  {
    id: "6",
    businessName: "ViralReach",
    contact: "+8899001122",
    description: "Making your brand go viral.",
    email: "viralreach@marketing.com",
    services: ["Social Media Campaigns", "Influencer Marketing"],
    ratings: 4.9,
  },
  {
    id: "7",
    businessName: "PixelPro Marketing",
    contact: "+9900112233",
    description: "Digital advertising and web marketing services.",
    email: "pixelpro@marketing.com",
    services: ["PPC Campaigns", "Web Analytics"],
    ratings: 4.4,
  },
  {
    id: "8",
    businessName: "OutreachPros",
    contact: "+1234567890",
    description: "Experts in outbound marketing strategies.",
    email: "outreachpros@marketing.com",
    services: ["Cold Emailing", "B2B Marketing"],
    ratings: 4.3,
  },
  {
    id: "9",
    businessName: "Engage360",
    contact: "+2345678901",
    description: "Comprehensive marketing automation solutions.",
    email: "engage360@marketing.com",
    services: ["Marketing Automation", "CRM Integration"],
    ratings: 4.5,
  },
  {
    id: "10",
    businessName: "AdStream Co.",
    contact: "+3456789012",
    description: "Digital advertising solutions tailored to your needs.",
    email: "adstream@marketing.com",
    services: ["Video Ads", "Programmatic Ads"],
    ratings: 4.6,
  },
];

const MarketingVendor = () => {
  const [search, setSearch] = useState("");

  const filteredData = marketingData.filter((vendor) =>
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

export default MarketingVendor;
