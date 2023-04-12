import { useContext } from "react";
import { AppContext } from "./context";
import sublinks from "./data";
const Submenu = () => {
  const { pageId, setPageId } = useContext(AppContext);
  const currentPage: any = sublinks.find((item) => item.pageId === pageId);

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={() => setPageId(null)}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{ gridTemplateColumns: currentPage?.links.length > 3 ? "1fr 1fr" : "1fr" }}
      >
        {currentPage?.links?.map((link: any) => {
          const { id, url, label, icon } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
