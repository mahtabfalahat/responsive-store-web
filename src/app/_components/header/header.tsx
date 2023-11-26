import { TopNavigation } from "./top-navigation";
export const Header: React.FC = () => {
  return (
    <header className="dark:border-base-content dark:border-opacity-5">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200 bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <TopNavigation />
      </div>
    </header>
  );
};
