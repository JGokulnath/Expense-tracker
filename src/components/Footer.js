import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <p>copyright©{currentYear}</p>
    </footer>
  );
}
export default Footer;
