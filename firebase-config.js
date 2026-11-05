// ─────────────────────────────────────────────────────────────
//  피아노 학원 일정표 설정 파일
//  · 가장 먼저 가입한 사람이 원장(마스터)이 돼요. 올린 뒤 원장님이 제일 먼저 가입해 주세요.
//  · firebase : Firebase 콘솔 → 프로젝트 설정 → '내 앱' 의 설정값(firebaseConfig)을
//               아래 null 자리에 그대로 붙여 넣으세요.
//               null 이면 '체험 모드'(이 기기에만 저장)로 동작해요.
// ─────────────────────────────────────────────────────────────
window.APP_CONFIG = {
  firebase: null
  /* 예시)
  firebase: {
    apiKey: "AIza....",
    authDomain: "my-piano.firebaseapp.com",
    projectId: "my-piano",
    storageBucket: "my-piano.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef"
  }
  */
};
