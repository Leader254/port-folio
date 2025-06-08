import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="mb-8">
          <div className="text-gray-500 text-sm mb-2">samuel@portfolio:~$</div>
          <div className="text-2xl mb-4">
            <span className="text-white">Samuel</span>
          </div>
          <div className="border-l-2 border-green-400 pl-4 mb-6">
            <div className="text-xl text-white mb-2">Samuel</div>
            <div className="text-green-400">Full Stack Developer</div>
            <div className="text-gray-400 text-sm mt-2">Building robust applications with modern technologies</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <div className="text-gray-500 text-sm mb-2">samuel@portfolio:~$</div>
          <div className="text-white mb-4">ls -la</div>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-gray-500">drwxr-xr-x</span>
              <span className="text-blue-400">.</span>
              <Link href="/about" className="text-green-400 hover:text-green-300 underline">
                about/
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">drwxr-xr-x</span>
              <span className="text-blue-400">.</span>
              <Link href="/experience" className="text-green-400 hover:text-green-300 underline">
                experience/
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">drwxr-xr-x</span>
              <span className="text-blue-400">.</span>
              <Link href="/projects" className="text-green-400 hover:text-green-300 underline">
                projects/
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">drwxr-xr-x</span>
              <span className="text-blue-400">.</span>
              <Link href="/skills" className="text-green-400 hover:text-green-300 underline">
                skills/
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">drwxr-xr-x</span>
              <span className="text-blue-400">.</span>
              <Link href="/contact" className="text-green-400 hover:text-green-300 underline">
                contact/
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">-rw-r--r--</span>
              <span className="text-blue-400">.</span>
              <a
                // href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                resume.pdf
              </a>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="mb-8">
          <div className="text-gray-500 text-sm mb-2">samuel@portfolio:~$</div>
          <div className="text-white mb-4">cat quick_info.txt</div>
          <div className="border border-gray-700 p-4 bg-gray-900">
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-yellow-400">Location:</span> Nairobi, Kenya
              </div>
              <div>
                <span className="text-yellow-400">Status:</span> Available for hire
              </div>
              <div>
                <span className="text-yellow-400">Languages:</span> C#, TypeScript, JavaScript
              </div>
              <div>
                <span className="text-yellow-400">Frameworks:</span> .NET, React, Next.js, Node.js
              </div>
              <div>
                <span className="text-yellow-400">Databases:</span> PostgreSQL, SQL Server, MongoDB
              </div>
              <div>
                <span className="text-yellow-400">Cloud:</span> Azure, Docker
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8">
          <div className="text-gray-500 text-sm mb-2">samuel@portfolio:~$</div>
          <div className="text-white mb-4">cat social_links.txt</div>
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-gray-400">GitHub:</span>{" "}
              <a
                href="https://github.com/Leader254"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                github.com/Leader254
              </a>
            </div>
            <div>
              <span className="text-gray-400">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/samuel-gatheru/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                linkedin.com/in/samuel-gatheru
              </a>
            </div>
            <div>
              <span className="text-gray-400">Email:</span>{" "}
              <a href="mailto:samuelwachira219@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                samuelwachira219@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Terminal Prompt */}
        <div className="flex items-center">
          <span className="text-gray-500 text-sm">samuel@portfolio:~$</span>
          <div className="ml-2 w-2 h-5 bg-green-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
