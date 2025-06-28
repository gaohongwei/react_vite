import React, { lazy, Suspense } from "react";

/* Notes
  1. Need to wrap LazyLoading into Suspense,otherwise no rendering
  2. src/pages/Home does not work. Need to use relative paths or abs path
  3. How to use component path defined in a variable?
    lazy(() => import(`${component}`))?
  */

const ComponentHome = lazy(() => import(`../Home`));

function LazyLoading() {
  return (
    <div>
      Lazy loading
      <Suspense fallback={<div>Loading...</div>}>
        <ComponentHome />
      </Suspense>
    </div>
  );
}

export default LazyLoading;
