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
    Twitter: "",
    textColor: "#1F2937", 
    fontSize: "14px",
    bgColor: "#ffffff",
  });

  return (
    <div className="min-h-screen p-6 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Cardify Generator
        </h2>

        
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

       
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <CardForm
            formData={formData}
            setFormData={setFormData}
            cardType={cardType}
          />

          <div className="w-full flex flex-col items-center ">
            <div
              id="card-preview"
              className="p-6 rounded-xl shadow-lg border transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: formData.bgColor,
                color: formData.textColor,
                fontSize: formData.fontSize,
                width: cardType === "business" ? "410px" : "350px",
                height: cardType === "business" ? "290px" : "auto",
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
