import React from "react";
import Image from "next/image";
import notFoundSVG from "@../../../public/media/404.svg";

const PageNotFound = () => {
  return (
    <html>
      <body>
        <div className="bg-main flex lg:flex-row text-white flex-col lg:justify-between lg:gap-32 min-h-screen items-center lg:px-36 p-10">
          <div className="flex flex-col gap-10 lg:p-0 py-32">
            <p className="font-octinsports lg:text-9xl text-7xl font-bold">
              Oops!
            </p>
            <p className="font-bravaslab lg:text-5xl text-4xl">
              We can't seem to find the page you're looking for.
            </p>
          </div>
          <Image
            className="xl:w-1/3 lg:w-1/2 md:w-3/4 w-full"
            priority
            draggable={false}
            src={notFoundSVG}
            alt={"Page not found"}
          />
        </div>
      </body>
    </html>
  );
};

export default PageNotFound;
