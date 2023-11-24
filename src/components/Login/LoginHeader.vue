<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  props: {
    isLoggedIn: Boolean
  },
  setup(props) {
    const router = useRouter();

    onMounted(() => {
      if (!props.isLoggedIn) {
        router.push('/login');
      }
    });

    return {};
  }
};
</script>
