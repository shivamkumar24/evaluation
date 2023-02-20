import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const People = ({ people }) => {
  console.log(people);
  const router = useRouter();

  const handleRoute = (id) => {
    router.push("/people/" + id);
  };

  return (
    <Grid templateColumns="repeat(4,1fr)" gap={6}>
      {people.map((el) => (
        <Center py={6} key={el.id}>
          <Box
            maxW={"320px"}
            w={"full"}
            bg="white"
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Avatar
              size={"xl"}
              width="100px"
              height="100px"
              src={
                "https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
              }
              alt={"Avatar Alt"}
              mb={4}
              pos={"relative"}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: "green.300",
                border: "2px solid white",
                rounded: "full",
                pos: "absolute",
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {el.name}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              {el.username}
            </Text>
            <Text textAlign={"center"} color="gray" px={3}>
              {el.address.street},{el.address.suite},...
            </Text>

            <Stack mt={8} direction={"row"} spacing={4}>
              <Button
                cursor="pointer"
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"teal"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "teal.500",
                }}
                _focus={{
                  bg: "teal.500",
                }}
                onClick={() => handleRoute(el.id)}
              >
                Get Todos
              </Button>
            </Stack>
          </Box>
        </Center>
      ))}
    </Grid>
  );
};

export default People;

export async function getStaticProps() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let data = await res.json();

  return {
    props: {
      people: data,
    },
  };
}
