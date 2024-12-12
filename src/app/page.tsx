import NavBar from "@/components/nav-bar";
// import ShootingStars from "@/components/shooting-stars";
import TechIcons from "@/components/techno_icons";
import Landing_1 from "@/components/Landing_1";
// import UseCases from "@/components/use_cases";
// import GlobeNew from "@/components/GlobeNew";
// import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
<div className="relative min-h-screen bg-black text-white overflow-y-auto scrollbar-hidden">
  {/* ShootingStars component in the complete background */}
  {/* <ShootingStars /> */}
  
  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] z-10" />

  <NavBar />

  <main className="container mx-auto pt-32 pb-20 relative flex flex-col items-center text-center z-20">
    {/* Text Section */}
    <div className="md:flex-1 pb-[75px] pt-[50px]">
      <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-1xl font-medium text-gray-300 backdrop-blur-sm mb-4">
        From Idea To Solution
      </div>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white space-y-4">
        <div>HyperSpectral Imaging Tool</div>
        <div className="text-gray-300 md:text-4xl">We provide a state of the art software</div>
        <div className="text-gray-400 md:text-4xl">for Target Detection by optimizing</div>
        <div className="text-gray-500 md:text-5xl">Anomaly Detection</div>
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
    </div>

  </main>
</div>
  );
}
