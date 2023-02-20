import { ReactNode } from "react";
import {
  Box,
  Flex,
  Button,
  Center,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg="gray" px={4}>
        <Flex h="40px" alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
            <h3>Logo</h3>
          </Link>
          <Link href="/people">
            <h3>People</h3>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
