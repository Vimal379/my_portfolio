import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Scatch',
      techStack: 'Node.js, Express, MongoDB, EJS',
      description: 'A Shopping website with functionality where users can add products to favorites and admin can add new products.',
      github: 'https://github.com/Vimal379/scatch',
      featured: true
    },
    {
      title: 'Expense Tracker',
      techStack: 'React JS, Tailwind CSS, Local Storage, Chart.js',
      description: 'It allows users to add, view, and manage their income and expenses in real-time.',
      github: 'https://github.com/Vimal379/React-Expense-Tracker',
      featured: true
    },
    {
      title: 'Dribble Clone',
      techStack: 'HTML, CSS, JavaScript, GSAP',
      description: 'A UI based website with smooth animations and modern design.',
      github: 'https://github.com/Vimal379/Dribble-clone',
      featured: false
    },
    {
      title: 'React Currency Calculator',
      techStack: 'React JS, Tailwind, Currency API',
      description: 'Users can compare currency values with real-time exchange rates.',
      github: 'https://github.com/Vimal379/Currency-Calculator-React',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 text-[15rem] font-black text-gray-900 transform rotate-12">WORK</div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none">
              SELECTED
              <br />
              <span className="text-orange-500">PROJECTS</span>
            </h2>
            <div className="hidden lg:block">
              <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-2xl font-black text-white">04</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl">
            A curated selection of my recent work showcasing full-stack development
            capabilities and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image/Visual */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl font-black text-gray-600 opacity-50">
                      {project.title.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <Github size={20} className="text-gray-900" />
                        </a>
                        <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                          <ExternalLink size={20} className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Featured Project
                    </span>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(', ').map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
                  >
                    <Github size={18} />
                    <span className="font-medium">View Code</span>
                  </a>
                  <button className="group flex items-center space-x-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                    <span className="font-medium">Live Demo</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h4>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(', ').map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center">
          <a
            href="https://github.com/vimal379"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-4 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 text-lg font-medium"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;