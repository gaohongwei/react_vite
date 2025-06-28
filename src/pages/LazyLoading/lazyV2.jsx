import React, { lazy, Suspense } from "react";

function Lazy({ func }) {
  const LoadedComponent = lazy(func);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadedComponent />
    </Suspense>
  );
}
function LazyLoadingV2() {
  return (
    <div>
      Lazy loading V2
      <Lazy func={() => import(`../Home`)} />
    </div>
  );
}

export default LazyLoadingV2;
