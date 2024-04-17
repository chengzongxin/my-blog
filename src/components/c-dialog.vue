<template>
  <view class="c-dialog" v-if="!close">
    <view class="c-dialog-content" :class="{ show: showContent }">
      <view v-if="closeIcon" class="c-dialog-close" @click="$emit('close')"></view>
      <view class="c-dialog-title">
        <slot name="title"></slot>
      </view>
      <view class="c-dalog-body">
        <slot name="content"></slot>
      </view>
      <view class="c-dialog-btn">
        <slot name="footer" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, defineEmits, defineProps } from "vue";

const emit = defineEmits(["close", "success"]);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  closeIcon: {
    type: Boolean,
    default: true,
  },
});

const close = ref(true);
const showContent = ref(false);

watch(props, () => {
  if (props.show) {
    close.value = false;
    nextTick(() => {
      showContent.value = !showContent.value;
    });
  } else {
    showContent.value = !showContent.value;
    nextTick(() => {
      close.value = true;
    });
  }
});
</script>

<style lang="less" scoped>
.c-dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 72rpx;

  .c-dialog-content {
    width: 100%;
    background: #fff;
    padding: 40rpx;
    border-radius: 32rpx;
    position: relative;
    transition: opacity 300ms linear;
    opacity: 0;

    &.show {
      opacity: 1;
    }

    .c-dialog-close {
      width: 28rpx;
      height: 28rpx;
      background: url(https://pic.to8to.com/te/osf/53325ab503cc4f38988bfbe29be564ef.png) center no-repeat;
      background-size: 100%;
      position: absolute;
      right: 32rpx;
      top: 32rpx;
    }

    .c-dialog-title {
      text-align: center;
      font-size: 36rpx;
      color: #1a1c1a;
      font-weight: bold;
    }

    .c-dalog-body {
      margin: 60rpx 0;
    }
  }
}
</style>
