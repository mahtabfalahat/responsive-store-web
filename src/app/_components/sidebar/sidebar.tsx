"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
type Category = {
  id: number;
  name: string;
};

const categories: Category[] = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
];

export const Sidebar: React.FC = () => {
  const [showAside, setShowAside] = useState(true);
  const router = useRouter();

  const handleToggleAside = () => {
    setShowAside(!showAside);
  };
  const handleCategoryClick = (categoryId: number): void => {
    console.log("//////////////////", categoryId);
    router.push(`/category/${categoryId}`);
    setShowAside(false);
  };
  return (
    <>
      <button className="fixed sm:hidden left-0 bg-gray-800 text-black px-3 py-2 rounded-md text-sm font-medium m-4" onClick={handleToggleAside}>
        Toggle Sidebar
      </button>
      {showAside && (
        <aside className="bg-gray p-4  sm:block lg:w-64 xl:w-72 mr-auto text-center">
          <h2 className="text-lg font-semibold mb-4">Peoduct categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => {
              return (
                <li key={category.id} className="p-5 border-slate-200 rounded-md hover:bg-primary hover:opacity-70 shadow-xl	">
                  <button className="text-gray-600 hover:text-gray-800" onClick={() => handleCategoryClick(category.id)}>
                    {category.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
      )}
    </>
  );
};
