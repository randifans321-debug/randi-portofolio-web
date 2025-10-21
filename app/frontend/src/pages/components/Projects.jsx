import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = ({ projects }) => {
  return (
    <div className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-[#88a2ff]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#88a2ff] to-[#78d692] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Content Container */}
              <div
                className="p-6"
                style={{ backgroundColor: project.bgColor }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="text-2xl font-semibold"
                    style={{ color: project.textColor }}
                  >
                    {project.title}
                  </h3>
                  <ExternalLink
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={20}
                    style={{ color: project.textColor }}
                  />
                </div>
                <p
                  className="mb-4 leading-relaxed opacity-80"
                  style={{ color: project.textColor }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        color: project.textColor,
                        borderColor: project.textColor,
                        opacity: 0.8
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;