import { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

const AppProvider = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<any>(false);
  const [pageId, setPageId] = useState<any>(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
