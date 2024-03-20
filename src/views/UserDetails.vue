<!-- @Author: LT -->
<!-- @Date: 2024-03-19 11:43:35 -->
<!-- @Description:  -->

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
const user_store = useUserStore();
const router = useRouter();
onBeforeMount(() => {});
onMounted(() => {});

</script>
<template>
  <div id="user_details_main" class="flex flex_direction_column">
    <div class="com_border_bottom flex flex_direction_row justify_content_space_between align_items_center">
      <h4 class="relative">账户信息</h4>
      <button class="update_info_btn">修改信息</button>
    </div>
      <div class="grid info_box com_border_bottom">
        <div class="text_strange">手机号:</div>
        <div>{{ user_store.phone }}</div>
      </div>
      <div class="grid info_box com_border_bottom">
        <div class="text_strange">头像:</div>
        <img :src="user_store.avatar" alt="">
      </div>
      <div class="grid info_box com_border_bottom">
        <div class="text_strange">邮箱地址:</div>
        <div>{{ user_store.e_mail }}</div>
      </div>
      <div class="grid info_box com_border_bottom">
        <div class="text_strange">注册时间:</div>
        <div>{{ user_store.register_data }}</div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
#user_details_main {
  width: 100%;
  
  h4 {
    margin: 0;
    font-weight: 500;
    &::after{
      content: '';
      position: absolute;
      width: 5px;
      height: 110%;
      left: -10px;

      background: #ff8033;
    }
  }
  .com_border_bottom{
    // border-bottom: #939393 1px solid;
    padding-bottom: 8px;
  }
  .update_info_btn{
    border: none;
    font-size: 12px;
    color: #fff;
    background: #bebebe;
    padding: 8px 16px;
    border-radius: 5px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover{
      background: #939393;
    }
  }
  .info_box{
    grid-template-columns:200px auto;
    gap: 48px;
    padding: 16px 32px;
    .text_strange{
      font-weight: 900;
    }
    img{
      width: 150px;
      height: 150px;
    }
  }
}
</style>
