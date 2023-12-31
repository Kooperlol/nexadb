"use client";
import React from "react";
import Image from "next/image";
import careersMobile from "@/../public/media/mobile_careers.jpg";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import careersDesktop from "@/../public/media/careers.gif";
import {
  FaClock,
  FaMoneyCheckAlt,
  FaWheelchair,
  FaCalendarTimes,
  FaBalanceScale,
} from "react-icons/fa";
import { MdAccountBalance, MdOutlineSecurity } from "react-icons/md";
import { FaMoneyBillTransfer, FaUserDoctor } from "react-icons/fa6";

const CareersPage = () => {
  const { push } = useRouter();
  return (
    <>
      <Image
        className="absolute object-cover min-h-screen max-h-screen opacity-0 w-full brightness-50 lg:opacity-100"
        priority
        draggable={false}
        src={careersDesktop}
        alt="Careers Background"
      />
      <Image
        className="absolute object-cover min-h-screen max-h-screen opacity-100 brightness-50 lg:opacity-0"
        priority
        draggable={false}
        src={careersMobile}
        alt="Careers Background"
      />
      <div className="gap-2 flex flex-col items-center px-8 justify-center relative min-h-screen text-white text-center">
        <p className="lg:text-5xl text-3xl font-bold">
          Fostering Excellence Through Collaboration
        </p>
        <p className="lg:text-3xl text-xl w-1/2">
          Discover opportunities at NexaDB, where collaboration is the
          cornerstone of our dynamic workplace. Join a team that values your
          uniqueness and nurtures an environment of excellence.
        </p>
      </div>
      <div className="justify-center flex w-screen">
        <div className="flex flex-col gap-5 p-16 w-3/4 text-white">
          <div>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-full h-px my-8 bg-gray-700 border-0" />
              <span className="absolute px-3 font-bold lg:text-4xl text-xl -translate-x-1/2 bg-primary left-1/2">
                Company Overview
              </span>
            </div>
            <p className="lg:text-lg text-base">
              Welcome to NexaDB, a leading force in server management and
              hosting solutions. Specializing in optimizing digital
              infrastructure, we provide services to cultivate your needs. Our
              commitment to excellence ensures that your servers operate
              seamlessly, allowing you to focus on what matters most.
            </p>
          </div>
          <div>
            <p className="lg:text-2xl text-xl">The Mission—Why We Exist</p>
            <p className="lg:text-lg text-base">
              Our mission is to empower clients with reliable, secure, and
              scalable server solutions. By simplifying the complexities of
              digital infrastructure management, we enable clients to thrive.
            </p>
          </div>
          <div>
            <p className="lg:text-2xl text-xl">
              The Vision – What We Are Working Toward
            </p>
            <p className="lg:text-lg text-base">
              We envision a future where server management is synonymous with
              efficiency and security. Our commitment to setting industry
              standards ensures that our clients receive state-of-the-art
              hosting experiences.
            </p>
          </div>
          <div>
            <p className="lg:text-2xl text-xl">
              Our Values – How We Will Accomplish This Mission
            </p>
            <p className="lg:text-lg text-base">
              Driven by a dedication to excellence and client satisfaction, we
              uphold values that prioritize the security and reliability in our
              server solutions. Our team is committed to improvement, ensuring
              that our services evolve with tomorrow's techonology.
            </p>
          </div>
          <div>
            <p className="lg:text-2xl text-xl">Community — Who We Serve</p>
            <p className="lg:text-lg text-base">
              Our services cater to a diverse community, including businesses,
              organizations, and individuals seeking dependable server
              management. By tailoring our solutions to meet the unique needs of
              each client, we foster collaborative partnerships.
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-16 p-16 bg-white">
        <div className="flex flex-col gap-5 lg:w-1/2 text-black">
          <p className="lg:text-4xl text-2xl font-bold">
            Attributes of a Successful NexaDB Employee
          </p>
          <div>
            <p className="lg:text-2xl text-xl">Continued Learning</p>
            <p className="lg:text-lg text-base">
              Demonstrates a commitment to staying on top of the dynamic
              technological landscape by acquiring proficiency in emerging
              development frameworks.
            </p>
          </div>
          <div>
            <p className="lg:text-2xl text-xl">Adapatable</p>
            <p className="lg:text-lg text-base">
              Demonstrates an ability to swiftly adapt to new software
              environments and learn rapidly.
            </p>
          </div>
          <div>
            <p className="lg:text-2xl text-xl">Leadership</p>
            <p className="lg:text-lg text-base">
              Aspires to cultivate leadership and mentoring skills, aiming to
              enhance overall effectiveness and deliver increased value to both
              the team and our customers.
            </p>
          </div>
          <div>
            <p className="lg:text-2xl text-xl">Motivation</p>
            <p className="lg:text-lg text-base">
              Demonstrates self-motivation, excelling in both independent work
              and collaborative team efforts
            </p>
          </div>
          <div>
            <p className="lg:text-2xl text-xl">Passion</p>
            <p className="lg:text-lg text-base">
              Takes immense joy in their field by finding inspiration and
              fulfillment in crafting innovative solutions.
            </p>
          </div>
          <div>
            <p className="lg:text-2xl text-xl">Collaboration</p>
            <p className="lg:text-lg text-base">
              Brings extensive experience collaborating with designers and
              skilled developers. Thrives on detailed collaboration and seeks to
              work with individuals who appreciate a team-first company culture.
            </p>
          </div>
        </div>
        <Image
          className="select-none lg:h-1/4 lg:w-1/4 rounded-lg"
          priority
          src="/media/team.jpeg"
          draggable={false}
          width={400}
          height={400}
          alt="Employees"
        />
      </div>
      <div className="justify-center flex w-screen">
        <div className="flex flex-col items-center gap-5 p-16 w-3/4 text-white">
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 bg-gray-700 border-0" />
            <span className="absolute px-3 font-bold lg:text-4xl text-xl -translate-x-1/2 bg-primary left-1/2">
              Employee Benefits
            </span>
          </div>
          <ul className="lg:text-lg text-base">
            <li className="flex flex-row gap-2 items-center">
              <Box className="w-fit">
                <FaWheelchair />
              </Box>
              <p>Fully subsidized Long Term Disability</p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Box className="w-fit">
                <FaClock />
              </Box>
              <p>Monday through Friday work week</p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Box className="w-fit">
                <FaMoneyCheckAlt />
              </Box>
              <p>401K with company contribution</p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Box className="w-fit">
                <FaMoneyBillTransfer />
              </Box>
              <p>Quarterly/annual profit-sharing bonuses</p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Box className="w-fit">
                <FaUserDoctor />
              </Box>
              <p>
                Group rates for dental/vision/life insurance (non-subsidized)
              </p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Box className="w-fit">
                <MdAccountBalance />
              </Box>
              <p>Flexible Spending Account with company match</p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Box className="w-fit">
                <MdOutlineSecurity />
              </Box>
              <p>Preventative Care Insurance Minimum Essential Coverage</p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Box className="w-fit">
                <FaWheelchair />
              </Box>
              <p>Fully subsidized Long Term Disability</p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Box className="w-fit">
                <FaCalendarTimes />
              </Box>
              <p>Flexible Time Off</p>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Box className="w-fit">
                <FaBalanceScale />
              </Box>
              <p>Company culture based on work/life balance</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-16 bg-white">
        <p className="text-3xl text-center">
          Join us in shaping the future of database management.
        </p>
        <Button
          size={"lg"}
          className="w-fit"
          bg={"purple.800"}
          color={"white"}
          onClick={() => push("/careers/search")}
          _hover={{
            bg: "purple.900",
          }}
        >
          View all open roles
        </Button>
      </div>
    </>
  );
};

export default CareersPage;
