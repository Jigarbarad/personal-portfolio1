interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const handleCTAClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 md:pt-36 pb-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Jigar Barad</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Web Developer & UI/UX Enthusiast
          </p>
          <p className="text-gray-600 mb-10 max-w-lg mx-auto md:mx-0">
            I build responsive and modern web applications with a focus on user experience
            and performance. Passionate about creating clean, efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => handleCTAClick('contact')}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </button>
            <button
              onClick={() => handleCTAClick('projects')}
              className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="/images/profile.png"
              alt="Jigar Barad"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
