import React, { useState, useRef, Fragment } from "react";
import data from "./db/data.json";
import styled from "styled-components";
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
  const [like, love] = useState(0);
  // 텍스트
  const [text, setText] = useState("");
  // 다크모드
  const [dark, setDark] = useState(false);
  // 다크모드 - color
  const [btnColor, setBtnColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  // 데이터
  const [showpicture, setShowPicture] = useState([]);
  // 제목
  const [bye, setBye] = useState({
    color: "blue",
    comment: "즐거우셨나요?",
  });

  const show = () => {
    setShowPicture(data.pictures);
  };
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
  const textRef = useRef(null);
  const commentSubmit = () => {
    setText(textRef.current.value);
  };

  const byeClick = () => {
    setBye((prev) => ({ ...prev, comment: "감사합니다" }));
  };

  return (
    <>
      <Dom btncolor={btnColor}>
        <button onClick={show}>미술관 입장</button>
        {/* <button btncolor="black" onClick={darkMode}>
        MODE
      </button> */}
        <button onClick={darkMode}>MODE</button>

        <br />
        {showpicture.map((picture) => (
          <Fragment key={picture.id}>
            <Img src={picture.img} alt="#" />
            <Font fontcolor={fontColor}>{picture.title}</Font>
            <Font fontcolor={fontColor}>{picture.photographer}</Font>
            <Font fontcolor={fontColor}>{picture.content}</Font>
          </Fragment>
        ))}

        <Font fontcolor={fontColor}>방명록</Font>
        <h1 onClick={() => love(like + 1)}>❤️</h1>
        <Font fontcolor={fontColor}>{like}</Font>
        <input type="text" placeholder="코멘트를 입력해주세요" ref={textRef} />
        <button onClick={commentSubmit}>입력</button>
        <Font fontcolor={fontColor}>{text}</Font>
        <Font fontcolor={bye.color}>{bye.comment}</Font>
        <button onClick={byeClick}>네</button>
      </Dom>
    </>
  );
};

export default Show;
