import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: data.socials.github, label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: data.socials.linkedin, label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: data.socials.twitter, label: 'Twitter' }
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10\">
      <div className="max-w-6xl mx-auto\">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6\">
          <div className="text-center md:text-left\">
            <h3 className="text-2xl font-bold mb-2\">{data.name}</h3>
            <p className="text-gray-400\">{data.title}</p>
          </div>
          </div>

          <div className="flex gap-4\">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank\"
                rel="noopener noreferrer\"
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d987ff] hover:text-[#d987ff] transition-all duration-300 hover:scale-110\"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center\">
          <div className="text-gray-400 flex items-center justify-center gap-2 flex-wrap\">
            <span>© {currentYear} {data.name}. Made with</span>
            <Heart size={16} className="text-red-500 fill-current\" />
            <span>and React</span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;