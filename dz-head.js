/* 데이터라이즈 스크립트 설치 자리 (<head>에 모든 페이지 공통으로 포함)
   데이터라이즈에서 전달받은 site_id를 아래 DZ_SITE_ID에 넣으면 가이드의 예시 스크립트와 같은 방식으로 로더를 삽입합니다.
   https://datarize.gitbook.io/docs/startguide/install/selfmall */
(function(w,n){
  var DZ_SITE_ID = ""; // 예: "abcd1234" (데이터라이즈 전달값)
  if(!DZ_SITE_ID) return;
  var k="_dtrConfig"; w[k]=w[k]||[];
  w[k].push({id:DZ_SITE_ID,pType:"custom"});
  var s="//cdn.datarize.io/logger";
  var f=n.getElementsByTagName("script")[0];
  var a=n.createElement("script");a.async=true;a.src=s+"/genesis.common.min.js";
  f.parentNode.insertBefore(a,f);
})(window,document);
