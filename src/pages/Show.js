import React, { useState, useRef, Fragment, useEffect } from "react";
import styled from "styled-components";
import music from "../media/우물-8.mp3";
import axios from "axios";
import { useRecoilState } from "recoil"; // 훅 import
import details from "../atoms/details";
import { useNavigate } from "react-router-dom";

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
  const [showpicture, setShowPicture] = useRecoilState(details);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/jslee/gallery/goods.htm?format=json`);
      console.log(response.data.collections);
      setShowPicture(response.data.collections);
    };
    fetchData();
  }, []);

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
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const pictureClick = (url, id) => {
    console.log("클릭됐음!");
    console.log("showpicture" + showpicture.filter((pic) => pic.no === id)[0]);

    navigate(url, { state: { id: id } });
  };

  return (
    <>
      <Dom btncolor={btnColor}>
        {/* <button onClick={show}>미술관 입장</button> */}
        <button>미술관 입장</button>
        <button onClick={darkMode}>MODE</button>
        <audio src={music} ref={audioRef} />
        <button onClick={playClick}>재생</button>
        <button onClick={stopClick}>중지</button>
        <button onClick={()=>{navigate('/visitors')}}>방명록</button>
        <br />
        {showpicture.map((picture) => (
          <Fragment key={picture.no}>
            <Img
              src={
                "https://culture.seogwipo.go.kr/files/collection/" +
                picture.coverThumb
              }
              alt="#"
              onClick={() => pictureClick(`/show/${picture.no}}`, picture.no)}
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
