import { useState, useEffect } from "react";
import axios from "axios";

const headers = {
  "Content-Type": "text/plain",
};

function useParser(userId) {
  //const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    async function featchUser() {
      let url = "https://www.facebook.com/profile.php?id=100072269164239";
      url = `https://api.github.com/users/${userId}`;
      //["https://facebook.com/", userId].join("/");
      console.log("url", url);
      try {
        const response = await axios({
          url,
          method: "get",
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          // },
        });
        // const parsed = parse(response);

        console.log("parsed", response);
      } catch (error) {
        console.log("error:", error);
      }
    }
    featchUser();
  }, [userId]);
}

export { useParser };
