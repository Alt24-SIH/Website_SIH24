import Link from "next/link"
import Image from "next/image"

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/SIH.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>

          <div className="hidden md:flex space-x-12">
            {[
              ["Get Started", "/getstarted"],
              ["HyperAI", "/hyperai"],
              ["Software", "/timeline"],
              ["Applications", "/sponsors"],
              ["Support", "/team"],
              ["Home", "/"],
            ].map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

