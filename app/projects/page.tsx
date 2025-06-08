import Link from "next/link"

export default function Projects() {
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
          <div className="text-gray-500 text-sm mb-2">samuel@portfolio:~/projects$</div>
          <div className="text-white mb-4">ls -la</div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-4 bg-gray-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg">ecommerce-platform/</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline text-sm">
                    [demo]
                  </a>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 underline text-sm">
                    [source]
                  </a>
                </div>
              </div>
              <div className="text-gray-300 mb-3">
                A full-stack e-commerce platform with advanced features including real-time inventory, payment
                processing, and admin dashboard.
              </div>
              <div className="text-xs text-gray-500">Tech: .NET Core, React, SQL Server, Azure, Stripe</div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg">task-management-app/</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline text-sm">
                    [demo]
                  </a>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 underline text-sm">
                    [source]
                  </a>
                </div>
              </div>
              <div className="text-gray-300 mb-3">
                A collaborative task management application with real-time updates, team collaboration, and advanced
                reporting features.
              </div>
              <div className="text-xs text-gray-500">Tech: Next.js, TypeScript, MongoDB, Socket.io</div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg">api-gateway-service/</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline text-sm">
                    [demo]
                  </a>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 underline text-sm">
                    [source]
                  </a>
                </div>
              </div>
              <div className="text-gray-300 mb-3">
                A microservice API gateway with authentication, rate limiting, and service discovery for distributed
                systems.
              </div>
              <div className="text-xs text-gray-500">Tech: Node.js, Express, Docker, Redis</div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg">devops-dashboard/</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline text-sm">
                    [demo]
                  </a>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 underline text-sm">
                    [source]
                  </a>
                </div>
              </div>
              <div className="text-gray-300 mb-3">
                A comprehensive dashboard for monitoring CI/CD pipelines, deployments, and system metrics.
              </div>
              <div className="text-xs text-gray-500">Tech: React, TypeScript, Azure DevOps, Chart.js</div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg">cms-platform/</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline text-sm">
                    [demo]
                  </a>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 underline text-sm">
                    [source]
                  </a>
                </div>
              </div>
              <div className="text-gray-300 mb-3">
                A custom CMS with drag-and-drop interface, media management, and multi-language support.
              </div>
              <div className="text-xs text-gray-500">Tech: .NET, React, SQL Server, Azure Blob</div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg">realtime-chat-app/</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline text-sm">
                    [demo]
                  </a>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 underline text-sm">
                    [source]
                  </a>
                </div>
              </div>
              <div className="text-gray-300 mb-3">
                A real-time messaging application with file sharing, group chats, and end-to-end encryption.
              </div>
              <div className="text-xs text-gray-500">Tech: Node.js, Socket.io, React, MongoDB</div>
            </div>
          </div>
        </div>

        {/* Terminal Prompt */}
        <div className="flex items-center">
          <span className="text-gray-500 text-sm">samuel@portfolio:~/projects$</span>
          <div className="ml-2 w-2 h-5 bg-green-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
