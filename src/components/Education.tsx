import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      level: 'Post Graduation',
      degree: 'MCA',
      institution: 'Poornima University, Jaipur',
      year: 'pursuing complete in 2026',
      status: 'ongoing',
      description: 'Master of Computer Applications focusing on advanced software development and system design.'
    },
    {
      level: 'Graduation',
      degree: 'BCA',
      institution: 'S.P.U P.G. College Falna',
      year: '2024',
      status: 'completed',
      description: 'Bachelor of Computer Applications with specialization in programming and database management.'
    },
    {
      level: '12th Grade',
      degree: 'PCM',
      institution: 'Emmanuel Mission Sr. Sec. School',
      year: '2021',
      status: 'completed',
      description: 'Higher Secondary Education in Physics, Chemistry, and Mathematics.'
    }
  ];

  return (
    <section id="education" className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 left-20 text-[15rem] font-black text-white transform -rotate-12">EDU</div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-none">
            ACADEMIC
            <br />
            <span className="text-green-400">JOURNEY</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My educational background and academic achievements that shaped my
            technical expertise and problem-solving abilities.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-purple-400"></div>

            <div className="space-y-16">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start space-x-8 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                      item.status === 'ongoing' 
                        ? 'bg-green-400 border-green-300 animate-pulse' 
                        : 'bg-gray-800 border-gray-600 group-hover:border-green-400'
                    }`}>
                      <GraduationCap 
                        size={24} 
                        className={item.status === 'ongoing' ? 'text-gray-900' : 'text-white group-hover:text-green-400'} 
                      />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-grow">
                    <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-green-400 transition-all duration-500 transform hover:scale-105 group-hover:shadow-2xl">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                item.status === 'ongoing' 
                                  ? 'bg-green-400 text-gray-900' 
                                  : 'bg-gray-700 text-gray-300'
                              }`}>
                                {item.status}
                              </span>
                              <span className="text-gray-400 text-sm font-medium">
                                {item.level}
                              </span>
                            </div>
                            <h3 className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors">
                              {item.degree}
                            </h3>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Calendar size={16} />
                            <span className="text-sm font-medium">{item.year}</span>
                          </div>
                        </div>

                        {/* Institution */}
                        <div className="flex items-center space-x-2 text-gray-300">
                          <MapPin size={16} className="text-green-400" />
                          <span className="font-medium">{item.institution}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Progress Bar for Ongoing */}
                        {item.status === 'ongoing' && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Progress</span>
                              <span className="text-green-400 font-medium">75%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-3/4 animate-pulse"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { number: "3", label: "Degrees", suffix: "" },
            { number: "2026", label: "Expected Graduation", suffix: "" },
            { number: "100", label: "Dedication", suffix: "%" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform">
                {stat.number}{stat.suffix}
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

export default Education;