<template>
    <div class="main-page">
      <h1>환영합니다!</h1>
      <p>이곳은 한건희의 포트폴리오 메인 페이지입니다.</p>
  
      <div class="info-section">
        <h2>소개</h2>
        <p>저는 웹 개발에 열정적인 개발자입니다. 다양한 프로젝트를 통해 경험을 쌓고 있으며, 새로운 기술을 배우는 것을 좋아합니다.</p>
  
        <h2>기술 스택</h2>
        <ul>
          <li>Database</li>
          <li>Javat</li>
          <li>Springboot</li>
          <li>JPA</li>
        </ul>
  
        <h2>연락처</h2>
        <p>이메일: fldzjs807@naver.com</p>
        <p>전화번호: 010-5211-1901</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainPage',
  };
  </script>
  
  <style scoped>
  .main-page {
    padding: 60px;
    text-align: center;
  }
  .main-page h1 {
  font-size: 60px; /* h1 태그의 글씨 크기를 36px로 설정 */
}

.main-page p {
  font-size: 40px; /* p 태그의 글씨 크기를 20px로 설정 */
}

  .info-section h1 {
    margin-top: 60px;
  }
  
  .info-section h2 {
  color: #333;
  margin-bottom: 10px;
  font-size: 50px; /* h2 태그의 글씨 크기를 24px로 설정 */
}
  
  .info-section p, .info-section ul {
  color: #666;
  font-size: 40px; /* p 태그와 ul의 글씨 크기를 18px로 설정 */
}
  .info-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .info-section ul li {
  margin-bottom: 5px;
  font-size: 40px; /* ul 내부의 li 태그의 글씨 크기를 16px로 설정 */
}
  </style>
  