<template>
  <div>Login</div>
  <p class="text">text</p>
</template>

<script lang="ts" setup="props">
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

const router = useRouter();
const goLogin = () => {
  router.push('/');
};

const state = reactive({
  color: '#ccc',
});
</script>
<style>
.text {
  color: v-bind('state.color');
}
</style>
