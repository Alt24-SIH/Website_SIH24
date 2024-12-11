import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-8">
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            HyperAI
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Software
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Applications
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Support
          </Link>
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-[2px] w-[200px] bg-indigo-900/30 rotate-[-45deg]"
              style={{
                top: `${i * 10}%`,
                left: `${i * 20 - 50}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto space-y-6">
          <p className="text-gray-400 text-lg">From Idea To Solution</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            HyperSpectral
            <br />
            Imaging Tool
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 mt-6">
            We provide a state of the art
            <br />
            software
          </p>
          <p className="text-xl md:text-2xl text-gray-400">
            for Target Detection by
            <br />
            optimizing
          </p>
          <p className="text-3xl md:text-4xl text-gray-300 font-semibold">
            Anomaly Detection
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
