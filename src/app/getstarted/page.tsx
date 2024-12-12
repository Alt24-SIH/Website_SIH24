"use client";
import NavBar from "@/components/nav-bar";
import ShootingStars from "@/components/shooting-stars";

import { Upload } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

export default function UploadForm() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [formData, setFormData] = useState({
    //Form data
    target: "",
    aerosol: "",
    humidity: "",
    temperature: "",
    anomalyDetectionModel: "",
  });
  const router = useRouter();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      // Here you would typically handle the file upload to your server
      console.log("File(s) uploaded:", files);
      setIsUploaded(true);
    }
  };

  const handleBrowseClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      handleFileUpload(target.files);
    };
    input.click();
  };

  const handleGoClick = () => {
    router.push("/upload-success"); // Replace with your desired route
  };

  // const handleSelectChange = (id: string, value: string) => {
  //   setFormData(prevData => ({
  //     ...prevData,
  //     [id]: value
  //   }))
  // }
  // Handle input changes and update formData
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific form field
    }));
  };

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);  // You can handle the form submission here
  // };

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto scrollbar-hidden relative ">
      {/* Absolute Background with ShootingStars */}
      <div className="z-[-1]">
        <ShootingStars />
      </div>
      <NavBar />
      <Card className="max-w-6xl mx-auto m-[100px] relative z-10 !bg-gray opacity-70 backdrop-blur-sm">
        <CardHeader>
          <h1 className="text-2xl font-semibold mb-6">Upload Files</h1>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            {/* File Upload Area */}
            <div className="md:w-1/2">
              <div
                className={`border-2 border-dashed rounded-lg p-12 h-full flex flex-col items-center justify-center ${
                  isDragging
                    ? "border-blue-500 bg-blue-500/10"
                    : isUploaded
                    ? "border-green-500 bg-green-500/10"
                    : "border-gray-700"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload
                  className={`w-16 h-16 mb-4 ${
                    isUploaded ? "text-green-500" : "text-gray-400"
                  }`}
                />
                <p
                  className={`text-center ${
                    isUploaded ? "text-green-500" : "text-gray-400"
                  }`}
                >
                  {isUploaded ? (
                    "File(s) uploaded successfully!"
                  ) : (
                    <>
                      Drop files here or{" "}
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={handleBrowseClick}
                      >
                        browse
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="md:w-1/2 space-y-4">
              {/* Target Input */}
              <div className="mb-4">
                <label
                  htmlFor="target"
                  className="block text-sm font-medium pb-[5px]"
                >
                  Target
                </label>
                <input
                  type="text"
                  id="target"
                  name="target"
                  value={formData.target}
                  onChange={handleChange}
                  placeholder="Enter target value"
                  className="w-full p-2 border border-gray-300 rounded text-black"
                />
              </div>
              {/* Aerosol Input */}
              <div className="mb-4">
                <label
                  htmlFor="aerosol"
                  className="block text-sm font-medium pb-[5px]"
                >
                  Aerosol
                </label>
                <input
                  type="text"
                  id="aerosol"
                  name="aerosol"
                  value={formData.aerosol}
                  onChange={handleChange}
                  placeholder="Enter aerosol value"
                  className="w-full p-2 border border-gray-300 rounded text-black"
                />
              </div>

              {/* Humidity Input */}
              <div className="mb-4">
                <label
                  htmlFor="humidity"
                  className="block text-sm font-medium pb-[5px]"
                >
                  Humidity
                </label>
                <input
                  type="text"
                  id="humidity"
                  name="humidity"
                  value={formData.humidity}
                  onChange={handleChange}
                  placeholder="Enter humidity value"
                  className="w-full p-2 border border-gray-300 rounded text-black"
                />
              </div>

              {/* Temperature Input */}
              <div className="mb-4">
                <label
                  htmlFor="temperature"
                  className="block text-sm font-medium pb-[5px]"
                >
                  Temperature
                </label>
                <input
                  type="text"
                  id="temperature"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  placeholder="Enter temperature value"
                  className="w-full p-2 border border-gray-300 rounded text-black"
                />
              </div>

              {/* Anomaly Detection Model Input */}
              <div className="mb-4">
                <label
                  htmlFor="anomalyDetectionModel"
                  className="block text-sm font-medium pb-[5px]"
                >
                  Anomaly Detection Model
                </label>
                <input
                  type="text"
                  id="anomalyDetectionModel"
                  name="anomalyDetectionModel"
                  value={formData.anomalyDetectionModel}
                  onChange={handleChange}
                  placeholder="Enter anomaly detection model"
                  className="w-full p-2 border border-gray-300 rounded text-black"
                />
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">
                  Cancel
                </button>
                <button
                  onClick={handleGoClick}
                  disabled={!isUploaded}
                  className={`px-4 py-2 rounded-md ${
                    isUploaded
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-700 cursor-not-allowed"
                  }`}
                >
                  Go
                </button>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400 mt-6">
            Having problems?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Try this
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
