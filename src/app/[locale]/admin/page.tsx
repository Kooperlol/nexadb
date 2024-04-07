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
import { useTranslations } from "next-intl";

export default function AdminPage() {
  const toast = useToast();
  const t = useTranslations("Admin.login");

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
        title: t("toast.error.title"),
        colorScheme: "red",
        description: t("toast.error.description"),
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
            alt="NexaDB Logo"
          />

          <p className="text-xl">{t("title")}</p>

          <FormControl isRequired>
            <FormLabel>{t("username")}</FormLabel>
            <Input id="username" placeholder={t("username")} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>{t("password")}</FormLabel>
            <Input id="password" type="password" placeholder={t("password")} />
          </FormControl>

          <Button
            bg={"blue.700"}
            color={"white"}
            type="submit"
            _hover={{
              bg: "purple.800",
            }}
          >
            {t("sign-in")}
          </Button>
        </form>
      </Card>
    </div>
  );
}
