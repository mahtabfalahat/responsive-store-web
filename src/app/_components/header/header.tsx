import { TopNavigation } from "./top-navigation";
export const Header: React.FC = () => {
  return (
    <header className=" dark:border-base-content dark:border-opacity-5 bg-gray">
      <div className="container flex items-center justify-between ml-auto">
        <TopNavigation />
        <div className="">Search box</div>
      </div>
    </header>
  );
};
