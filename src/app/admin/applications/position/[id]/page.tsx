"use client";
import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import Application from "@/components/admin/applications/application";
import { Application as App, Position } from "@prisma/client";
import axios from "axios";
import LoadingPage from "@/app/loading";

const ApplicationsPage = async ({ params }: { params: { id: string } }) => {
  const [position, setPosition] = useState<Position>();
  const [applications, setApplications] = useState<App[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `/api/applications?position=${params.id}`
        );
        const positionsResponse = await axios.get(
          `/api/positions/${params.id}`
        );
        setPosition(positionsResponse.data);
        setApplications(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching applications.");
      }
    };
    fetchApplications();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="min-h-screen py-36 px-16 gap-5 flex flex-col">
        <p className="text-4xl text-white text-center">
          {position?.position} applications
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
