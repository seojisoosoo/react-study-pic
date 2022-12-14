import React, { useEffect } from 'react'
// const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY

const KakaoShare = () => {
  // window.Kakao.init(KAKAO_KEY)
  // const kakao = window.Kakao
  // console.log(kakao.isInitialized)
  // console.log(window.Kakao)
  useEffect(() => {
    createKakaoButton()
  }, [])
  const createKakaoButton = () => {
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(KAKAO_KEY)
        console.log(kakao.isInitialized)
        console.log(window.Kakao)
      }
      window.Kakao.Share.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '이중섭 미술관',
          description: '환영해요',
          // imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            // mobileWebUrl: window.location.href,
            // webUrl: window.location.href,
            webUrl:process.env.REACT_APP_FETCH_URL,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl:process.env.REACT_APP_FETCH_URL,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl:process.env.REACT_APP_FETCH_URL,
            },
          },
        ],
      })
    }
  }
  return (
    <div className="kakao-share-button">
      {/* Kakao share buttonㅇ */}
      <button id="kakao-link-btn">
        카톡 공유
      </button>
    </div>
  )
}
export default KakaoShare