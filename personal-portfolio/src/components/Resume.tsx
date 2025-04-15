import React from 'react';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  duration: string;
  description: string;
}

const Resume: React.FC = () => {
  const education: EducationItem[] = [
    {
      id: 'edu1',
      degree: "Bachelor's in Computer Science",
      institution: "MVJ College of Engineering",
      duration: "2021 - 2025",
      description:
        "Completed Bachelor's degree in Computer Science Engineering with a strong foundation in programming, algorithms, databases. Gained hands-on experience through projects and collaborative software development. Specialized in areas like web development and machine learning through electives and practical applications.",
    },
    {
      id: 'edu2',
      degree: "Higher Secondary Education",
      institution: "Ved International School",
      duration: "2019 - 2021",
      description:
        "Focused on science and mathematics with computer science as a major subject.",
    },
  ];

  const experience: ExperienceItem[] = [
    {
      id: 'exp1',
      position: "AI-ML Enginner",
      company: "Rooman Technologies",
      duration: "Sept 2024 - March 2025",
      description:
        "Developing and maintaining Machine Learning Model using Python Collaborating with cross-functional teams to design and implement new Model for detecting transiction of onine payments. Optimizing applications for maximum speed and scalability.",
    },
    {
      id: 'exp2',
      position: "Web Development Intern",
      company: "CodSoft",
      duration: "Oct 2023 - Nov 2023",
      description:
        "In 4 Weeks of Internship, I assisted in developing user interfaces using HTML, CSS, and JavaScript. Worked on bug fixing and performance improvements in existing projects.",
    },
    // {
    //   id: 'exp3',
    //   position: "Freelance Web Developer",
    //   company: "Self-employed",
    //   duration: "2024 - 2025",
    //   description:
    //     "Designed and developed websites for small businesses and individuals. Implemented responsive designs and ensured cross-browser compatibility.",
    // },
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Resume</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic and professional journey so far
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </span>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                >
                  <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium mt-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.duration}</p>
                  <p className="text-gray-600 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                >
                  <h4 className="text-xl font-semibold text-gray-800">{exp.position}</h4>
                  <p className="text-blue-600 font-medium mt-1">{exp.company}</p>
                  <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            
            // href="/public/files/jigar.pdf"
            href="https://drive.google.com/file/d/131E9qNdJzzvEEo8FIRts8rFti18wAAjs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;