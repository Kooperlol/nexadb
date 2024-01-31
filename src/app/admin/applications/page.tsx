"use client";
import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import Application from "@/components/admin/applications/application";
import { Application as App } from "@prisma/client";
import axios from "axios";

const ApplicationsPage = async () => {
  const [applications, setApplications] = useState<App[]>();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("/api/applications");
        setApplications(response.data);
      } catch (error) {
        console.log("Error fetching applications.");
      }
    };
    fetchApplications();
  }, []);

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
              {applications &&
                applications.map((application: any) => (
                  <Application key={application.id} {...application} />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ApplicationsPage;
