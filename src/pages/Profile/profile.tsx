import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className=" mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 text-center">
          {/* Background Circles */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500 rounded-full opacity-20"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-400 rounded-full opacity-20"></div>

          <div className="relative z-10">
            {/* Avatar */}
            <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white overflow-hidden">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32bbfc2b-5bca-40d1-8517-da78fd830f47.png"
                alt="Portrait of a young professional woman with wavy brown hair wearing purple attire against a lavender background"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-3xl font-bold">Nguyen Van A</h1>
            <p className="text-purple-100 mt-2">UI/UX Designer & Frontend Developer</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="bg-white rounded-b-2xl shadow-lg p-8 -mt-6 relative z-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Section */}
            <div>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed">
                Passionate UI/UX designer with 5+ years of experience creating beautiful and functional digital experiences. Specialized in user-centered design and frontend development with a focus on accessibility and performance.
              </p>

              <div className="mt-6">
                <h2 className="text-2xl font-bold text-purple-800 mb-4">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Bachelor of Design</h3>
                    <p className="text-purple-600">University of Art & Design</p>
                    <p className="text-gray-500 text-sm">2015 - 2019</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Web Development Bootcamp</h3>
                    <p className="text-purple-600">Tech Academy</p>
                    <p className="text-gray-500 text-sm">2020</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-purple-800 mb-4">Skills</h2>
                <div className="space-y-4">
                  {[
                    { name: 'UI/UX Design', level: 95 },
                    { name: 'HTML/CSS', level: 90 },
                    { name: 'JavaScript', level: 80 },
                    { name: 'React', level: 75 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-purple-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-purple-800 mb-4">Contact</h2>
                <div className="space-y-3">
                  {[
                    {
                      icon: (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      ),
                      text: 'contact@example.com',
                    },
                    {
                      icon: (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                      ),
                      text: '+1 (555) 123-4567',
                    },
                    {
                      icon: (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      ),
                      text: 'Hanoi, Vietnam',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                        {item.icon}
                      </div>
                      <span className="text-gray-600">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Gallery */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">Recent Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd73c258-c157-4c26-99f5-93c4390b1563.png',
                'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b0fd081a-3c6f-42fd-bcca-1a2576bdee5d.png',
                'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39f0b89a-8bb9-496a-96fc-035d07b6388e.png',
              ].map((src, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden h-40 bg-purple-50 hover:scale-105 transition duration-300"
                >
                  <img
                    src={src}
                    alt={`Portfolio image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;