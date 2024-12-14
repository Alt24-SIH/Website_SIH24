import { Chatbot } from "@/components/component/chatbot";
import NavBar from "@/components/nav-bar";
import ShootingStars from "@/components/shooting-stars";
import TechIcons from "@/components/techno_icons";
import Landing_1 from "@/components/Landing_1";
import UseCases from "@/components/use_cases";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center h-screen w-full bg-black">
      {/* Shooting stars background */}
      <div className="absolute inset-0 -z">
        <ShootingStars />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] -z-10" />

      {/* Transparent NavBar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="relative z-0 w-full mt-20"> {/* Added spacing to avoid overlapping */}
        <Chatbot />
        <div className="w-full mt-[64px]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
