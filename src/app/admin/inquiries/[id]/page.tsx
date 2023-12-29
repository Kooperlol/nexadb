"use client";
import LoadingPage from "@/app/loading";
import PageNotFound from "@/app/not-found";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  useToast,
} from "@chakra-ui/react";
import { Inquiry } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const InquiriesPage = ({ params }: { params: { id: string } }) => {
  const [inquiry, setInquiry] = useState<Inquiry>();
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const response = await axios.get(`/api/inquiries/${params.id}`);
        setInquiry(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching inquiry.");
      }
    };

    fetchInquiry();
  }, [params]);

  if (loading) {
    return <LoadingPage />;
  }

  if (inquiry == null) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-36 px-16">
        <Card className="w-fit">
          <CardHeader className="text-center">
            <p className="text-xl">Inquiry</p>
            <p>Id: {inquiry?.id}</p>
            <p>Status: {inquiry?.open ? "Open" : "Closed"}</p>
          </CardHeader>
          <CardBody>
            <p>
              Name: {inquiry?.firstname} {inquiry?.lastname}
            </p>
            <p>Email: {inquiry?.email}</p>
            <p>Message: {inquiry?.message}</p>
          </CardBody>
          <CardFooter className="flex flex-row gap-5">
            <Link className="w-full" href={`mailto:${inquiry?.email}`}>
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, purple.400,purple.600)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, purple.400,purple.600)",
                  boxShadow: "xl",
                }}
              >
                Reply
              </Button>
            </Link>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, purple.400,purple.600)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, purple.400,purple.600)",
                boxShadow: "xl",
              }}
              onClick={async () => {
                await axios.put("/api/inquiries", {
                  inquiryId: inquiry.id,
                  open: !inquiry.open,
                });
                setInquiry((prevObject) => ({
                  ...prevObject!!,
                  open: !prevObject!!.open,
                }));
                toast({
                  title: "Status Changed",
                  colorScheme: "green",
                  description: `You have ${
                    inquiry.open ? "closed" : "opened"
                  } this inquiry.`,
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              {inquiry.open ? "Resolve" : "Reopen"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default InquiriesPage;
