<template>
  <div class="home">
    <h1>{{ greeting }}</h1>
    <p>{{ message }}</p>
    <button @click="clickTitle('hello')">button</button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

    <cDialog :show="show" @close="() => {}">
      <template #content>
        <view class="dialog-title">温馨提示</view>
        <view class="dialog-content">
          <text class="agreement-text land-exposure" data-track-widget_uid="login_protocol_pop"
            data-track-widget_title="登录协议提示弹窗">阅读并同意 <text class="link" >匠猫用户服务</text>、<text
              class="link" >隐私政策</text></text>
          <text class="agreement-text">可继续体验</text>
        </view>
      </template>
      <template #footer>
        <view class="dialog-btn">
          同意并继续
        </view>
      </template>
    </cDialog>

  </div>
</template>

<script lang="ts" setup>
// import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// export default defineComponent({
//   name: 'HomeView',
//   components: {
//     // HelloWorld,
//   },
// });
// 使用 `<script setup>` 语法定义组件逻辑
import { ref } from 'vue'
import cDialog from "@/components/c-dialog.vue";

// 使用 `ref` 创建响应式数据
const greeting = ref('Hello world')
const message = ref('Welcome to my Vue 3 app!!!!!!!!!')
const show = ref(false)

function clickTitle(params: string) {
  console.log(params)
  greeting.value = 'Hello Vue 3!'
  show.value = true
}

</script>
