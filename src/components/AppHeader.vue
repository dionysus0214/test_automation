<template>
  <div>
    <button v-show="loggedIn">로그아웃</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>
