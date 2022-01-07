<template>
  <el-popover
      :width="350"
      trigger="click"
      placement="bottom">
    <template #reference>
      <div class="header-notifications__icon header-notifications__icon--red">
        <a>
          <img src="@/assets/images/icons/header/icon-notification.svg" alt="">
          <span>16</span>
        </a>
      </div>
    </template>
    <div class="header-notifications">
      <div class="header-notifications__header">
        <span>Notifications</span>
      </div>
      <hr>
      <perfect-scrollbar class="header-notifications__scroll">
        <div class="header-notifications__content">
          <div class="header-notifications__item">
            <div class="date">16.12.2021</div>
            <div class="text">Bogdan Khlyan changed the status of the task from backlog to done</div>
          </div>
        </div>
      </perfect-scrollbar>
    </div>
  </el-popover>
</template>

<script>
export default {
  name: 'header-notifications',
}
</script>

<style scoped lang="scss">
.header-notifications {

  &__header {
    padding: 14px 20px;

    > span {
      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;

      color: #212121;
    }
  }

  > hr {
    margin: 0;
    width: 100%;
    height: 2px;

    background-color: #0AB258;
    border: none;
  }

  &__scroll {
    height: 200px;
  }

  &__content {
    padding-left: 20px;
    padding-right: 20px;
  }

  &__item {
    padding-top: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid #E9E9E9;

    &:last-child {
      border-bottom: none;
    }

    .date {
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-transform: capitalize;

      color: #7C7B86;
    }

    .text {
      margin-top: 8px;

      font-family: Rubik, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;

      color: #212121;
    }

  }





  &__icon {

    > a {
      position: relative;
      cursor: pointer;
      background-color: #0ACF83;

      > span {
        position: absolute;
        color: #FFFFFF;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        text-transform: capitalize;
        padding: 2px 6px;
        border-radius: 20px;
        top: -8px;
        left: 13px;
        transition: all 50ms linear;
      }

      > img {
        width: 24px;
        transition: width 150ms linear;
      }

      > img:hover {
        width: 28px;
      }

      > img:hover ~ span {
        padding: 0;
        border-radius: 50%;
        color: transparent;
        width: 8px;
        height: 8px;
        font-size: 0;
        top: 0px;
        left: 20px;
      }
    }

    &--red {
      width: 38px;

      > a {
        > span {
          background: #e53c0e;
        }
      }
    }

    &--green {
      width: 32px;

      > a {
        > span {
          background: #0AB258;
        }
      }
    }
  }

}
</style>
