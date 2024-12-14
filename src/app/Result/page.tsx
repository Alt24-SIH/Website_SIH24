import NavBar from "@/components/nav-bar";
import ShootingStars from "@/components/shooting-stars";
import TechIcons from "@/components/techno_icons";
import Landing_1 from "@/components/Landing_1";
import UseCases from "@/components/use_cases";
import Image from "next/image";
import Footer from "@/components/footer";

export default function MaritimeMonitor() {
  return (
    <div className="relative flex flex-col min-h-screen ">
      {/* Background Shooting Stars */}
      <div className="absolute inset-0 -z">
        <ShootingStars />
      </div>
      
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex-grow p-8 mt-[82px] relative z-20">
        <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl p-6 shadow-2xl shadow-lg glow mt-[5px] backdrop-blur-md opacity-70">
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Input Section */}
            <div className="space-y-2">
              <h2 className="text-white text-xl font-medium">Input</h2>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-blue-800 shadow-inner">
                <Image
                  src="/"
                  alt="Input image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-2">
              <h2 className="text-white text-xl font-medium">Output</h2>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-blue-800 shadow-inner">
                <Image
                  src="/"
                  alt="Output image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          {/* Metadata Section */}
          <div className="bg-zinc-800 rounded-lg p-6">
            <dl className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <dt className="text-zinc-400 font-medium">Aerosol</dt>
                <dd className="text-white"></dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <dt className="text-zinc-400 font-medium">Humidity</dt>
                <dd className="text-white"></dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <dt className="text-zinc-400 font-medium">Temperature</dt>
                <dd className="text-white"></dd>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <dt className="text-zinc-400 font-medium">Model</dt>
                <dd className="text-white"></dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
