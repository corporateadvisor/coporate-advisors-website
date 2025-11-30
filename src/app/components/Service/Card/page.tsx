'use client';

import {
  Landmark,
  FileText,
  Users,
  FileCheck2,
  ShieldCheck,
  FileSignature,
  Briefcase,
  UserCog,
  Building,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  borderColor: string;
  sectionId: string;
}

const ServiceCard = ({ icon, title, borderColor, sectionId }: ServiceCardProps) => {

  const handleClick = () => {
    // Scroll to section on the same page
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div 
      className={`border-2 ${borderColor} rounded-md p-6 flex flex-col items-center bg-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105`}
      onClick={handleClick}
    >
      <div className="bg-[#231f20] rounded-full w-24 h-24 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-[#575757] text-center text-lg font-medium font-inter">
        {title}
      </h3>
    </div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      id: "company-formation",
      icon: <Landmark className="text-white w-10 h-10" />,
      title: "Company Formation & Incorporation",
      borderColor: "border-[#231f20]"
    },
    {
      id: "company-secretarial",
      icon: <FileText className="text-white w-10 h-10" />,
      title: "Company Secretarial Services",
      borderColor: "border-[#231f20]"
    },
    {
      id: "corporate-governance",
      icon: <Users className="text-white w-10 h-10" />,
      title: "Corporate Governance & Share Capital Assistance",
      borderColor: "border-[#231f20]"
    },
    {
      id: "electronic-filing",
      icon: <FileCheck2 className="text-white w-10 h-10" />,
      title: "Electronic Filing & Compliance Management",
      borderColor: "border-[#231f20]"
    },
    {
      id: "intellectual-property",
      icon: <ShieldCheck className="text-white w-10 h-10" />,
      title: "Intellectual Property Protection",
      borderColor: "border-[#379777]"
    },
    {
      id: "corporate-contract",
      icon: <FileSignature className="text-white w-10 h-10" />,
      title: "Corporate Contract Drafting & Review",
      borderColor: "border-[#231f20]"
    },
    {
      id: "legal-consultancy",
      icon: <Briefcase className="text-white w-10 h-10" />,
      title: "Corporate Legal Consultancy",
      borderColor: "border-[#379777]"
    },
    {
      id: "human-resource",
      icon: <UserCog className="text-white w-10 h-10" />,
      title: "Human Resource & Business Support Services",
      borderColor: "border-[#231f20]"
    },
    {
      id: "uae-business",
      icon: <Building className="text-white w-10 h-10" />,
      title: "UAE Business Setup Services",
      borderColor: "border-[#379777]"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            borderColor={service.borderColor}
            sectionId={service.id}
          />
        ))}
      </div>
    </div>
  );
}