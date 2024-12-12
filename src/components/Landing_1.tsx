import Image from 'next/image';

export default function HyperspectralBanner() {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row items-center justify-between px-8 py-12">
      {/* Text Content */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-left">
          The complete software toolset for target detection in hyperspectral images
        </h1>
        <p className="text-left text-lg">
          Move beyond manual scripting and juggling separate tools, and discover the easier and faster way to achieve success in hyperspectral imaging.
        </p>
      </div>

      {/* Image Content */}
      <div className="mt-8 lg:mt-0 mr-[100px] ml-[100px] flex items-center">
        {/* Replace the src paths with your actual image paths */}
        <Image
          src="/Comps-1.png"
          alt="Hyperspectral Imaging Software"
          width={600}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
