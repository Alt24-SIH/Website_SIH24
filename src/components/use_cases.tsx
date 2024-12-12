import Image from 'next/image';

export default function UseCases() {
  return (
    <div className="bg-black text-white px-8 py-12">
      {/* Top Section: Data Calibration, etc. */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { title: "Data Calibration", icon: "/icons/data-calibration.png", description: "Py6S" },
          { title: "De-Noising", icon: "/icons/de-noising.png", description: "Hybrid Spectral Denoising Transformer" },
          { title: "Anomaly Detection", icon: "/icons/anomaly-detection.png", description: "Using Modified GAN" },
          { title: "Target Detection", icon: "/icons/target-detection.png", description: "" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 text-center flex flex-col items-center"
          >
            <Image src={item.icon} alt={item.title} width={60} height={60} className="mb-4" />
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Use Cases Section */}
      <h2 className="text-2xl font-bold mb-8">Use cases</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Defence",
            image: "/images/defence.png",
            description: "Camouflage and hidden object detection, border surveillance and threat detection.",
            bgColor: "bg-blue-900",
          },
          {
            title: "Environmental",
            image: "/images/environmental.png",
            description: "Detection of oil spills in water bodies and early detection of forest fires.",
            bgColor: "bg-purple-900",
          },
          {
            title: "Mineral Exploration",
            image: "/images/mineral-exploration.png",
            description: "Mapping mineral deposits and mining areas and identifying geological formations.",
            bgColor: "bg-teal-900",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} rounded-lg overflow-hidden shadow-lg`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
