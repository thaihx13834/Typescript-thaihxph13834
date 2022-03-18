import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../compoment/header";
type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header>
        <span>Website Footer</span>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Website Footer</footer>
    </div>
  );
};

export default WebsiteLayout;
