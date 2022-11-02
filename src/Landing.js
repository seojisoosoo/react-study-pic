import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Landing = () => {
  const nameRef = useRef(null);
  // const navigate = useNavigate();
  // const saveClick = (url, name) => {
  //   navigate(url, { state: { name: name } });
  // };
  const [name, setName] = useState("");
  const nameSave = () => {
    setName(nameRef.current.value);
    console.log(name);
  };
  return (
    <div>
      <p>미술관에 온 것을 환영합니다!!!!!!!!!!!!</p>
      <input placeholder="이름을 입력하세요" ref={nameRef} />
      {/* <button onClick={() => saveClick("/visitors", nameRef.current.value)}> */}
      <button onClick={nameSave}>저장</button>
      <p>{name}님 반갑습니다</p>
      {/* <Link to="/visitors">
        <button>방명록 쓰기</button>
      </Link> */}
    </div>
  );
};

export default Landing;
