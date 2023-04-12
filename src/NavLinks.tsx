import { useContext } from "react";
import { AppContext } from "./context";
import sublinks from "./data";

const NavLinks = () => {
  const { setPageId } = useContext(AppContext);
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
            // onMouseLeave={() => setPageId(null)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
