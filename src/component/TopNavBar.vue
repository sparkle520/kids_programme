<!-- @Author: LT -->
<!-- @Date: 2024-01-05 16:55:59 -->
<!-- @Description:  -->

<script setup>
import {
  reactive,
  ref,
  toRefs,
  onBeforeMount,
  onMounted,
  onUnmounted,
  watch,
  nextTick,
} from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";
const user_store = useUserStore();
let last_position = 0

onBeforeMount(() => {});
onMounted(() => {
  document.addEventListener("scroll", nav_handle);
});
onUnmounted(() => {
});

const nav_handle = () => {
  let wScrY = window.scrollY;
  const nav_main = document.querySelector(".nav_main");
  const content = document.querySelector(".content");
  if(wScrY <= 70){
    nav_main.style.transform = 'translateY(0)';
    return 
  } 
  if (wScrY > last_position) {
    nav_main.style.transform = 'translateY(-100%)';

  } else {
    if(wScrY != 0){

    }else{

    }

    nav_main.style.transform = 'translateY(0)';
  }
  last_position = wScrY;
};
const emits = defineEmits(["music_change"]);

const nav_list = [
  {
    index: 0,
    name: "首页",
    e_name:'home',
    path: "/home",
  },
  {
    index: 1,
    name: "试卷",
    e_name:"paper",
    path: "/paper",
  },
  {
    index: 2,
    name: "我的",
    e_name:"login",
    path: "/login",
  },
 
 
  
];
const active_item = ref();
const pre_active_item = ref(-1);
const switch_nav_item = (index) => {
  const nav_list_item = document.querySelectorAll(".nav_item_com");
  nav_list_item[index].classList.add("nav_item_active");
  if (nav_list_item[index].classList.contains("nav_item")) {
    nav_list_item[index].classList.remove("nav_item");
  }
  pre_active_item.value = index;
};
const switch_nav_active = () => {
  const nav_list_item = document.querySelectorAll(".nav_item_com");
  if (pre_active_item.value != -1) {
    nav_list_item[pre_active_item.value].classList.remove("nav_item_active");
    nav_list_item[pre_active_item.value].classList.add("nav_item");
  }
  nextTick(() => {
    for (const item of nav_list) {
      if (active_item.value == item.e_name) {
        switch_nav_item(item.index);
        break;
      }
    }
    //   switch (active_item.value) {
    //     case "首页":
    //       switch_nav_item(0);
    //       break;
    //     case "":
    //       switch_nav_item(1);
    //       break;
    //     case "note":
    //       switch_nav_item(1);
    //       break;
    //     case "math":
    //       switch_nav_item(1);
    //       break;
    //     case "about":
    //       switch_nav_item(2);
    //       break;

    //     case "siteNav":
    //       switch_nav_item(3);
    //       break;
    //     case "updateLog":
    //       switch_nav_item(4);
    //       break;
    //     default:
    //       switch_nav_item(0);
    //       break;
    //   }
  });
};
watch(
  () => router.currentRoute.value.path,
  (to) => {
    active_item.value =
      to.split("/")[1] != null && to.split("/")[1] != undefined
        ? to.split("/")[1]
        : "home";
    switch_nav_active();
  },
  { immediate: true, deep: true }
);
const link_to = (path) => {
  router.push(path);
};




</script>
<template>
  <div id="top_nav_main" class="nav_main">
    <div class="content flex flex_direction_row relative">
      <div
        class="absolute nav_box flex flex_direction_row justify_content_space_between"
      >
        <div class="flex flex_direction_row justify_content_space_around">
        

          <ul class="nav_list flex flex_direction_row">
            <li
            :key="item"
              class="nav_item nav_item_com flex flex_direction_row align_items_center"
              v-for="(item,) in nav_list.slice(0, 4)"
              @click="link_to(item.path)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>

        <div class="flex flex_direction_row">
          <ul class="nav_list flex flex_direction_row">
            <li
            :key="item"

              class="nav_item nav_item_com flex flex_direction_row align_items_center"
              v-for="(item, ) in nav_list.slice(4)"
              @click="link_to(item.path)"
            >
              {{ item.name }}
            </li>
          </ul>
          
        </div>
      </div>
      
    </div>
  </div>
</template>
<style lang="scss" scoped>
$nav_bg_color: var(--nav_bg_color, #ffff);
$nav_fixed_shadow: var(--nav_fixed_shadow, #8e8e8e30);
$nav_item_color: var(--nav_item_color, #5e6d78);
$nav_item_active_color: var(--nav_item_active_color, #ff8033);
$nav_item_hover_color: var(--nav_item_hover_color, #ff8033);

.nav_fixed {
  background: $nav_bg_color;
  // backdrop-filter: blur(6px);
  // -webkit-backdrop-filter: blur(6px);
}

@font-face {
  font-family: "orbitron-black";
  src: url("/src/assets/font/orbitron-black.ttf");
}
@font-face {
  font-family: "orbitron-light";
  src: url("/src/assets/font/orbitron-light.ttf");
}
#top_nav_main {
  position: fixed;
  width: 100vw;
  background: $nav_bg_color;

  font-family: "orbitron-black";
  .content {
    width: 100vw;
    height: 70px;
    z-index: 11;

    .nav_box {
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      .logo {
        margin-left: 1vw;
        font-family: "orbitron-light";
        margin-right: 10vw;
        color: $nav_item_color;
        span {
          margin-left: 1vw;
        }
      }
      .nav_list {
        padding: 0;
        user-select: none;
        .nav_item_active {
          font-size: 15px;
          color: $nav_item_active_color;
          font-weight: 900;
          margin: 0 10px;
          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        .nav_item {
          font-size: 15px;
          color: $nav_item_color;
          font-weight: 900;

          margin: 0 10px;
          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

          &:hover {
            color: $nav_item_hover_color;
          }
        }
      }

      .switch {
        font-size: 17px;
        position: relative;
        margin: auto 0;
        margin-left: calc(10vw + 100px);

        width: 3.5em;
        height: 2em;
        margin-right: 1vw;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f4f4f5;
        transition: 0.4s;
        border-radius: 30px;
        &::before {
          position: absolute;
          content: "";
          height: 1.4em;
          width: 1.4em;
          border-radius: 20px;
          left: 0.3em;
          bottom: 0.3em;
          background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
          transition: 0.4s;
        }
      }

      input:checked + .slider {
        background-color: #303136;
      }
      input:checked + .slider:before {
        transform: translateX(1.5em);
        background: #303136;
        box-shadow: inset -3px -2px 5px -2px #8983f7,
          inset -10px -5px 0 0 #a3dafb;
      }
    }
    .music {
      left: 50%;
      top: 8px;
      transform: translateX(-50%);
      transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover{
        &::after{
          opacity: 1;
          bottom: -30px;

        }
      }
     
     
     

      
    }
  }
}


</style>
