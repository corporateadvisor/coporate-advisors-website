import {
  Landmark,
  FileText,
  Users,
  FileCheck2,
  ShieldCheck,
  FileSignature,
  Briefcase,
  UserCog,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        <div className="border-2 border-[#231f20] rounded-md p-6 flex flex-col items-center bg-white">
          <div className="bg-[#231f20] rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <Landmark className="text-white w-10 h-10" />
          </div>
          <h3 className="text-[#575757] text-center text-lg font-medium font-inter">
            Company Formation & Incorporation
          </h3>
        </div>
        {/* Company Secretarial Services */}
        <div className="border-2 border-[#231f20] rounded-md p-6 flex flex-col items-center bg-white">
          <div className="bg-[#231f20] rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <FileText className="text-white w-10 h-10" />
          </div>
          <h3 className="text-[#575757] text-center text-lg font-medium font-inter">
            Company Secretarial Services
          </h3>
        </div>
        {/* Corporate Governance & Share Capital Assistance */}
        <div className="border-2 border-[#231f20] rounded-md p-6 flex flex-col items-center bg-white">
          <div className="bg-[#231f20] rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <Users className="text-white w-10 h-10" />
          </div>
          <h3 className="text-[#575757] text-center text-lg font-medium font-inter">
            Corporate Governance & Share Capital Assistance
          </h3>
        </div>
        <div className="border-2 border-[#231f20] rounded-md p-6 flex flex-col items-center bg-white">
          <div className="bg-[#231f20] rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <FileCheck2 className="text-white w-10 h-10" />
          </div>
          <h3 className="text-[#575757] text-center text-lg font-medium font-inter">
            Electronic Filing & Compliance Management{" "}
          </h3>
        </div>
        {/* Intellectual Property Protection */}
        <div className="border-2 border-[#379777] rounded-md p-6 flex flex-col items-center bg-white">
          <div className="bg-[#231f20] rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <ShieldCheck className="text-white w-10 h-10" />
          </div>
          <h3 className="text-[#575757] text-center text-lg font-medium font-inter">
            Intellectual Property Protection
          </h3>
        </div>
        {/* Corporate Contract Drafting & Review */}
        <div className="border-2 border-[#231f20] rounded-md p-6 flex flex-col items-center bg-white">
          <div className="bg-[#231f20] rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <FileSignature className="text-white w-10 h-10" />
          </div>
          <h3 className="text-[#575757] text-center text-lg font-medium font-inter">
            Corporate Contract Drafting & Review
          </h3>
        </div>
        {/* Legal Consultancy Services */}
        <div className="border-2 border-[#379777] rounded-md p-6 flex flex-col items-center bg-white">
          <div className="bg-[#231f20] rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <Briefcase className="text-white w-10 h-10" />
          </div>
          <h3 className="text-[#575757] text-center text-lg font-medium font-inter">
            Corporate Legal Consultantancy
          </h3>
        </div>
        <div className="border-2 border-[#231f20] rounded-md p-6 flex flex-col items-center bg-white">
          <div className="bg-[#231f20] rounded-full w-24 h-24 flex items-center justify-center mb-6">
            <UserCog className="text-white w-10 h-10" />
          </div>
          <h3 className="text-[#575757] text-center text-lg font-medium font-inter">
            Human Resource & Business Support Services
          </h3>
        </div>
      </div>
    </div>
  );
}
