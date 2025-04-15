const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 70 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'Database (SQL/NoSQL)', level: 70 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              I am a passionate software developer specializing in web development. With a strong foundation in computer science
              and a keen eye for design, I create efficient and user-friendly applications.
            </p>
            <p className="text-gray-600 mb-4">
              My journey in technology began during my undergraduate studies, where I developed a fascination
              for solving complex problems through code. Since then, I've been continuously learning and
              improving my skills to stay current with the latest technologies.
            </p>
            <p className="text-gray-600">
              I believe in writing clean, maintainable code and focusing on creating applications
              that provide real value to users. When I'm not coding, you'll find me exploring new
              technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
