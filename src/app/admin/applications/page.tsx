import prisma from "@/lib/prisma";
import React from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import Application from "@/components/admin/applications/application";

const ApplicationsPage = async () => {
  const applications = await prisma.application.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      <div className="min-h-screen py-36 px-16 gap-5 flex flex-col">
        <p className="text-4xl text-white text-center">
          Manage all applications
        </p>
        <TableContainer bg={"white"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Firstname</Th>
                <Th>Lastname</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
              </Tr>
            </Thead>
            <Tbody>
              {applications.map((inquiry: any) => (
                <Application key={inquiry.id} {...inquiry} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ApplicationsPage;
