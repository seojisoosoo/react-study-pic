import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { axios } from "axios";

const ShowSecond = () => {
  const [secondPic, setSecondPic] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://www.jeju.go.kr/rest/JejuHdMuseumCollection/getJejuHdMuseumCollectionList.json"
  //     );
  //     console.log(response);
  //     // setSecondPic()
  //     //   console.log(response.data.collections);
  //     //   setShowPicture(response.data.collections);
  //   };
  //   fetchData();
  // }, []);
  const headers = new Headers({
    "Content-Type": "application/json",
  });
  var responseClone; // 1

  useEffect(() => {
    // fetch(
    //   "https://www.jeju.go.kr/rest/JejuHdMuseumCollection/getJejuHdMuseumCollectionList.json"
    // ).then((response) => {
    //   return response.json();
    //   //   const res = new XMLParser().parseFromString(response);
    //   //   console.log(res);
    //   //   return response.json();
    //   //   console(response.data);
    // });

    // fetch(
    //   ".json",
    //   { headers },
    //   {
    //     credentials: "include", // Credentials 옵션 변경!
    //   }
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((myJson) => {
    //     console.log(JSON.stringify(myJson));
    //   });

    axios
      .get(
        "https://www.jeju.go.kr/rest/JejuHdMuseumCollection/getJejuHdMuseumCollectionList.json",
        { headers },
        {
          credentials: "include", // Credentials 옵션 변경!
        }
      )
      .then(function (response) {
        responseClone = response.clone(); // 2
        // return response.json();
      })
      .then(
        function (data) {
          console.log(JSON.stringify(data)); // Do something with data
        },
        function (rejectionReason) {
          // 3
          console.log(
            "Error parsing JSON from response:",
            rejectionReason,
            responseClone
          ); // 4
          responseClone
            .text() // 5
            .then(function (bodyText) {
              console.log(
                "Received the following instead of valid JSON:",
                bodyText
              ); // 6
            });
        }
      );
  }, []);

  return (
    <>
      {/* {secondPic.map((picture) => (
        <Fragment key={picture.referenceIdentifier}>
          <img src={picture.referenceIdentifier} alt="#" />
          <p>작품명 | {picture.title}</p>
          <p>제작 날짜 | {picture.regDate}</p>
        </Fragment>
      ))} */}
    </>
  );
};

export default ShowSecond;
