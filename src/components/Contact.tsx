import React, { useState } from 'react';
import { Phone, Mail, Linkedin, Github, MapPin, Send, ArrowRight, User, MessageSquare } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9001422079',
      link: 'tel:+919001422079',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'vimalprajapat@gmail.com',
      link: 'mailto:vimalprajapat@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/vimal-kumar-93b60a23b',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my work',
      link: 'https://github.com/vimal379',
      color: 'text-gray-700'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 right-20 text-[15rem] font-black text-white transform rotate-12">TALK</div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-none">
            LET'S START A
            <br />
            <span className="text-cyan-400">CONVERSATION</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <User className="text-cyan-400 mr-3" size={32} />
                Get In Touch
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with 
                passionate people. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-cyan-400 transition-all duration-300">
                      <IconComponent size={24} className={`${info.color} group-hover:text-gray-900`} />
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">
                        {info.label}
                      </p>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {info.value}
                      </p>
                    </div>
                    <ArrowRight size={20} className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-cyan-400">24h</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-400">100%</div>
                  <div className="text-gray-400 text-sm">Project Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="text-cyan-400" size={32} />
                <h3 className="text-3xl font-bold text-white">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-300 font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-300 font-medium">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-300 font-medium">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="flex items-center space-x-4 text-gray-400">
                  <MapPin size={16} className="text-cyan-400" />
                  <span>Based in Jaipur, India</span>
                  <span>•</span>
                  <span>Available for remote work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-gray-800 border border-gray-700 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-medium">Available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;