import React from 'react';
import { Code, Heart, Zap } from 'lucide-react';

const About = ({ data }) => {
  const features = [
    {
      icon: <Code size={32} />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: <Zap size={32} />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <Heart size={32} />,
      title: "User-Centric",
      description: "Creating intuitive experiences that users love"
    }
  ];

  return (
    <div className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About <span className="text-[#d987ff]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#d987ff] to-[#88a2ff] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {data.bio}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d987ff]/50 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-[#d987ff] mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 mb-2">Location</p>
              <p className="text-xl font-semibold">{data.location}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Email</p>
              <p className="text-xl font-semibold">{data.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;