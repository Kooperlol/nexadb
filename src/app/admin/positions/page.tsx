"use client";
import LoadingPage from "@/app/loading";
import AddPositionButton from "@/components/admin/positions/add-position";
import Position from "@/components/admin/positions/position";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import { set } from "lodash";
import React, { useEffect } from "react";
import { useState } from "react";

const PositionsPage = async () => {
  const [positions, setPositions] = useState<Position[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get("/api/positions");
        setPositions(response.data);
      } catch (error) {
        console.log("Error fetching positions.");
      }
      setLoading(false);
    };
    fetchPositions();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="min-h-screen py-36 px-16 gap-5 flex flex-col">
        <div
          className="flex md:flex-row flex-col items-center justify-between"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
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
              {positions &&
                positions.map((position) => (
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
