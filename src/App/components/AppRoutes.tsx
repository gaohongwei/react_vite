import React from "react";
import { Routes, Route } from "react-router-dom";
import { getComponent } from "../helper";
import ErrorBoundary from "../../HOC/ErrorBoundary";

function getPathRouteDict(menu) {
  let pathElementDict = {};
  menu.forEach((item) => {
    const { path, routes: subMenu } = item;
    const loadedComponent = getComponent(item);

    if (!subMenu) {
      pathElementDict[path] = loadedComponent;
    } else {
      const newDict = getPathRouteDict(subMenu);
      pathElementDict = { ...pathElementDict, ...newDict };
    }
  });
  return pathElementDict;
}
export function AppRoutes({ menuConfig }) {
  const pathRouteDict = getPathRouteDict(menuConfig);
  const pathList = Object.keys(pathRouteDict);
  return (
    <Routes>
      {pathList.map((path, index) => {
        const element = <ErrorBoundary>{pathRouteDict[path]}</ErrorBoundary>;
        return <Route key={index} path={path} element={element} />;
      })}
    </Routes>
  );
}
