import Link from "next/link"

export default function Contact() {
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
          <div className="text-gray-500 text-sm mb-2">samuel@portfolio:~/contact$</div>
          <div className="text-white mb-4">cat contact_info.txt</div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-4 bg-gray-900">
              <h3 className="text-white text-lg mb-4"># Get In Touch</h3>
              <div className="text-gray-300 mb-6">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology. Feel free to reach out!
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-yellow-400">Email:</span>{" "}
                  <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 underline">
                    your.email@example.com
                  </a>
                </div>

                <div>
                  <span className="text-yellow-400">GitHub:</span>{" "}
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
                  <span className="text-yellow-400">LinkedIn:</span>{" "}
                  <a
                    href="https://linkedin.com/in/samuel-gatheru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    linkedin.com/in/samuel-gatheru
                  </a>
                </div>

                <div>
                  <span className="text-yellow-400">Location:</span>{" "}
                  <span className="text-gray-300">Nairobi, Kenya</span>
                </div>

                <div>
                  <span className="text-yellow-400">Status:</span>{" "}
                  <span className="text-green-400">Available for hire</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <h3 className="text-white text-lg mb-4"># PGP Public Key</h3>
              <div className="text-xs text-gray-400 mb-2">For secure communication (optional)</div>
              <div className="text-gray-500 text-xs font-mono">
                -----BEGIN PGP PUBLIC KEY BLOCK-----
                <br />
                [Your PGP public key would go here]
                <br />
                -----END PGP PUBLIC KEY BLOCK-----
              </div>
            </div>

            <div className="border border-gray-700 p-4 bg-gray-900">
              <h3 className="text-white text-lg mb-4"># Response Time</h3>
              <div className="text-gray-300 space-y-2">
                <div>• Email: Usually within 24 hours</div>
                <div>• LinkedIn: Within 24 hours</div>
                <div>• GitHub issues: Best effort basis</div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Prompt */}
        <div className="flex items-center">
          <span className="text-gray-500 text-sm">samuel@portfolio:~/contact$</span>
          <div className="ml-2 w-2 h-5 bg-green-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
