const Projects = () => {
  const projects = [
    {
      id: 'project1',
      title: 'E-Commerce based Motorbike showroom Website',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, cart functionality, and payment integration for motorbike showroom located in Gujarat.',
      technologies: ['HTML', 'CSS', 'Javascript'],
      image: '/images/project1.png',
      liveUrl: 'https://project1.example.com',
      githubUrl: 'https://github.com/Jigarbarad/Shree-Divya-Shakti-Motors',
      featured: true,
    },
    {
      id: 'project2',
      title: 'Sports Academy Website',
      description: 'A responsive Sports acdemy web application with better user experience and intractive interface. created using HTML, CSS, Javascript',
      technologies: ['HTML', 'CSS', 'Javascript'],
      image: '/images/project2.png',
      liveUrl: 'https://project2.example.com',
      githubUrl: 'https://github.com/Jigarbarad/HR-Sportzz',
      featured: true,
    },
    {
      id: 'project3',
      title: 'HR Sportzz Website',
      description: 'A weather application for HR Sportzz provides great practice sessions and big cricket ground with more facilities which is located in Bangalore',
      technologies: ['JavaScript', 'Typescript', 'CSS', 'ReactJs'],
      image: '/images/project4.png',
      liveUrl: 'https://project3.example.com',
      githubUrl: 'https://github.com/Jigarbarad/Cricket-Academy-Webpage',
      featured: false,
    },
    {
      id: 'project4',
      title: 'Contact Us Page',
      description: 'A Contact us Page for any website and for personal portfolio website to showcase get in touch with Admin, This page is also connected with EmailJS so that the message of user reaches to Admin.',
      technologies: ['HTML', 'CSS', 'Javascript','EmailJs'],
      image: '/images/project3.png',
      liveUrl: 'https://project4.example.com',
      githubUrl: 'https://github.com/Jigarbarad/Contact_Us',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-56 bg-gray-300 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={`${project.id}-tech-${index}`}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Jigarbarad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
