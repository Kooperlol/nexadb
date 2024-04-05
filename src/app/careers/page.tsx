"use client";
import React, { useState } from "react";
import Image from "next/image";
import careersMobile from "@/../public/media/mobile_careers.jpg";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import careersDesktop from "@/../public/media/careers.gif";
import ourMissionSlide from "@/../public/media/mission.jpg";
import ourVisionSlide from "@/../public/media/vision.jpg";
import ourValuesSlide from "@/../public/media/values.jpg";
import communitySlide from "@/../public/media/community.jpg";

import { Carousel } from "react-bootstrap";

const CareersPage = () => {
  const { push } = useRouter();
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Image
        className="absolute object-cover min-h-screen w-screen max-h-screen brightness-50 hidden md:block"
        priority
        draggable={false}
        src={careersDesktop}
        alt="Careers Background"
      />
      <Image
        className="absolute object-cover min-h-screen max-h-screen brightness-50 block md:hidden"
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
      <div className="justify-center flex">
        <div className="flex flex-col gap-5 p-16 w-3/4 text-white">
          <div>
            <div className="items-center justify-center">
              <p className="font-bold lg:text-4xl text-xl left-1/2 lg:text-center text-left">
                Company Overview
              </p>
            </div>
            <p className="lg:text-lg text-base lg:text-center text-left">
              Welcome to NexaDB, a leading force in server management and
              hosting solutions. Specializing in optimizing digital
              infrastructure, we provide services to cultivate your needs. Our
              commitment to excellence ensures that your servers operate
              seamlessly, allowing you to focus on what matters most.
            </p>
          </div>
          <Carousel
            className="md:block hidden"
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <Image
                className="carousel-image"
                objectFit="cover"
                draggable={false}
                src={ourMissionSlide}
                alt="Our Mission Slide"
              />
              <Carousel.Caption>
                <h3>The Mission—Why We Exist</h3>
                <p className="text-xl">
                  Our mission is to empower clients with reliable, secure, and
                  scalable server solutions. By simplifying the complexities of
                  digital infrastructure management, we enable clients to
                  thrive.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-image"
                objectFit="cover"
                draggable={false}
                src={ourVisionSlide}
                alt="Our Mission Slide"
              />
              <Carousel.Caption>
                <h3>The Vision – What We Are Working Toward</h3>
                <p className="text-xl">
                  We envision a future where server management is synonymous
                  with efficiency and security. Our commitment to setting
                  industry standards ensures that our clients receive
                  state-of-the-art hosting experiences.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-image"
                objectFit="cover"
                draggable={false}
                src={ourValuesSlide}
                alt="Our Mission Slide"
              />
              <Carousel.Caption>
                <h3>Our Values – How We Will Accomplish This Mission</h3>
                <p className="text-xl">
                  Driven by a dedication to excellence and client satisfaction,
                  we uphold values that prioritize the security and reliability
                  in our server solutions. Our team is committed to improvement,
                  ensuring that our services evolve with tomorrow's techonology.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-image"
                objectFit="cover"
                draggable={false}
                src={communitySlide}
                alt="Our Mission Slide"
              />
              <Carousel.Caption>
                <h3>Community — Who We Serve</h3>
                <p className="text-xl">
                  Our services cater to a diverse community, including
                  businesses, organizations, and individuals seeking dependable
                  server management. By tailoring our solutions to meet the
                  unique needs of each client, we foster collaborative
                  partnerships.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="lg:hidden block">
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
                uphold values that prioritize the security and reliability in
                our server solutions. Our team is committed to improvement,
                ensuring that our services evolve with tomorrow's techonology.
              </p>
            </div>
            <div>
              <p className="lg:text-2xl text-xl">Community — Who We Serve</p>
              <p className="lg:text-lg text-base">
                Our services cater to a diverse community, including businesses,
                organizations, and individuals seeking dependable server
                management. By tailoring our solutions to meet the unique needs
                of each client, we foster collaborative partnerships.
              </p>
            </div>
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
              and collaborative team efforts.
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
      <div className="flex flex-col items-center justify-center gap-5 p-16 bg-main text-white">
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
    </div>
  );
};

export default CareersPage;
