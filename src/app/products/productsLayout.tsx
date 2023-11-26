"use client";
import { useState } from "react";

type FilterSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={` flex-[2] bg-primary flex-col fixed   inset-y-0 left-0 w-64 md:w-300 bg-gray-800 text-black transition-all duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:bg-accent md:text-black md:transition-none`}>
      <div className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Sidebar</div>
      </div>
      filters
    </aside>
  );
};

type ProductsLayoutProps = {
  children: React.ReactNode;
};

const ProductsLayout: React.FC<ProductsLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex gap-8 min-h-screen">
      <aside className="flex-[2] bg-primary flex-col ">
        <div className="flex items-center justify-between p-4">
          <div className="text-2xl font-bold">Sidebar</div>
        </div>
        filters
      </aside>
      <div className="bg-gray-100 flex-[8] p-4 rounded min-h-[300px]">{children}</div>
    </div>
  );
};

export default ProductsLayout;
