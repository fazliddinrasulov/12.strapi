import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";
import { useContext } from "react";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const { openSidebar, setPageId } = useContext(AppContext);
  const handleSubmenu = (e: any) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
