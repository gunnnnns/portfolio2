<template>
  <div class="login-container">
    <h2>로그인</h2>
    <form class="login-form" @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="username">사용자 이름:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="사용자 이름"
        />
      </div>
      <div class="input-group">
        <label for="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="비밀번호"
        />
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import { store } from '../store'; 
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      const user = await this.loginUser(this.username, this.password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        store.user = user; // 전역 상태 업데이트
        this.$router.push('/'); // 메인 페이지로 이동
      } else {
        alert('로그인 실패: 사용자 이름 또는 비밀번호가 올바르지 않습니다.');
      }
    },
    loginUser(username, password) {
      // 실제 로그인 로직: 서버에 요청을 보내고 응답을 처리하는 방식으로 수정할 수 있습니다.
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(username === 'user1' && password === 'password1');
        }, 1000); // 1초 지연을 가정한 예시
      });
    }
  }
};
</script>
