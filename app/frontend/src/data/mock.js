// Mock data for portfolio
export const portfolioData = {
  personal: {
    name: "Randi Meidiyansah",
    title: "Full-Stack Developer & Creative Technologist",
    bio: "Passionate developer crafting elegant digital solutions with modern technologies. Specialized in building scalable web applications and creating seamless user experiences.",
    email: "randi@example.com",
    location: "Indonesia",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with real-time inventory management and seamless checkout experience",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg",
      bgColor: "#d987ff",
      textColor: "#000000",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team synchronization",
      tags: ["React", "Firebase", "Tailwind"],
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
      bgColor: "#88a2ff",
      textColor: "#ffffff",
      link: "#"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform with advanced filtering and export capabilities",
      tags: ["Next.js", "PostgreSQL", "Chart.js"],
      image: "https://images.unsplash.com/photo-1711599813951-89297e6201a8",
      bgColor: "#ffe03d",
      textColor: "#000000",
      link: "#"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "Community-driven social platform with content sharing and real-time messaging",
      tags: ["React", "Express", "WebSocket"],
      image: "https://images.unsplash.com/photo-1707927438677-592d30e1262a",
      bgColor: "#ff84e4",
      textColor: "#000000",
      link: "#"
    },
    {
      id: 5,
      title: "AI Content Generator",
      description: "Intelligent content creation tool powered by machine learning algorithms",
      tags: ["Python", "FastAPI", "OpenAI"],
      image: "https://images.unsplash.com/photo-1657972170499-3376d9eb8f65",
      bgColor: "#78d692",
      textColor: "#000000",
      link: "#"
    },
    {
      id: 6,
      title: "Portfolio CMS",
      description: "Headless CMS for managing portfolio content with intuitive admin interface",
      tags: ["React", "Strapi", "GraphQL"],
      image: "https://images.unsplash.com/photo-1753998943228-73470750c597",
      bgColor: "#ff965a",
      textColor: "#000000",
      link: "#"
    }
  ],
  
  skills: [
    { name: "React", level: 95, category: "frontend" },
    { name: "Next.js", level: 90, category: "frontend" },
    { name: "TypeScript", level: 88, category: "frontend" },
    { name: "Tailwind CSS", level: 92, category: "frontend" },
    { name: "Node.js", level: 90, category: "backend" },
    { name: "Python", level: 85, category: "backend" },
    { name: "FastAPI", level: 87, category: "backend" },
    { name: "MongoDB", level: 88, category: "database" },
    { name: "PostgreSQL", level: 85, category: "database" },
    { name: "Docker", level: 82, category: "devops" },
    { name: "AWS", level: 80, category: "devops" },
    { name: "Git", level: 93, category: "tools" }
  ],
  
  experience: [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise applications and mentoring junior developers"
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Developed and maintained web applications for various clients across industries"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartUp Studio",
      period: "2018 - 2020",
      description: "Built responsive user interfaces and implemented modern design systems"
    }
  ]
};

export const contactForm = {
  submit: (data) => {
    // Mock form submission
    console.log('Form submitted:', data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Message sent successfully!' });
      }, 1000);
    });
  }
};