import React from "react";
type FilterSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`fixed bg-gray  inset-y-0 left-0 w-64 md:w-300 bg-gray-800 text-black transition-all duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:bg-accent md:text-black md:transition-none`}>
      <div className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Sidebar</div>
      </div>
      filters
    </aside>
  );
};
