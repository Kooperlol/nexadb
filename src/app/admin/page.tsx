"use client";
import Image from "next/image";
import {
  Button,
  Input,
  Card,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const toast = useToast();
  const { refresh } = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    try {
      await axios.post("/api/auth/login", payload);
      window.location.reload();
    } catch (e) {
      toast({
        title: "Incorrect Credentials",
        colorScheme: "red",
        description: "Please enter the correct username and password!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="text-center min-h-screen flex justify-center items-center md:p-0 p-16 py-36">
      <Card className="p-5 items-center">
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <Image
            priority
            src="/media/logo.png"
            draggable={false}
            width={300}
            height={300}
            alt="NexaDB logo"
          />

          <p className="text-xl">Admin Login</p>

          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input id="username" placeholder="Username" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input id="password" type="password" placeholder="Password" />
          </FormControl>

          <Button
            bg={"blue.700"}
            color={"white"}
            type="submit"
            _hover={{
              bg: "purple.800",
            }}
          >
            Sign in
          </Button>
        </form>
      </Card>
    </div>
  );
}
