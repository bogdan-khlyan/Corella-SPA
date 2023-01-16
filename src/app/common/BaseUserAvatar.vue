<template>
  <div
    class="base-user-avatar"
    v-html="userAvatar"
  />
</template>

<script>
import { toSvg } from 'jdenticon'

export default {
  name: 'BaseUserAvatar',
  props: {
    avatar: { type: String, required: true },
    size: { type: Number, default: 36 },
  },
  computed: {
    userAvatar() {
      return toSvg(this.avatar, this.size)
    },
  },
}
</script>

<style lang="scss" scoped>
.base-user-avatar {
  width: max-content;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #bfb9b9;
  border-radius: 50%;
}
</style>
