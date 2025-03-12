import React from "react";
import { Outlet } from "react-router-dom";
function Public() {
  return (
    <>
      <div>Huy</div>
      <Outlet />
    </>
  );
}

export default Public;
