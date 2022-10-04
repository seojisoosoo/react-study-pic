import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { axios } from "axios";

const ShowSecond = () => {
  const [secondPic, setSecondPic] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://www.jeju.go.kr/rest/JejuHdMuseumCollection/getJejuHdMuseumCollectionList.json"
      );
      //   console.log(response.data.collections);
      //   setShowPicture(response.data.collections);
      console.log(response);
    };
    fetchData();
  }, []);
  //   useEffect(() => {
  //     axios.get("/").then((response) => {
  //       return response.json();
  //       //   const res = new XMLParser().parseFromString(response);
  //       //   console.log(res);
  //       //   return response.json();
  //       //   console(response.data);
  //     });
  //   }, []);
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
