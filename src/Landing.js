import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Animation from "./Animation";
import styled from "styled-components";
import "./Landing.css";
// import "animate.css";

const Landing = () => {
  const nameRef = useRef(null);
  // const navigate = useNavigate();
  // const saveClick = (url, name) => {
  //   navigate(url, { state: { name: name } });
  // };
  const [name, setName] = useState("");
  const [hi, setHi] = useState("");
  const nameSave = () => {
    setName(nameRef.current.value);
    console.log(name);
    setHi("님 반갑습니다");
  };

  return (
    <Dom>
      <Font className="animate__animated animate__tada">
        미술관에 온 것을 환영합니다!!!!!!!!!!!!
      </Font>
      <input placeholder="이름을 입력하세요" ref={nameRef} />
      {/* <button onClick={() => saveClick("/visitors", nameRef.current.value)}> */}
      <button onClick={nameSave}>저장</button>
      <Font className="animate_strech">
        {name}
        {hi}
      </Font>
      {/* <Animation /> */}
      {/* <Link to="/visitors">
        <button>방명록 쓰기</button>
      </Link> */}
    </Dom>
  );
};

export default Landing;

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Font = styled.h1`
  color: white;
  margin: 30px 0px;
  text-align: center;
`;
