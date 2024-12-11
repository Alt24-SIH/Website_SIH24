// app/page.tsx
import NavBar from "@/components/nav-bar";
import ShootingStars from "@/components/shooting-stars";
// import GlobeNew from "@/components/GlobeNew";
// import Spline from '@splinetool/react-spline/next';
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto scrollbar-hidden">
      <ShootingStars />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]" />
      <NavBar />

      <main className="container mx-auto px-6 pt-32 pb-20 relative flex flex-col md:flex-row items-center text-center md:text-center md:items-start">
        {/* Text Section */}
        <div className="md:flex-1">
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
            href="http://127.0.0.1:8000/api/hello/"
            className="mt-6 inline-block rounded-full bg-white/10 px-8 py-3 text-sm font-medium text-gray-300 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Globe Section */}
        {/* <GlobeNew /> */}
        {/* Below div exists to split the text in two */}
        {/* <div className="md:-1 md:ml-8 mt-10 md:mt-0 w-full max-w-xl">
          
        </div> */}
      </main>
    </div>
  );
}
