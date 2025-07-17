import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: 'SQL (Basic) Certificate',
      issuer: 'HackerRank',
      date: 'July 2025',
      link: 'https://www.hackerrank.com/certificates/cf86814613c3',
      featured: true
    },
    {
      title: 'SQL (Intermediate) Certificate',
      issuer: 'HackerRank',
      date: 'July 2025',
      link: 'https://www.hackerrank.com/certificates/76063ceffb9c',
      featured: true
    },
    {
      title: 'SQL (Advanced) Certificate',
      issuer: 'HackerRank',
      date: 'July 2025',
      link: '#',
      featured: false
    },
    {
      title: 'Dell GenAI Foundations Certificate',
      issuer: 'Dell',
      date: 'Sep 2024',
      link: 'https://www.credly.com/badges/e0a66581-e034-4a06-8d87-b0ae878ee7cd/linked_in_profile',
      featured: true
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman',
      date: 'Aug 2024',
      link: 'https://api.badgr.io/public/assertions/HIyl_lt8RJqTYgpxgr2IFw',
      featured: false
    },
    {
      title: 'Programming with JavaScript',
      issuer: 'Coursera',
      date: 'Sep 2023',
      link: 'https://www.coursera.org/account/accomplishments/verify/BDUDQA7ZGRJC',
      featured: false
    }
  ];

  const featuredCerts = certifications.filter(cert => cert.featured);
  const otherCerts = certifications.filter(cert => !cert.featured);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-[20rem] font-black text-gray-900 transform -rotate-12">CERT</div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-6xl lg:text-8xl font-black text-gray-900 leading-none">
              PROFESSIONAL
              <br />
              <span className="text-amber-600">CERTIFICATIONS</span>
            </h2>
            <div className="hidden lg:block">
              <div className="w-24 h-24 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-black text-white">06</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Industry-recognized certifications that validate my technical expertise
            and commitment to continuous learning in modern technologies.
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="text-amber-600 mr-3" size={32} />
            Featured Certifications
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCerts.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all duration-500 transform hover:scale-105 group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award size={32} className="text-white" />
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {cert.title}
                  </h4>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Building size={16} className="mr-2 text-amber-600" />
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2 text-amber-600" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all duration-300 font-medium"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Additional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCerts.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Award size={20} className="text-amber-600" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-amber-600 transition-colors">
                      {cert.title}
                    </h4>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 font-medium">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "6", label: "Certifications", suffix: "" },
            { number: "4", label: "Platforms", suffix: "" },
            { number: "2024", label: "Latest Cert", suffix: "" },
            { number: "100", label: "Verified", suffix: "%" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl lg:text-5xl font-black text-amber-600 mb-2 group-hover:scale-110 transition-transform">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;