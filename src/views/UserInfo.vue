<!-- @Author: LT -->
<!-- @Date: 2024-03-19 11:17:24 -->
<!-- @Description:  -->

<script setup>
import { reactive, toRefs, ref, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
const user_store = useUserStore();
const router = useRouter();
onBeforeMount(() => {});
onMounted(() => {});
const nav_data = ref([
  { id: 1, name: "个人信息" },
  { id: 2, name: "个人信息" },
  { id: 2, name: "个人信息" },
  { id: 2, name: "个人信息" },
  { id: 2, name: "个人信息" },
  { id: 2, name: "个人信息" },
]);
const foot_nav = ref([
  { name: "校企合作" },
  { name: "会员价格" },
  { name: "帮助中心" },
  { name: "关于我们" },
  { name: "联系我们" },
  { name: "隐私协议" },
  { name: "免责声明" },
]);
</script>
<template>
  <div
    id="user_info_main"
    class="flex flex_direction_column align_items_center"
  >
    <div class="user_info_container flex flex_direction_row">
      <div
        class="user_left_box com_box flex flex_direction_column align_items_center"
      >
        <img :src="user_store.avatar" class="user_avatar" alt="" />
        <div class="user_name">
          {{ user_store.name }}
        </div>
        <ul class="nav_ul_box flex flex_direction_column">
          <li
            :key="item"
            v-for="item in nav_data"
            :class="item.id == 1 ? 'nav_li_active_item' : 'nav_li_item'"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="user_right_box com_box flex flex_direction_column">
        <router-view> </router-view>
      </div>
    </div>
  </div>
  <div class="user_info_foot flex flex_direction_column align_items_center">
    <div class="user_info_foot_container flex flex_direction_row">
      <router-link
        :key="item"
        v-for="item in foot_nav"
        to=""
        class="foot_nav relative flex flex_direction_column align_items_center justify_content_center"
      >
        <span>{{ item.name }}</span>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#user_info_main {
  width: 100vw;
  min-height: 100vh;
  color: #525454;
  .user_info_container {
    width: 1200px;
    margin-top: 80px;
    z-index: 1;
    gap: 16px;
    align-items: flex-start;
    .com_box {
      width: calc(100% - 32px);
      padding: 16px;
      border-radius: 5px;
      background: #fff;
      box-shadow: rgba(94, 97, 95, 0.064) 0 0 10px;
    }
    .user_left_box {
      width: 300px;
      .user_avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 32px;
      }
      .user_name {
        font-size: 20px;
        font-weight: 500;
      }
    }
    .user_right_box {
      width: 884px;
    }
    .nav_ul_box {
      padding: 0;
      margin: 0;
      list-style-type: none;
      width: calc(100% - 32px);
      padding: 0 16px;
      margin-bottom: 32px;
      margin-top: 32px;
      gap: 16px;
      .nav_li_item {
        border-bottom: #cbcbcb 1px solid;
        width: calc(100% - 32px);
        padding: 16px 16px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        &:hover {
          color: #f68664;
        }
      }
      .nav_li_active_item {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        border-bottom: #cbcbcb 1px solid;
        width: calc(100% - 32px);
        padding: 16px 16px;
        background: linear-gradient(45deg, #ffb199, #fffcfc);
        color: #fff;
      }
    }
  }
}
.user_info_foot {
  background: #262727;
  margin-top: 16px;
  z-index: 1;
  color: #fff;
  width: 100vw;
  min-height: 150px;
  .user_info_foot_container {
    width: 1016px;
    padding: 32px 32px;
    flex-wrap: wrap;
    gap: 16px;
    .foot_nav {
      text-decoration: none;
      color: #d2d2d2;
      width: 242px;
    }
  }
}
</style>
