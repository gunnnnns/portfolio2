<template>
  <div>
    <header>
      <h1>포트폴리오</h1>
    </header>

    <div class="container">
      <nav>
        <div v-if="isLoggedIn" class="nav-container">
          <router-link to="/introduction" active-class="active" class="nav-link">나의 소개</router-link>
          <router-link to="/technique" active-class="active" class="nav-link">기술</router-link>
          <router-link to="/certificate" active-class="active" class="nav-link">자격증</router-link>
          <router-link to="/vision" active-class="active" class="nav-link">직업 목표</router-link>
          <button @click="handleLogout" class="nav-link2">로그아웃</button>
          
        </div>

        <router-link v-else to="/login" class="nav-link">로그인</router-link>
      </nav>

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { store } from './store'; // 전역 상태 가져오기

export default {
  setup() {
    const router = useRouter();

    onMounted(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        store.user = user;
      } else {
        router.push('/login');
      }
    });

    const handleLogout = () => {
      localStorage.removeItem('user');
      store.user = null;
      router.push('/login');
    };

    const isLoggedIn = computed(() => store.user !== null);

    return { isLoggedIn, handleLogout };
  }
};
</script>


<style>
  @import './App.css';
</style>
