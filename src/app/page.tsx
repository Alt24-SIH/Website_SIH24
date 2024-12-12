import NavBar from "@/components/nav-bar";
// import ShootingStars from "@/components/shooting-stars";
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
  trackCount: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  imagePath,
  title,
  trackCount,
}) => (
  <Card className="w-64 bg-[#Ffc0cb]">
    <CardHeader className="pb-2 pt-2  px-4 rounded-tl-lg rounded-tr-lg flex-col items-start bg-[#000000]">
      <small className="text-muted-foreground">{trackCount}</small>
      <h4 className="font-bold text-lg">{title}</h4>
    </CardHeader>
    <CardContent className="overflow-visible py-2">
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
    imagePath: "/Icon/data-calibration.png",
    title: "Data Calibration",
    trackCount: "Py6S",
  },
  {
    imagePath: "/images/backend-beats.jpg",
    title: "Backend Beats",
    trackCount: 15,
  },
  {
    imagePath: "/Icon/Anomaly_detection.png",
    title: "Anomaly Detection",
    trackCount: "Using Modified GAN",
  },
  {
    imagePath: "/Icon/Target_detection.png",
    title: "Target Detection",
    trackCount: "    ",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-y-auto scrollbar-hidden">
      {/* ShootingStars component in the complete background */}
      {/* <ShootingStars /> */}

      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] z-10" />

      <NavBar />

      <main className="container mx-auto pt-32 relative flex flex-col items-center text-center z-20">
        {/* Text Section */}
        <div className="md:flex-1 pb-[75px] pt-[50px]">
          <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-1xl font-medium text-gray-300 backdrop-blur-sm mb-4">
            From Idea To Solution
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white space-y-4">
            <div>HyperSpectral Imaging Tool</div>
            <div className="text-gray-300 md:text-4xl">
              We provide a state of the art software
            </div>
            <div className="text-gray-400 md:text-4xl">
              for Target Detection by optimizing
            </div>
            <div className="text-gray-c500 md:text-5xl">Anomaly Detection</div>
          </h1>

          <a
            href="getstarted/"
            className="mt-6 inline-block rounded-full bg-white/10 px-8 py-3 text-sm font-medium text-gray-300 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Vertical Stack for TechIcons and Landing_1 */}
        <div className="flex flex-col w-full mt-10">
          {/* TechIcons Section */}
          <div>
            <TechIcons />
          </div>

          {/* Landing_1 Section */}
          <div className="h-96">
            <Landing_1 />
          </div>

          <div className="bg-black pt-[100px] pb-[100px] flex flex-wrap justify-around  pl-[40px] pr-[40px]">
            {cardData.map((card, index) => (
              <MusicCard key={index} {...card} />
            ))}
          </div>
          <div>
            <UseCases />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
