import PageNotFound from "@/app/not-found";
import ToggleOpen from "@/components/admin/inquiries/toggle-open";
import prisma from "@/lib/prisma";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const InquiriesPage = async ({ params }: { params: { id: string } }) => {
  const inquiry = await prisma.inquiry
    .findFirst({
      where: {
        id: params.id,
      },
    })
    .catch(() => {
      console.error("Error while querying for inquiry");
    });

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
            <ToggleOpen {...inquiry} />
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default InquiriesPage;
