import React, { useState, useEffect } from 'react';
import { Code2, Database, Globe, Server, Terminal, GitBranch } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
  scrollY: number;
}

const Skills: React.FC<SkillsProps> = ({ darkMode, scrollY }) => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JAVASCRIPT', level: 88 },
        { name: 'REACT JS', level: 85 },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: 'PYTHON', level: 85 },
        { name: 'NODE JS', level: 80 },
        { name: 'EXPRESS', level: 82 },
        { name: 'FLASK', level: 75 },
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: 'MONGODB', level: 78 },
        { name: 'MYSQL', level: 80 },
      ]
    },
    {
      title: "Tools",
      icon: Terminal,
      skills: [
        { name: 'Linux / Shell Scripting', level: 70 },
        { name: 'Git & GitHub', level: 85 },
      ]
    }
  ];

  useEffect(() => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      const rect = skillsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      }
    }
  }, [scrollY]);

  return (
    <section id="skills" className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-[20rem] font-black text-white">SKILLS</div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-none">
            TECHNICAL
            <br />
            <span className="text-cyan-400">EXPERTISE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
            across different technologies and frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center">
                    <IconComponent size={32} className="text-gray-900" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-medium text-lg group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 font-mono text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-slide-right"></div>
                          </div>
                        </div>
                        
                        {/* Skill Level Indicator */}
                        <div 
                          className="absolute top-0 w-1 h-6 bg-white rounded-full transition-all duration-1000 ease-out"
                          style={{
                            left: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`,
                            transform: 'translateX(-50%) translateY(-8px)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "12+", label: "Technologies" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;