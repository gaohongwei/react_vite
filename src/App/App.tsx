import { BrowserRouter } from "react-router-dom";
import { AppMenu, AppRoutes, AppHeader } from "./components";
import menuConfig from "./config/AppMenuConfig";
import { LangProvider } from "../HOC/LangProvider";

export const App = () => {
  return (
    <LangProvider>
      <BrowserRouter>
        <AppHeader />
        <div className="flex min-h-screen">
          <aside className="w-64 bg-gray-50 border-r border-gray-200">
            <AppMenu menuConfig={menuConfig} />
          </aside>
          <div className="w-4" /> {/* gap between menu and main */}
          <main className="flex-1 p-6 bg-white">
            <AppRoutes menuConfig={menuConfig} />
          </main>
        </div>
      </BrowserRouter>
    </LangProvider>
  );
};
