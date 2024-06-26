"use client";
import LoadingPage from "@/app/[locale]/loading";
import PageNotFound from "@/app/[locale]/[...notFound]/page";
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
import { useTranslations } from "next-intl";

const ViewInquiryPage = ({ params }: { params: { id: string } }) => {
  const [inquiry, setInquiry] = useState<Inquiry>();
  const [loading, setLoading] = useState(true);
  const t = useTranslations("Admin.view-inquiry");
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
            <h1 className="font-bold">{t("title")}</h1>
            <h2>
              <u>Id:</u> {inquiry?.id}
            </h2>
            <h2>
              <u>Status:</u>{" "}
              {inquiry?.open
                ? t("open-options.open")
                : t("open-options.closed")}
            </h2>
          </CardHeader>
          <CardBody>
            <h3>
              <u>{t("name")}:</u> {inquiry?.firstname} {inquiry?.lastname}
            </h3>
            <h3>
              <u>{t("email")}:</u> {inquiry?.email}
            </h3>
            <h3>
              <u>{t("message")}:</u> {inquiry?.message}
            </h3>
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
                {t("reply")}
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
                  description: `${t("message-1")} ${
                    inquiry.open ? t("closed") : t("opened")
                  } ${t("message-2")}`,
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              {inquiry.open ? t("resolve") : t("reopen")}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ViewInquiryPage;
