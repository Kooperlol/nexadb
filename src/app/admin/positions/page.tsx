"use client";
import AddPositionButton from "@/components/admin/positions/add-position";
import Position from "@/components/admin/positions/position";
import prisma from "@/lib/prisma";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

const PositionsPage = async () => {
  const positions = await prisma.position.findMany({
    orderBy: {
      position: "asc",
    },
  });
  return (
    <>
      <div className="min-h-screen py-36 px-16 gap-5 flex flex-col">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <p className="text-4xl text-white text-center">
            Manage all positions
          </p>
          <AddPositionButton />
        </div>
        <TableContainer bg={"white"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Position</Th>
                <Th>Location</Th>
                <Th>Salary</Th>
                <Th>Listed</Th>
              </Tr>
            </Thead>
            <Tbody>
              {positions.map((position) => (
                <Position key={position.id} {...position} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default PositionsPage;
