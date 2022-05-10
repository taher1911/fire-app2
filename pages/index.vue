<template>
  <div class="home">
    <Home v-if="user.role != 'admin'" />
    <AdminHome v-if="user.role == 'admin'" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapState(['user']),
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
