import React from "react";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-loading">
        <Image
          priority
          src="/media/logo.png"
          draggable={false}
          width={500}
          height={500}
          alt="NexaDB logo"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
