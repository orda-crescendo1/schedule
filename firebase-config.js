// ─────────────────────────────────────────────────────────────
//  피아노 학원 일정표 설정 파일
//  · adminId : 사이트 관리자 아이디. 이 아이디로 가입한 사람만 관리자가 돼요(한 명).
//              관리자가 가입자 중에서 원장을 지정해요. 나머지는 모두 원장·관리자 승인 후 접속.
//  · firebase : Firebase 콘솔 → 프로젝트 설정 → '내 앱' 의 설정값(firebaseConfig)을
//               아래 null 자리에 그대로 붙여 넣으세요.
//               null 이면 '체험 모드'(이 기기에만 저장)로 동작해요.
// ─────────────────────────────────────────────────────────────
window.APP_CONFIG = {
  adminId: 'orda-admin',
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
