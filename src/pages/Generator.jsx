import { useState } from "react";
import CardForm from "../components/CardForm";
import BusinessCard from "../components/BusinessCard";
import IDCard from "../components/IDCard";
import DownloadButton from "../components/DownloadButton";

export default function Generator() {
  const [cardType, setCardType] = useState("business");

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    department: "",
    idNumber: "",
    photo: null,
    logo: null,
    gender: "",
    dob: "",
    bloodGroup: "",
    nationality: "",
    address: "",
    role: "",
    company: "",
    website: "",
    linkedin: "",
    textColor: "#1F2937",
    fontSize: "14px",
    bgColor: "#ffffff",
  });

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-slate-100 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Cardify Generator
        </h2>

        {/* Toggle Buttons */}
        <div className="mb-8 flex justify-center gap-4">
          {["business", "id"].map((type) => (
            <button
              key={type}
              onClick={() => setCardType(type)}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition duration-200 ${
                cardType === type
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {type === "business" ? "Business Card" : "ID Card"}
            </button>
          ))}
        </div>

        {/* Grid: Form & Preview Side-by-Side */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Form */}
          <CardForm
            formData={formData}
            setFormData={setFormData}
            cardType={cardType}
          />

          {/* Right: Card Preview */}
          <div className="w-full">
            <div
              id="card-preview"
              className="bg-white p-6 rounded-xl shadow-lg"
              style={{
                backgroundColor: formData.bgColor,
                color: formData.textColor,
                fontSize: formData.fontSize,
              }}
            >
              {cardType === "business" ? (
                <BusinessCard data={formData} />
              ) : (
                <IDCard data={formData} />
              )}
            </div>

            <div className="mt-4 text-center">
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
