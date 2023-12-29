"use client";
import LoadingPage from "@/app/loading";
import PageNotFound from "@/app/not-found";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  useToast,
} from "@chakra-ui/react";
import { Position } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const PositionsPage = ({ params }: { params: { id: string } }) => {
  const [position, setPosition] = useState<Position>();
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const response = await axios.get(`/api/positions/${params.id}`);
        setPosition(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching position.");
      }
    };

    fetchPosition();
  }, [params.id]);

  if (loading) {
    return <LoadingPage />;
  }

  if (position == null) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-36 px-16">
        <Card className="w-min">
          <CardHeader className="text-center">
            <p className="text-xl">Edit Position</p>
            <p>Id: {position?.id}</p>
            <div className="flex flex-row gap-2 justify-center items-center">
              <p>Position:</p>
              <Editable
                defaultValue={position?.position}
                onChange={(pos) => {
                  setPosition((prevObject) => ({
                    ...prevObject!!,
                    position: pos,
                  }));
                  console.log(position);
                }}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </div>
          </CardHeader>
          <CardBody className="gap-3 flex flex-col">
            <div className="flex flex-row gap-2 items-center">
              <p>Location:</p>
              <Editable
                defaultValue={position?.location}
                onChange={(location) =>
                  setPosition((prevObject) => ({
                    ...prevObject!!,
                    location,
                  }))
                }
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <p>Salary:</p>
              <Editable
                value={`$${position?.salary.toLocaleString()}`}
                onChange={(salary) => {
                  const salaryWithoutCommas = salary
                    .replace(/,/g, "")
                    .replace("$", "");
                  if (!Number.isInteger(parseInt(salaryWithoutCommas))) {
                    toast({
                      title: "Invalid Salary",
                      colorScheme: "red",
                      description: "The salary you provided is not numeric.",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                    return;
                  }
                  setPosition((prevObject) => ({
                    ...prevObject!!,
                    salary: Number.parseInt(salaryWithoutCommas),
                  }));
                }}
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <p>About:</p>
              <Editable
                wordBreak={"break-all"}
                defaultValue={position?.about}
                onChange={(about) =>
                  setPosition((prevObject) => ({
                    ...prevObject!!,
                    about,
                  }))
                }
              >
                <EditablePreview />
                <EditableTextarea />
              </Editable>
            </div>
            <p
              onClick={() =>
                setPosition((prevObject) => ({
                  ...prevObject!!,
                  listed: !prevObject!!.listed,
                }))
              }
            >
              Listed: {position.listed ? "Yes" : "No"}
            </p>
          </CardBody>
          <CardFooter className="flex flex-row gap-5">
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
              onClick={() => {
                router.push("/admin/positions");
                axios.delete(`/api/positions/${position.id}`);
              }}
            >
              Delete
            </Button>
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
                await axios.put("/api/positions", {
                  position,
                });
                toast({
                  title: "Position Updated",
                  colorScheme: "green",
                  description: `You have edited this position.`,
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Save
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default PositionsPage;
