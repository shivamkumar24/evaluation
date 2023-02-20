import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { HStack, Stack } from "@chakra-ui/react";

const PeopleDetails = () => {
  const router = useRouter();
  console.log(router.query.id);
  let id = router.query.id;
  const [data, setData] = useState([]);
  console.log(data);

  const getUserData = async (id) => {
    let peopleData = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getUserData(id);
  }, [id]);

  if (data.length === 0) {
    return (
      <h1 style={{ textAlign: "center" }}>
        404 | This page could not be found.
      </h1>
    );
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        .<h2>UserID: {id}</h2>
        <h1>Todos Data</h1>
        {data.map((el) => {
          // console.log(el.completed);
          if (el.completed === false) {
            return (
              <HStack width="40%" m="auto" p="10px" key={el.id}>
                <CheckCircleIcon bg="red" color="white" />{" "}
                <p style={{ textAlign: "center", marginLeft: "20px" }}>
                  {el.title}
                </p>
              </HStack>
            );
          } else {
            return (
              <HStack width="40%" m="auto" p="10px" key={el.id}>
                <CheckCircleIcon bg="white" color="green" />{" "}
                <p style={{ textAlign: "center", marginLeft: "20px" }}>
                  {el.title}
                </p>
              </HStack>
            );
          }
        })}
      </div>
    );
  }
};

export default PeopleDetails;
