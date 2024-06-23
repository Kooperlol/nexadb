"use client"
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
    name: string;
    href: string;
}

const NexaButton = (props: Props) => {
    const router = useRouter();
    return (
        <Button
          size={"lg"}
          className="w-fit font-mono uppercase"
          bgGradient={"linear(to-r, purple.500, purple.400)"}
          color={"white"}
          onClick={() => router.push(props.href)}
          _hover={{
            bgGradient: "linear(to-r, purple.400, purple.300)",
          }}
        >
            {props.name}
        </Button>
    )
}

export default NexaButton
