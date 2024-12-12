import Image from "next/image";

export default function MaritimeMonitor() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl p-6 shadow-2xl">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <h2 className="text-white text-xl font-medium">Input</h2>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-blue-800 shadow-inner">
              <Image
                src="/input.jpg?height=270&width=480"
                alt="Input image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-white text-xl font-medium">Output</h2>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-blue-800 shadow-inner">
              <Image
                src="/output.jpg?height=270&width=480"
                alt="Output image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 rounded-lg p-6">
          <dl className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <dt className="text-zinc-400 font-medium">Target</dt>
              <dd className="text-white">Ship</dd>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <dt className="text-zinc-400 font-medium">Aerosol</dt>
              <dd className="text-white">Maritime</dd>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <dt className="text-zinc-400 font-medium">Humidity</dt>
              <dd className="text-white">Midlatitude Summer</dd>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <dt className="text-zinc-400 font-medium">Temperature</dt>
              <dd className="text-white">26° C</dd>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <dt className="text-zinc-400 font-medium">Model</dt>
              <dd className="text-white">Alt24 Vert1.o+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
