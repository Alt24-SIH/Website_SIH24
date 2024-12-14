import Image from "next/image";

export default function TechIcon() {
  return (
    <div className="mt-[100px] bg-blue-700 flex items-center justify-evenly h-20 w-full">
      {/* TensorFlow Icon */}
      <Image
        src="/Icon/Tensorflow.png"
        alt="TensorFlow"
        width={70}
        height={70}
      />

      {/* PyTorch Icon */}
      <Image src="/Icon/Pytorch.png" alt="PyTorch" width={40} height={40} />

      {/* Node.js Icon */}
      <Image src="/Icon/Node.png" alt="Node.js" width={40} height={40} />

      {/* React Icon */}
      <Image src="/Icon/React.png" alt="React" width={50} height={50} />

      {/* Matlab Icon */}
      <Image src="/Icon/Matlab.png" alt="React" width={40} height={40} />
 
    </div>
  );
}
