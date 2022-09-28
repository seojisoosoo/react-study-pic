import React, { useState, useRef, Fragment, useEffect } from "react";
import data from "./db/data.json";
import styled from "styled-components";
import music from "./media/우물-8.mp3";
import axios from "axios";

const Img = styled.img`
  width: 50%;
`;
const Dom = styled.div`
  // background-color: black;
  background-color: ${(props) => props.btncolor || "white"};
`;
const Font = styled.p`
  color: ${(props) => props.fontcolor || "black"};
`;
const Show = () => {
  // 좋아요
  // const [like, love] = useState(0);
  // 텍스트
  // const [text, setText] = useState("");
  // 다크모드
  const [dark, setDark] = useState(false);
  // 다크모드 - color
  const [btnColor, setBtnColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  // 데이터
  const [showpicture, setShowPicture] = useState([]);
  // 제목
  // const [bye, setBye] = useState({
  //   color: "blue",
  //   comment: "즐거우셨나요?",
  // });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/jslee/gallery/goods.htm?format=json`);
      console.log(response.data.collections);
      setShowPicture(response.data.collections);
      console.log("success");
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   axios.get(`/jslee/gallery/goods.htm?format=json`).then((response) => {
  //     console.log(response.data.collections);
  //     setShowPicture(response.data.collections);
  //     console.log("success");
  //   });
  // }, []);

  // const show = () => {
  //   axios.get(`/jslee/gallery/goods.htm?format=json`).then((res) => {
  //     setShowPicture(res.data.collections);
  //     console.log(res.data.collections);
  //   });
  //   // setShowPicture(data.pictures);
  // };

  const darkMode = () => {
    console.log(dark);
    setDark((dark) => !dark);
    if (dark) {
      setFontColor("black");
      setBtnColor("white");
    } else {
      setFontColor("white");
      setBtnColor("black");
    }
  };
  // const textRef = useRef(null);
  // const commentSubmit = () => {
  //   setText(textRef.current.value);
  // };

  // const byeClick = () => {
  //   setBye((prev) => ({ ...prev, comment: "감사합니다" }));
  // };

  const audioRef = useRef(null);
  const playClick = () => {
    audioRef.current.play();
  };
  const stopClick = () => {
    audioRef.current.pause();
  };

  // useEffect(() => {
  //   alert("좋아요를 눌렀습니다!");
  // }, [like]);

  return (
    <>
      <Dom btncolor={btnColor}>
        {/* <button onClick={show}>미술관 입장</button> */}
        <button>미술관 입장</button>
        <button onClick={darkMode}>MODE</button>
        <audio src={music} ref={audioRef} />
        <button onClick={playClick}>재생</button>
        <button onClick={stopClick}>중지</button>
        <br />
        {showpicture.map((picture) => (
          // <Fragment key={picture.id}>
          //   <Img src={picture.img} alt="#" />
          //   <Font fontcolor={fontColor}>{picture.title}</Font>
          //   <Font fontcolor={fontColor}>{picture.photographer}</Font>
          //   <Font fontcolor={fontColor}>{picture.content}</Font>
          // </Fragment>
          <Fragment key={picture.no}>
            <Img
              src={
                "https://culture.seogwipo.go.kr/files/collection/" +
                picture.coverThumb
              }
              alt="#"
            />
            <Font fontcolor={fontColor}>
              <strong>작품명 | </strong>
              {picture.name}
            </Font>
            <Font fontcolor={fontColor}>
              <strong>작가 | </strong>
              {picture.author}
            </Font>
            <Font fontcolor={fontColor}>
              <strong>재료 | </strong>
              {picture.material}
            </Font>
          </Fragment>
        ))}
      </Dom>
    </>
  );
};

export default Show;
