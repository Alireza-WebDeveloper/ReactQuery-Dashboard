import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  routs: { id: number; text: string; to: string }[];
}

const NavLinks: React.FC<NavLinksProps> = ({ routs }) => {
  const createLink = () => {
    return routs.map((route) => {
      return (
        <Link
          className="text-black px-5 py-2.5 rounded-md hover:bg-gray-100 text-xl"
          key={route.id}
          to={route.to}
        >
          {route.text}
        </Link>
      );
    });
  };
  return <div className="flex flex-row gap-4">{createLink()}</div>;
};

export default NavLinks;
