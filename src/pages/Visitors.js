import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Font = styled.p`
  color: ${(props) => props.fontcolor || "black"};
`;

const Visitors = () => {
  // const { state } = useLocation();
  const [like, love] = useState(0);
  const [text, setText] = useState("");
  const textRef = useRef(null);

  const [bye, setBye] = useState({
    color: "blue",
    comment: "즐거우셨나요?",
  });

  const commentSubmit = () => {
    setText(textRef.current.value);
  };

  const byeClick = () => {
    setBye((prev) => ({ ...prev, comment: "감사합니다" }));
  };
  //   useEffect(() => {
  //     alert("좋아요를 눌렀습니다!");
  //   }, [like]);

  return (
    <>
      {/* <h1>{state.name}반갑습니다!</h1> */}
      <Font>방명록</Font>
      <h1 onClick={() => love(like + 1)}>❤️</h1>
      <Font>{like}</Font>
      <input type="text" placeholder="코멘트를 입력해주세요" ref={textRef} />
      <button onClick={commentSubmit}>입력</button>
      <Font>{text}</Font>
      <Font fontcolor={bye.color}>{bye.comment}</Font>
      <button onClick={byeClick}>네</button>
    </>
  );
};

export default Visitors;
