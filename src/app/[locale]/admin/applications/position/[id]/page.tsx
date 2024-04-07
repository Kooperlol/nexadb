"use client";
import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import Application from "@/components/admin/applications/application";
import { Application as App, Position } from "@prisma/client";
import axios from "axios";
import LoadingPage from "@/app/[locale]/loading";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import getTranslatedPosition from "@/helpers/translated-positions";

const ApplicationsPage = async ({ params }: { params: { id: string } }) => {
  const [position, setPosition] = useState<Position>();
  const [applications, setApplications] = useState<App[]>();
  const [loading, setLoading] = useState(true);
  const locale = useLocale();
  const t = useTranslations("Admin.position-table");

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
          {getTranslatedPosition(position!!, locale)} {t("applications")}
        </p>
        <TableContainer bg={"white"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>{t("name")}</Th>
                <Th>{t("last")}</Th>
                <Th>{t("email")}</Th>
                <Th>{t("phone")}</Th>
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
