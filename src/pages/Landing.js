import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Animation from "./Animation";
import styled from "styled-components";
import "./Landing.css";
// import "animate.css";

const Landing = () => {
  const navigate=useNavigate();
  const nameRef = useRef(null);
  // const navigate = useNavigate();
  // const saveClick = (url, name) => {
  //   navigate(url, { state: { name: name } });
  // };
  const [userName, setUserName] = useState("");
  const [hi, setHi] = useState("");
  const [check, setCheck] = useState(false);

  const saveData = () => {
    setUserName(nameRef.current.value);
    setHi("님 반갑습니다");
    // let userObj = { userName };
    let userObj = localStorage.getItem("watched");

    if (userObj == null) {
      userObj = [];
    } else {
      // userObj에서 자료를 꺼내 따옴표를 제거하고 다시 userObj에 저장한다.
      userObj = JSON.parse(userObj);
    }

    // 3.현재 상품 id를 userObj에 저장한다.
    userObj.push(userName);
    window.localStorage.setItem("userName", JSON.stringify(userObj));
  };

  const callData = () => {
    setCheck(true);
  };

  const onChange = (e) => {
    setUserName(e.target.value);
    setCheck(false);
  };
  let localStorageName = window.localStorage.getItem("userName");

  useEffect(()=>{
    const script=document.createElement("script");
    script.src="https://developers.kakao.com/sdk/js/kakao.js";
    script.async=true;
    document.body.appendChild(script);
    return()=>document.body.removeChild(script);
  },[]);

  const shareToKakao=()=>{
    if(window.Kakao){
      const kakao=window.Kakao;
      if(!kakao.isInitialized()){
        kakao.init("198bc29d107940180669210c4e3e6539");
      }
      kakao.Link.sendDefault({
        objectType:"feed",
        content:{
          title:"이중섭미술관",
          decription:"이중섭미술관에 오신것을 환영합니다. ",
          imageUrl:"이미지 주소",
          link:{
            mobileWebUrl: "https://ljs-pictures.netlify.app",
            weUrl:"https://ljs-pictures.netlify.app",
          }
        }
      })
    }
  }
  return (
    <Dom>
      <Font className="animate__animated animate__tada">
        미술관에 온 것을 환영합니다!!!!!!!!!!!!
      </Font>
      <input
        placeholder="이름을 입력하세요"
        ref={nameRef}
        onChange={onChange}
      />
      {/* <button onClick={() => saveClick("/visitors", nameRef.current.value)}> */}
      <button onClick={saveData}>저장하기</button>
      <button onClick={callData}> 불러오기</button>
      <Font>
        {check ? <p>{localStorageName}</p> : <> </>}
        {userName}
        {hi}
      </Font>
      <button onClick={()=>{navigate('/show')}}>둘러보기</button>
      <button onCanPlay={shareToKakao()}>카카오톡 공유하기</button>
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
  margin: 30px 0px;
  text-align: center;
`;
