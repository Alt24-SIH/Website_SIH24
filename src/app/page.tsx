import NavBar from "@/components/nav-bar";
import ShootingStars from "@/components/shooting-stars";
import TechIcons from "@/components/techno_icons";
import Landing_1 from "@/components/Landing_1";
import UseCases from "@/components/use_cases";
import Image from "next/image";
import Footer from "@/components/footer";
// import UseCases from "@/components/use_cases";
// import GlobeNew from "@/components/GlobeNew";
// import Spline from '@splinetool/react-spline/next';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface MusicCardProps {
  imagePath: string;
  title: string;
  // trackCount: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  imagePath,
  title,
  // trackCount,
}) => (
  <Card className="w-64 bg-white rounded-xl shadow-lg glow-effect border-none">
  <CardHeader className="pb-4 pt-4 px-4 rounded-tl-lg rounded-tr-lg flex-col items-start bg-[#000000] border-none">
    <h4 className="font-bold text-lg text-white">{title}</h4>
  </CardHeader>
  <CardContent className="overflow-visible py-2 px-4">
    <Image
      alt={`${title} cover`}
      className="object-cover rounded-xl"
      src={imagePath}
      width={240}
      height={120}
    />
  </CardContent>
</Card>
);

const cardData = [
  {
    imagePath: "/Icon/Data.png",
    title: "Data Calibration",
  },
  {
    imagePath: "/Icon/Data2.png",
    title: "De-Noising",
  },
  {
    imagePath: "/Icon/Data3.png",
    title: "Anomaly Detection",
  },
  {
    imagePath: "/Icon/Data4.png",
    title: "Target Detection",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-y-auto scrollbar-hidden">
      {/* ShootingStars component in the complete background */}
      <ShootingStars />

      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] z-10" />
      <NavBar />

      <main className="relative flex flex-col items-center text-center z-20 mt-[90px]">
        {/* Text Section */}
        <div className="w-full flex flex-col items-center py-16">
        <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-1xl font-medium text-gray-300 backdrop-blur-sm mb-4 shadow-white-glow">
  From Idea To Solution
</div>


          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white space-y-4">
  <div>HyperSpectral Imaging Tool</div>
  <div className="text-gray-400 md:text-4xl">
    We provide state-of-the-art software
  </div>
  <div className="text-gray-600 md:text-4xl">
    for Target Detection by optimizing
  </div>
  <div className="text-transparent bg-gradient-to-r from-purple-400 via-pink-700 to-red-500 bg-clip-text md:text-5xl font-bold leading-normal overflow-visible">
    Anomaly Detection
  </div>
</h1>


<a
  href="getstarted/"
  className="mt-[25px] inline-block rounded-full bg-yellow-500 px-8 py-3 text-sm font-medium text-black shadow-lg hover:shadow-yellow-400 transition-all hover:bg-yellow-600 glow-button"
>
  Get Started
</a>
        </div>

        {/* Vertical Stack for TechIcons and Landing_1 */}
        <div className="w-full">
          {/* TechIcons Section */}
          <div className="w-full">
            <TechIcons />
          </div>

          {/* Landing_1 Section */}
          <div className="w-full">
            <Landing_1 />
          </div>

          {/* Card Section */}
          <div className="w-full py-16 flex flex-wrap justify-around px-10">
            {cardData.map((card, index) => (
              <MusicCard key={index} {...card} />
            ))}
          </div>

          {/* UseCases Section */}
          <div className="w-full">
            <UseCases />
          </div>

          {/* Footer Section */}
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
