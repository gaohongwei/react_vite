import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppMenu } from "./AppMenu";
import { AppRoutes } from "./AppRoutes";
import { Header } from "./Header";
import menuConfig from "./config/AppMenuConfig";
import "./App.css";
import { LangProvider } from "../HOC/LangProvider";

export const App = () => {
  return (
    <LangProvider>
      <BrowserRouter>
        <Header />
        <div className="page">
          <div className="menu">
            <AppMenu menuConfig={menuConfig} />
          </div>
          <div className="gap"></div>
          <div className="main">
            <AppRoutes menuConfig={menuConfig} />
          </div>
        </div>
      </BrowserRouter>
    </LangProvider>
  );
};
