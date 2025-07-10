import { useState } from "react";
import Logo from "./Logo";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryMenu from "./SecondaryMenu";
import { MenuIcon, XIcon } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(false);

  return (
    <header className="bg-primary text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4 md:px-0">
        <div className="shrink-0">
          <Logo />
        </div>
        <nav className="hidden md:flex flex-1 justify-center">
          <PrimaryMenu />
        </nav>
        <div className="hidden md:flex shrink-0">
          <SecondaryMenu />
        </div>

        {/* mobile */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close Menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <XIcon size={30} /> : <MenuIcon size={30} />}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden bg-primary text-white transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6">
          <PrimaryMenu onHandleClick={handleClick} />
          <SecondaryMenu />
        </nav>
      </div>
    </header>
  );
};
