import { Position } from "@prisma/client";
import Link from "next/link";
import React from "react";

const PositionBox = (position: Position) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col text-white">
          <div className="flex flex-row justify-between">
            <Link href={""}>
              <Link href={`/careers/${position.id}`}>
                <p className="text-lg font-bold hover:underline w-4/5">
                  {position.position}
                </p>
              </Link>
            </Link>
            <Link href={`/careers/apply/${position.id}`}>
              <p className="hover:underline w-full text-right">Apply Now</p>
            </Link>
          </div>
          <p>{position.location}</p>
        </div>
        <hr />
      </div>
    </>
  );
};

export default PositionBox;
