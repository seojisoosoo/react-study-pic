import React from "react";
import { useRecoilValue } from "recoil";
import details from "../atoms/details";
import { useLocation } from "react-router-dom";

const ShowDetail = () => {
  const detailArr = useRecoilValue(details);
  console.log(detailArr);
  const { state } = useLocation();
  const no = state.id;
  const detailImg = detailArr.filter((d) => d.no === no)[0];

  return (
    <>
      <img
        src={
          "https://culture.seogwipo.go.kr/files/collection/" +
          detailImg.coverThumb
        }
        alt="#"
      />
      <p>작품명 | {detailImg.name}</p>
      <p>작가명 | {detailImg.author}</p>
      <p>재료 | {detailImg.material}</p>
    </>
  );
};

export default ShowDetail;
