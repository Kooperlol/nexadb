import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-end p-8 bg-primary-foreground text-white text-center">
      <div className="flex flex-col text-left">
        <p className="text-xl">NexaDB</p>
        <p>Next generation data management</p>
      </div>
      <p>© 2024 Nexa Database LLC. All rights reserved.</p>
    </div>
  );
};

export default Footer;
