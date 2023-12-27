import Position from "@/components/admin/positions/position";
import prisma from "@/lib/prisma";
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
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
        <div className="flex flex-row items-center justify-between">
          <p className="text-4xl text-white text-center">
            Manage all positions
          </p>
          <Button
            fontFamily={"heading"}
            mt={8}
            w={"fit"}
            bgGradient="linear(to-r, purple.400,purple.600)"
            color={"white"}
            _hover={{
              bgGradient: "linear(to-r, purple.400,purple.600)",
              boxShadow: "xl",
            }}
          >
            Add Position
          </Button>
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
              {positions.map((position: any) => (
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
