import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 underline text-sm">
            ← back to home
          </Link>
        </div>

        {/* Content */}
        <div className="mb-8">
          <div className="text-gray-500 text-sm mb-2">samuel@portfolio:~/about$</div>
          <div className="text-white mb-4">cat README.md</div>

          <div className="space-y-6">
            <div>
              <h1 className="text-xl text-white mb-4"># About Me</h1>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  I'm a Full Stack Developer passionate about crafting efficient, scalable applications. My journey in
                  software development started with curiosity about how things work under the hood, and it has evolved
                  into a career focused on building robust solutions.
                </p>
                <p>
                  With expertise in both frontend and backend technologies, I enjoy the full spectrum of development -
                  from designing user interfaces to architecting database schemas and optimizing server performance.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects,
                  or diving deep into system architecture patterns.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg text-white mb-3">## Current Focus</h2>
              <div className="text-gray-300 space-y-2">
                <div>• Building scalable web applications with .NET and React</div>
                <div>• Exploring cloud-native architectures on Azure</div>
                <div>• Contributing to open source projects</div>
                <div>• Learning advanced DevOps practices</div>
              </div>
            </div>

            <div>
              <h2 className="text-lg text-white mb-3">## Certifications</h2>
              <div className="text-gray-300 space-y-2">
                <div>• GitHub Certified: GitHub Foundations (Nov 2024)</div>
                <div>• Microsoft Certified: Azure AI Fundamentals (Jun 2024)</div>
                <div>• Foundational C# with Microsoft (Nov 2023)</div>
                <div>• Certificate of Competency SQL (May 2024)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Prompt */}
        <div className="flex items-center">
          <span className="text-gray-500 text-sm">samuel@portfolio:~/about$</span>
          <div className="ml-2 w-2 h-5 bg-green-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
