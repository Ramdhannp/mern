import Button from "elements/Button";
import React from "react";
import BrandIcon from "./IcontText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.pathName === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <nav className="navbar navbar-expand-lg navbar--light">
        <div className="container">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/agents")}`}>
                <Button className="nav-link" type="link" href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
