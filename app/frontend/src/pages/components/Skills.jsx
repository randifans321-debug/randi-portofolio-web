import React from 'react';

const Skills = ({ skills }) => {
  const categories = {
    frontend: { name: 'Frontend', color: '#d987ff' },
    backend: { name: 'Backend', color: '#88a2ff' },
    database: { name: 'Database', color: '#78d692' },
    devops: { name: 'DevOps', color: '#ff965a' },
    tools: { name: 'Tools', color: '#ffe03d' }
  };

  const groupedSkills = {};
  skills.forEach(skill => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });

  return (
    <div className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Technical <span className="text-[#78d692]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#78d692] to-[#ffe03d] mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="animate-fade-in-up">
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ color: categories[category].color }}
              >
                {categories[category].name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {categorySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: categories[category].color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;