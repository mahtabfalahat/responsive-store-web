import React from "react";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-100 w-64 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button className="absolute top-4 right-4 text-gray-600">Close</button>
      {/* Sidebar content */}
    </div>
  );
};
