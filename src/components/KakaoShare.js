import {useEffect} from 'react';

const KakaoShare= () => {
  const url = window.location.href; //현재 url가져오기
  useEffect(() => {
    initKakao(); //
  }, []);

//자바스크립트키로 카카오 init
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_TOKEN);
      }
    }
  };

//버튼을 누르면 실행되는 함수
  const shareKakao = () => {
//이부분이 매우 헷갈림 여러 사이트를 참고했는데 이 sendDefault부분을 잘 봐야한다.
window.Kakao.Link.sendDefault({ 
  objectType: 'feed',
  content: {
    title: '딸기 치즈 케익',
    description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
    imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
    link: {
      mobileWebUrl: url,
      webUrl: url,
    },
  },
  social: {
    likeCount: 286,
    commentCount: 45,
    sharedCount: 845,
  },
  buttons: [
    {
      title: '웹으로 보기',
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    {
      title: '앱으로 보기',
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
  ],
});
};

return (

    <div className="share-node" onClick={shareKakao}>
        <img src="이미지" alt="카카오공유" />
        <p>카톡</p>
    </div>
);
};

export default KakaoShare;


