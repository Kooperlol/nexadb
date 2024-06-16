import React from "react";
import Image from "next/image";

const CitedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image
        priority
        src="/media/workcited.png"
        draggable={false}
        width={1200}
        height={1200}
        alt="Work Cited Page"
      />
    </div>
  );
};

export default CitedPage;
