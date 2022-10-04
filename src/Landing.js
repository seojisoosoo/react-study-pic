import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Landing = () => {
  const nameRef = useRef(null);
  const navigate = useNavigate();
  const saveClick = (url, name) => {
    navigate(url, { state: { name: name } });
  };
  return (
    <div>
      <p>미술관에 온 것을 환영합니다!!!!!!!!!!!!</p>
      <input placeholder="이름을 입력하세요" ref={nameRef} />
      <button onClick={() => saveClick("/visitors", nameRef.current.value)}>
        저장
      </button>
      {/* <Link to="/visitors">
        <button>방명록 쓰기</button>
      </Link> */}
    </div>
  );
};

export default Landing;
