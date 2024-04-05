"use client";
import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import Inquiry from "@/components/admin/inquiries/inquiry";
import { Inquiry as InquiryData } from "@prisma/client";
import axios from "axios";
import LoadingPage from "@/app/loading";

const InquiriesPage = async () => {
  const [inquiries, setInquiries] = useState<InquiryData[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get("/api/inquiries");
        setInquiries(response.data);
      } catch (error) {
        console.log("Error fetching inquiries.");
      }
      setLoading(false);
    };
    fetchInquiries();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div className="min-h-screen py-36 px-16 gap-5 flex flex-col">
        <p className="text-4xl text-white text-center">Manage all inquiries</p>
        <TableContainer bg={"white"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Firstname</Th>
                <Th>Lastname</Th>
                <Th>Email</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {inquiries &&
                inquiries.map((inquiry: any) => (
                  <Inquiry key={inquiry.id} {...inquiry} />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default InquiriesPage;
