"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import family from "@../../public/media/family.svg";
import health from "@../../public/media/health.svg";
import flexibility from "@../../public/media/flexibility.svg";
import savings from "@../../public/media/savings.svg";
import Image from "next/image";
import InView from "@/components/shared/slide-in-animation";

const CareerBenefits = () => {
  return (
    <div className="flex flex-col lg:gap-3 gap-20">
      <div className="flex flex-col min-h-screen lg:flex-row px-32 items-center sm:pt-32 lg:pt-0">
        <div className="flex flex-col gap-3 text-center lg:text-left justify-center lg:px-32">
          <h1 className="text-5xl font-bold text-white">
            Better Benefits Start Here
          </h1>
          <p className="text-white text-3xl">
            At NexaDB, we believe our employees are our greatest asset. That's
            why we're committed to providing a{" "}
            <b>comprehensive benefits package</b> designed to support{" "}
            <b>you and your family's</b> health, happiness, and career
            development. Here's a glimpse into how we strive to better our
            people.
          </p>
        </div>
        <Image
          priority
          draggable={false}
          src={family}
          alt="Family Background"
        />
      </div>
      <div className="flex justify-center">
        <div className="min-h-screen w-2/3 flex flex-col gap-10 pb-16">
          <Accordion
            defaultIndex={[0, 1, 2]}
            allowMultiple
            className="text-white"
          >
            <InView>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-bold"
                  >
                    Health & Wellness
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  className="flex flex-row justify-between"
                >
                  <Image
                    className="lg:w-1/3 w-1/2"
                    priority
                    draggable={false}
                    src={health}
                    alt="Health Illustration"
                  />
                  <div className="w-1/2">
                    <p>
                      Keeping our employees <b>healthy</b> and <b>happy</b>
                    </p>
                    <ul className="list-disc">
                      <li>
                        Medical, dental, and vison insurance for employees and
                        dependents
                      </li>
                      <li>Workspace accommodations</li>
                      <li>Healthcare Flexible Spending Account</li>
                      <li>Access to well-being programs</li>
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </InView>

            <InView>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-bold"
                  >
                    Flexibility & Work-Life Balance
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  className="flex flex-row justify-between"
                >
                  <Image
                    className="lg:w-1/3 w-1/2"
                    priority
                    draggable={false}
                    src={flexibility}
                    alt="Flexibility Illustration"
                  />
                  <div className="w-1/2">
                    <p>
                      Keeping our employees <b>charged</b> and <b>refreshed</b>
                    </p>
                    <ul className="list-disc">
                      <li>
                        Paid time off, including holidays, parental leave, jury
                        duty, vacation, and sick leave
                      </li>
                      <li>Remote work opportunites</li>
                      <li>Part-time work</li>
                      <li>Access to well-being programs</li>
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </InView>

            <InView>
              <AccordionItem>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="font-bold"
                  >
                    Financial Wellbeing
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  className="flex flex-row justify-between"
                >
                  <Image
                    className="lg:w-1/3 w-1/2"
                    priority
                    draggable={false}
                    src={savings}
                    alt="Financial Illustration"
                  />
                  <div className="w-1/2">
                    <p>
                      Provding our employees with <b>compensation</b> and{" "}
                      <b>opportunity</b>
                    </p>
                    <ul className="list-disc">
                      <li>401(k) retirement savings plan with company match</li>
                      <li>Student loan reinbursement</li>
                      <li>Cross-company pay equity</li>
                      <li>Access to financial planning services</li>
                      <li>Employee stock purchase plan</li>
                    </ul>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </InView>
          </Accordion>
          <InView>
            <div className="flex flex-col gap-5 h-full">
              <br />
              <h1 className="text-5xl font-bold text-white text-center">
                Hear from some of our employees
              </h1>
              <div className="flex lg:flex-row flex-col gap-5 items-center justify-center">
                <Card
                  maxW="sm"
                  width={"fit-content"}
                  className="transition h-full duration-300 transform hover:scale-105"
                >
                  <CardBody>
                    <Image
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Testimonial Image"
                      width={"500"}
                      height={"500"}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Sophie</Heading>
                      <Text>
                        "NexaDB goes above and beyond with their{" "}
                        <u>health insurance</u>! Not only do they cover me and
                        my family, but they also provide resources to stay
                        healthy, like on-site yoga classes. I feel so supported
                        here."
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
                <Card
                  maxW="sm"
                  width={"fit-content"}
                  className="transition h-full duration-300 transform hover:scale-105"
                >
                  <CardBody>
                    <Image
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Testimonial Image"
                      width={"500"}
                      height={"500"}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Antonio</Heading>
                      <Text>
                        "The <u>remote work options</u> at NexaDB are a
                        game-changer. It allows me to find a balance between
                        work and my personal life, which makes more productive."
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
                <Card
                  maxW="sm"
                  width={"fit-content"}
                  className="transition h-full duration-300 transform hover:scale-105"
                >
                  <CardBody>
                    <Image
                      src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Testimonial Image"
                      width={"500"}
                      height={"500"}
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">Robert</Heading>
                      <Text>
                        "NexaDB offers a fantastic benefits package that
                        includes a <u>401(k) with a company match</u> and{" "}
                        <u>student loan repayment</u> assistance. They are truly
                        invested in my financial future."
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </div>
            </div>
          </InView>
        </div>
      </div>
    </div>
  );
};

export default CareerBenefits;
