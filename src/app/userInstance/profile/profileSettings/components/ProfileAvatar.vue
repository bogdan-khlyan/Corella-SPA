<template>
  <div class="info-profile__avatar">
    <div class="profile-avatar">
      <div class="profile-avatar__image">
        <img
          :src="
            avatarLink || require('@/assets/images/profile/default-avatar.jpg')
          "
          alt="User Avatar"
        />
      </div>
      <button
        type="button"
        class="profile-avatar__btn-edit"
        @click="onButtonClick"
      >
        <svg-icon
          :icon="require('@/assets/images/icons/profile/icon-edit.svg')"
          :width="20"
          :height="20"
        />
      </button>
      <input
        ref="input"
        type="file"
        style="display: none"
        accept=".jpg,.jpeg,.png"
        @change="changeAvatar"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAvatar',
  data() {
    return {
      avatarLink: '',
      $avatar: '',
    }
  },
  methods: {
    onButtonClick() {
      this.$refs.input.click()
    },
    changeAvatar(e) {
      const file = e.target.files[0]

      this.avatarLink = URL.createObjectURL(file)
      this.$avatar = file

      e.target.value = null
    },
  },
}
</script>

<style lang="scss">
.profile-avatar {
  position: relative;

  &__image {
    width: 90px;
    height: 90px;
    display: block;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 4px solid #20c560;
    }
  }

  &__btn-edit {
    position: absolute;
    bottom: -10px;
    right: -15px;
    background-color: #7280ff;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    min-height: 42px;
    min-width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: #fff;
    }
  }
}
</style>
