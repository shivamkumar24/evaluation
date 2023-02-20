import {
  Badge,
  Button,
  Heading,
  List,
  ListItem,
  Select,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Heading fontSize="25px" textAlign="center">
        Welcome to the C4
      </Heading>
      <Heading fontSize="25px" textAlign="center">
        evaluation for
      </Heading>
      <Heading fontSize="25px" textAlign="center" color="teal">
        RCT-201
      </Heading>
      <Text fontSize="22px" textAlign="center">
        You need to create an application similar to the one that you are
        looking right now.
      </Text>
      <Text fontSize="22px" textAlign="center">
        There 2 pages that needs to be created apart from the current homepage.
      </Text>
      <br />
      <Text fontSize="22px" textAlign="center">
        One path is <span style={{ fontWeight: "bold" }}>/people</span> and
        another a dynamic route{" "}
        <span style={{ fontWeight: "bold" }}>/people/[id]</span>
      </Text>

      <br />

      {/* ----------- /people ---------- */}
      <Heading textAlign="center">/people</Heading>
      <UnorderedList w="50%" m="auto" textAlign="center">
        <ListItem>
          The people can go to this page, by clicking the `People` tab in the
          Navbar
        </ListItem>
        <ListItem>
          The data should be fetched from
          <span style={{ fontWeight: "bold" }}>
            {" "}
            https://jsonplaceholder.typicode.com/users
          </span>{" "}
          (Users API call) using Static Site Generation (SSG) for this page.
        </ListItem>
        <ListItem>
          Hence the people page will be rendered from the server, with all the
          data present in the HTML file itself
        </ListItem>
      </UnorderedList>

      <br />

      {/* ----------- /people/[id] ---------- */}
      <Heading textAlign="center">/people/[id]</Heading>
      <UnorderedList w="50%" m="auto" textAlign="center">
        <ListItem>
          The people can go to this page, by clicking the `Get Todos` button in
          the User Cards
        </ListItem>
        <ListItem>
          All the static HTML files, based on the static paths of the user id,
          should be created using SSG
        </ListItem>
        <ListItem>
          The HTML files should have the UserID:[id] data present in their HTML
          pages (Check screenshots for examples)
        </ListItem>
        <ListItem>
          The TodoData should be fetched from
          <span style={{ fontWeight: "bold" }}>
            {" "}
            https://jsonplaceholder.typicode.com/users/$id/todos
          </span>{" "}
          using Client Side Rendering, and shown in the UI after the page loads
        </ListItem>
        <ListItem>
          Visting any other dynamic route based on the user id which is not in
          the API should show the 404 page. For example, from the Users API
          call, none of the user has the 97 user id, hence, visiting
          <span style={{ fontWeight: "bold" }}>
            http://localhost:3000/people/97
          </span>
          should return 404 page
        </ListItem>
      </UnorderedList>

      <hr />

      <Heading textAlign="center" fontWeight="bold">
        Marking Criteria:
        <Badge bg="teal" m="5px">
          #TYPESCRIPT
        </Badge>
        <Badge bg="teal" m="5px">
          #REACT
        </Badge>
        <Badge bg="teal" m="5px">
          #NEXTJS
        </Badge>
        <Badge bg="teal" m="5px">
          #CHAKRAUI
        </Badge>
      </Heading>
    </>
  );
}
