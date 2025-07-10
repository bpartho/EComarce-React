import { NavLink } from "react-router-dom";

const activeClassName = "text-secondary font-semibold";
const defaultClassName =
  "text-white hover:text-secondary transition duration-300";

export default function PrimaryMenu({ onHandleClick }) {
  return (
    <ul className="flex justify-center items-center text-[15px] gap-12">
      {[
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/service", label: "Service" },
        { to: "/shop", label: "Shop" },
      ].map(({ to, label }) => (
        <li key={to}>
          <NavLink
            to={to}
            end={to === "/"} // For exact match on home
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            onClick={onHandleClick}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
