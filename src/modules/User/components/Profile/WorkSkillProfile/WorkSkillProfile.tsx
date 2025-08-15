// components/WorkSkills.tsx


const WorkSkills = () => {
  return (
    <section className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-lg rounded-lg p-6 shadow">
      {/* Work */}
      <div className="work mb-8">
        <h1 className="text-xs uppercase text-gray-600 relative mb-6">
          work
          <span
            className="absolute bottom-0 right-0 h-[0.1rem] w-[88%] bg-[#333333]/60"
          ></span>
        </h1>

        <div className="primary relative mb-6">
          <h1 className="text-lg text-[#333333]/80 mb-2">Spotify New York</h1>
          <span
            className="absolute top-0 right-12 bg-[#f2eee9] text-[#fa6639] font-bold text-sm px-4 py-1 rounded-lg"
          >
            Primary
          </span>
          <p className="text-sm text-[#333333]/60 leading-6">
            170 William Street <br />
            New York, NY 10038-212-315-51
          </p>
        </div>

        <div className="secondary relative">
          <h1 className="text-lg text-[#333333]/80 mb-2">
            Metropolitan <br /> Museum
          </h1>
          <span
            className="absolute top-0 right-12 bg-[#f2eee9] text-[#fa6639] font-bold text-sm px-4 py-1 rounded-lg"
          >
            Secondary
          </span>
          <p className="text-sm text-[#333333]/60 leading-6">
            S34 E 65th Street <br />
            New York, NY 10651-78 156-187-60
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="skills">
        <h1 className="text-xs uppercase text-gray-600 relative mb-6">
          Skills
          <span
            className="absolute bottom-0 right-0 h-[0.1rem] w-[88%] bg-[#333333]/60"
          ></span>
        </h1>
        <ul>
          {["Android", "Web-Design", "UI/UX", "Video Editing"].map((skill, i) => (
            <li
              key={i}
              className="text-sm font-medium text-[#333333] relative pl-4"
              style={{
                lineHeight: '1.8rem',
                margin: '0.5rem 0',
              }}
            >
              {skill}
              <span
                className="absolute top-1/2 right-0 h-0.5"
                style={{
                  width: '50%',
                  backgroundColor: '#ffbc40',
                  transform: 'translateY(-50%)',
                  animation: `skills 8s linear infinite`,
                  animationDelay: `${-2 * i}s`,
                }}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkSkills;