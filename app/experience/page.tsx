import Link from "next/link"

export default function Experience() {
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
          <div className="text-gray-500 text-sm mb-2">samuel@portfolio:~/experience$</div>
          <div className="text-white mb-4">git log --oneline</div>

          <div className="space-y-8">
            <div className="border-l-2 border-green-400 pl-4">
              <div className="text-yellow-400 text-sm">2022 — Present</div>
              <h3 className="text-white text-lg">Senior Full Stack Developer</h3>
              <div className="text-blue-400 mb-2">Tech Company</div>
              <div className="text-gray-300 mb-3">
                Led development of enterprise applications using .NET, React, and Azure. Implemented CI/CD pipelines and
                containerized applications with Docker.
              </div>
              <div className="text-sm">
                <div className="text-gray-400 mb-1">Key achievements:</div>
                <div className="text-gray-300 space-y-1">
                  <div>• Improved application performance by 40%</div>
                  <div>• Led a team of 5 developers</div>
                  <div>• Implemented automated testing reducing bugs by 60%</div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Stack: .NET, React, TypeScript, Azure, Docker, PostgreSQL
              </div>
            </div>

            <div className="border-l-2 border-yellow-400 pl-4">
              <div className="text-yellow-400 text-sm">2020 — 2022</div>
              <h3 className="text-white text-lg">Full Stack Developer</h3>
              <div className="text-blue-400 mb-2">Software Agency</div>
              <div className="text-gray-300 mb-3">
                Developed web applications using Node.js, Express, and React. Worked with PostgreSQL and MongoDB
                databases.
              </div>
              <div className="text-sm">
                <div className="text-gray-400 mb-1">Key achievements:</div>
                <div className="text-gray-300 space-y-1">
                  <div>• Delivered 15+ client projects on time</div>
                  <div>• Reduced development time by 30% through reusable components</div>
                  <div>• Achieved 98% client satisfaction rate</div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Stack: Node.js, Express, React, PostgreSQL, MongoDB, Tailwind CSS
              </div>
            </div>

            <div className="border-l-2 border-blue-400 pl-4">
              <div className="text-yellow-400 text-sm">2018 — 2020</div>
              <h3 className="text-white text-lg">Junior Developer</h3>
              <div className="text-blue-400 mb-2">Tech Startup</div>
              <div className="text-gray-300 mb-3">
                Assisted in developing web applications using JavaScript and C#. Gained experience with SQL Server and
                frontend frameworks.
              </div>
              <div className="text-sm">
                <div className="text-gray-400 mb-1">Key achievements:</div>
                <div className="text-gray-300 space-y-1">
                  <div>• Contributed to 3 major product releases</div>
                  <div>• Learned 5+ new technologies</div>
                  <div>• Received 'Rising Star' award</div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">Stack: C#, JavaScript, SQL Server, HTML/CSS, Bootstrap</div>
            </div>
          </div>
        </div>

        {/* Terminal Prompt */}
        <div className="flex items-center">
          <span className="text-gray-500 text-sm">samuel@portfolio:~/experience$</span>
          <div className="ml-2 w-2 h-5 bg-green-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
