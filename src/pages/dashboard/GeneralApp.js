import React, { Suspense, lazy } from "react";

// Dynamic import
const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
  return (
    <>
      <Suspense fallback="Loading..."></Suspense>
    </>
  );
};

export default GeneralApp;
