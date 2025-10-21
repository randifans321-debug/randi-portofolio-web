import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = ({ experience }) => {
  return (
    <div className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Work <span className="text-[#ff965a]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff965a] to-[#ffe03d] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff965a] via-[#d987ff] to-[#88a2ff] hidden sm:block"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className="relative pl-0 sm:pl-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-[#ff965a] border-4 border-[#0f0f0f] hidden sm:block"></div>

                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#ff965a]/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-[#ff965a]/20 text-[#ff965a] group-hover:scale-110 transition-transform duration-300">
                      <Briefcase size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                      <p className="text-lg text-[#ff965a] mb-2">{job.company}</p>
                      <p className="text-sm text-gray-400">{job.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;