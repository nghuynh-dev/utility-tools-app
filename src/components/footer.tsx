import React from 'react';

export interface FooterProps { }

export function Footer(props: FooterProps) {
  const socialLinks = [
    { name: "Twitter", link: "https://twitter.com" },
    { name: "Facebook", link: "https://facebook.com" },
    { name: "Instagram", link: "https://instagram.com" },
  ];

  return (
    <footer className="bg-gray-800 py-4 absolute bottom-0 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <p className="text-white">© 2024 Your Website. All rights reserved.</p>
          </div>
          <div className="flex">
            <ul className="flex">
              {socialLinks.map((link, index) => (
                <li className="mr-4" key={index}>
                  <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
