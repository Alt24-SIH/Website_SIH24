import Image from 'next/image';

export default function UseCases() {
  return (
    <div className=" text-white px-8 py-12">
      {/* Use Cases Section */}
      <h2 className="text-5xl font-bold mb-8 mt-[0px] mb-[50px] bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 text-white bg-clip-text p-4 rounded-lg">
        Use Cases
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center mb-[30px]">
        {[
          {
            title: "Defence",
            image: "/Use_Cases/Use_1.png",
            description: "Camouflage and hidden object detection, border surveillance and threat detection.",
            bgColor: "bg-blue-900",
          },
          {
            title: "Environmental",
            image: "/Use_Cases/Use_2.png",
            description: "Detection of oil spills in water bodies and early detection of forest fires.",
            bgColor: "bg-purple-900",
          },
          {
            title: "Mineral Exploration",
            image: "/Use_Cases/Use_3.png",
            description: "Mapping mineral deposits and mining areas and identifying geological formations.",
            bgColor: "bg-teal-900",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} rounded-lg overflow-hidden shadow-lg w-[400px]`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3> {/* Updated font size */}
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
