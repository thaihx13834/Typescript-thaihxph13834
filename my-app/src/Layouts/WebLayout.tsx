import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const WebLayout = (props: Props) => {
  return (
    <div>
      <header> Website</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default WebLayout;
