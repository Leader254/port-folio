import Link from "next/link"

export default function Skills() {
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
          <div className="text-gray-500 text-sm mb-2">samuel@portfolio:~/skills$</div>
          <div className="text-white mb-4">cat tech_stack.txt</div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-4 bg-gray-900">
              <h3 className="text-yellow-400 mb-3"># Programming Languages</h3>
              <div className="text-gray-300 space-y-1">
                <div>• C# - Primary backend language, 5+ years</div>
                <div>• TypeScript - Type-safe JavaScript development</div>
                <div>• JavaScript - Frontend and Node.js development</div>
                <div>• Python - Scripting and automation</div>
                <div>• SQL - Database queries and optimization</div>
              </div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <h3 className="text-yellow-400 mb-3"># Frontend Technologies</h3>
              <div className="text-gray-300 space-y-1">
                <div>• React - Component-based UI development</div>
                <div>• Next.js - Full-stack React framework</div>
                <div>• Tailwind CSS - Utility-first CSS framework</div>
                <div>• HTML5 - Semantic markup</div>
                <div>• CSS3 - Modern styling and animations</div>
              </div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <h3 className="text-yellow-400 mb-3"># Backend Technologies</h3>
              <div className="text-gray-300 space-y-1">
                <div>• .NET - Enterprise application development</div>
                <div>• ASP.NET Core - Web API development</div>
                <div>• Node.js - JavaScript runtime for servers</div>
                <div>• Express.js - Minimal web framework</div>
                <div>• REST APIs - RESTful service design</div>
              </div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <h3 className="text-yellow-400 mb-3"># Databases</h3>
              <div className="text-gray-300 space-y-1">
                <div>• PostgreSQL - Advanced relational database</div>
                <div>• SQL Server - Microsoft database platform</div>
                <div>• MongoDB - Document-based NoSQL</div>
                <div>• Redis - In-memory data structure store</div>
                <div>• Azure SQL - Cloud database service</div>
              </div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <h3 className="text-yellow-400 mb-3"># Cloud & DevOps</h3>
              <div className="text-gray-300 space-y-1">
                <div>• Azure - Microsoft cloud platform</div>
                <div>• Docker - Containerization platform</div>
                <div>• Git - Version control system</div>
                <div>• GitHub Actions - CI/CD automation</div>
                <div>• Azure DevOps - Development lifecycle tools</div>
              </div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <h3 className="text-yellow-400 mb-3"># Development Tools</h3>
              <div className="text-gray-300 space-y-1">
                <div>• Visual Studio - Full-featured IDE</div>
                <div>• VS Code - Lightweight code editor</div>
                <div>• Postman - API testing and development</div>
                <div>• Figma - UI/UX design collaboration</div>
                <div>• Terminal - Command-line interface</div>
              </div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <h3 className="text-yellow-400 mb-3"># Methodologies & Practices</h3>
              <div className="text-gray-300 space-y-1">
                <div>• Agile/Scrum - Iterative development process</div>
                <div>• Test-Driven Development - Quality-first approach</div>
                <div>• Clean Architecture - Maintainable code structure</div>
                <div>• Microservices - Distributed system design</div>
                <div>• Code Reviews - Collaborative development</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-gray-500 text-sm mb-2">samuel@portfolio:~/skills$</div>
            <div className="text-white mb-4">grep -i "proficiency" skill_levels.txt</div>
            <div className="border border-gray-700 p-4 bg-gray-900">
              <div className="text-gray-300 space-y-2">
                <div>
                  <span className="text-green-400">Expert:</span> C#, .NET, React, SQL Server
                </div>
                <div>
                  <span className="text-yellow-400">Advanced:</span> TypeScript, Node.js, PostgreSQL, Azure
                </div>
                <div>
                  <span className="text-blue-400">Intermediate:</span> Python, MongoDB, Docker, DevOps
                </div>
                <div>
                  <span className="text-gray-400">Learning:</span> Kubernetes, GraphQL, Machine Learning
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Prompt */}
        <div className="flex items-center">
          <span className="text-gray-500 text-sm">samuel@portfolio:~/skills$</span>
          <div className="ml-2 w-2 h-5 bg-green-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
