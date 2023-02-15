import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aLinks = links.map((link) => (
    <a key={link} href={link}>
      {link}
    </a>
  ));

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {aLinks}
    </nav>
  );
}

export default NavBar;
