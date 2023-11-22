import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-end fixed p-3 inset-x-0 bottom-0 bg-secondary text-white text-center">
      <div className="flex flex-col text-left">
        <p className="text-xl">NexaDB</p>
        <p>Next generation data management</p>
      </div>
      <p>© Nexa Database LLC</p>
    </div>
  );
}

export default Footer;