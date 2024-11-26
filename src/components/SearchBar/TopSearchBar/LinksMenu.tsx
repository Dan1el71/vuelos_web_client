import React from 'react';

type LinkItem = {
  label: string;
  action: () => void;
};

interface LinksMenuProps {
  links: LinkItem[];
}

const LinksMenu: React.FC<LinksMenuProps> = ({ links }) => {
  return (
    <div className="flex items-center gap-4 py-1">
      {links.map((link, index) => (
        <button
          key={index}
          onClick={link.action}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 shadow-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};

export default LinksMenu;
