<!-- @Author: LT -->
<!-- @Date: 2024-03-18 08:39:18 -->
<!-- @Description:  -->

<script setup>
import { reactive, toRefs, ref, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const router = useRouter();
onBeforeMount(() => {});
onMounted(() => {});
const foot_nav = ref([
  { name: "校企合作" },
  { name: "会员价格" },
  { name: "帮助中心" },
  { name: "关于我们" },
  { name: "联系我们" },
  { name: "隐私协议" },
  { name: "免责声明" },
]);
const handle_login = () => {
  let res = form_validate(form);
  if (res == true) {
    load.value = true;
  } else {
  }
};
const form = ref({
  username: "",
  password: "",
});
const form_validate = (form) => {
  if (form.value.username == "") {
    ElMessage({
      message: "用户名不能为空",
      type: "error",
    });
    return false;
  }
  if (form.value.password == "") {
    ElMessage({
      message: "密码不能为空",
      type: "error",
    });
    return false;

  }
  if (!/^1[3456789]\d{9}$/.test(form.value.username)){
    ElMessage({
      message: "手机号码有误，请重填",
      type: "error",
    });
    return false;
  }
  return true;
};
const load = ref(false);
</script>
<template>
  <div
    id="login_main"
    class="flex flex_direction_column align_items_center justify_content_center"
  >
    <div class="login_container flex flex_direction_row justify_content_center">
      <!-- <div class="login_left">
            <img src="https://pic.imgdb.cn/item/65d5a2f19f345e8d0320a3c9.jpg" alt="">
        </div> -->
      <div class="login_right flex flex_direction_column">
        <h2 class="relative">用户登录</h2>
        <form
          id="login_form"
          method="get"
          action="
            "
        >
          <div class="input_box flex flex_direction_column">
            <div
              class="input_inner_box flex flex_direction_row align_items_center"
            >
              <label>手机号:</label>
              <input
                class="input_btn"
                v-model="form.username"
                type="text"
                placeholder="请输入手机号"
              />
            </div>
            <div
              class="input_inner_box flex flex_direction_row align_items_center"
            >
              <label>登陆密码:</label>

              <input
                class="input_btn"
                type="password"
                v-model="form.password"
                placeholder="请输入登录密码"
              />
            </div>
            <button
              class="login_btn flex flex_direction_row align_items_center justify_content_center"
              type="submit"
              form="login_form"
              @click="handle_login"
            >
              <svg
                v-if="load"
                t="1710904803503"
                class="login_load_icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4255"
                width="18"
                height="18"
              >
                <path
                  d="M876.864 782.592c3.264 0 6.272-3.2 6.272-6.656 0-3.456-3.008-6.592-6.272-6.592-3.264 0-6.272 3.2-6.272 6.592 0 3.456 3.008 6.656 6.272 6.656z m-140.544 153.344c2.304 2.432 5.568 3.84 8.768 3.84a12.16 12.16 0 0 0 8.832-3.84 13.76 13.76 0 0 0 0-18.56 12.224 12.224 0 0 0-8.832-3.84 12.16 12.16 0 0 0-8.768 3.84 13.696 13.696 0 0 0 0 18.56zM552.32 1018.24c3.456 3.648 8.32 5.76 13.184 5.76a18.368 18.368 0 0 0 13.184-5.76 20.608 20.608 0 0 0 0-27.968 18.368 18.368 0 0 0-13.184-5.824 18.368 18.368 0 0 0-13.184 5.76 20.608 20.608 0 0 0 0 28.032z m-198.336-5.76c4.608 4.8 11.072 7.68 17.6 7.68a24.448 24.448 0 0 0 17.536-7.68 27.456 27.456 0 0 0 0-37.248 24.448 24.448 0 0 0-17.536-7.68 24.448 24.448 0 0 0-17.6 7.68 27.52 27.52 0 0 0 0 37.184z m-175.68-91.84c5.76 6.08 13.824 9.6 21.952 9.6a30.592 30.592 0 0 0 22.016-9.6 34.368 34.368 0 0 0 0-46.592 30.592 30.592 0 0 0-22.016-9.6 30.592 30.592 0 0 0-21.952 9.6 34.368 34.368 0 0 0 0 46.592z m-121.152-159.36c6.912 7.36 16.64 11.648 26.368 11.648a36.736 36.736 0 0 0 26.432-11.584 41.28 41.28 0 0 0 0-55.936 36.736 36.736 0 0 0-26.432-11.584 36.8 36.8 0 0 0-26.368 11.52 41.28 41.28 0 0 0 0 56zM12.736 564.672a42.88 42.88 0 0 0 30.784 13.44 42.88 42.88 0 0 0 30.784-13.44 48.128 48.128 0 0 0 0-65.216 42.88 42.88 0 0 0-30.72-13.44 42.88 42.88 0 0 0-30.848 13.44 48.128 48.128 0 0 0 0 65.216z m39.808-195.392a48.96 48.96 0 0 0 35.2 15.36 48.96 48.96 0 0 0 35.2-15.36 54.976 54.976 0 0 0 0-74.56 48.96 48.96 0 0 0-35.2-15.424 48.96 48.96 0 0 0-35.2 15.424 54.976 54.976 0 0 0 0 74.56zM168.32 212.48c10.368 11.008 24.96 17.408 39.68 17.408 14.592 0 29.184-6.4 39.552-17.408a61.888 61.888 0 0 0 0-83.84 55.104 55.104 0 0 0-39.616-17.408c-14.656 0-29.248 6.4-39.616 17.408a61.888 61.888 0 0 0 0 83.84zM337.344 124.8c11.52 12.16 27.712 19.264 43.968 19.264 16.256 0 32.448-7.04 43.968-19.264a68.672 68.672 0 0 0 0-93.184 61.248 61.248 0 0 0-43.968-19.264 61.248 61.248 0 0 0-43.968 19.264 68.736 68.736 0 0 0 0 93.184z m189.632-1.088c12.672 13.44 30.528 21.248 48.448 21.248s35.712-7.808 48.384-21.248a75.584 75.584 0 0 0 0-102.464A67.392 67.392 0 0 0 575.36 0c-17.92 0-35.776 7.808-48.448 21.248a75.584 75.584 0 0 0 0 102.464z m173.824 86.592c13.824 14.592 33.28 23.104 52.736 23.104 19.584 0 39.04-8.512 52.8-23.104a82.432 82.432 0 0 0 0-111.744 73.472 73.472 0 0 0-52.8-23.168c-19.52 0-38.912 8.512-52.736 23.168a82.432 82.432 0 0 0 0 111.744z m124.032 158.528c14.976 15.872 36.032 25.088 57.216 25.088 21.12 0 42.24-9.216 57.152-25.088a89.344 89.344 0 0 0 0-121.088 79.616 79.616 0 0 0-57.152-25.088c-21.184 0-42.24 9.216-57.216 25.088a89.344 89.344 0 0 0 0 121.088z m50.432 204.032c16.128 17.088 38.784 27.008 61.632 27.008 22.784 0 45.44-9.92 61.568-27.008a96.256 96.256 0 0 0 0-130.432 85.76 85.76 0 0 0-61.568-27.072c-22.848 0-45.44 9.984-61.632 27.072a96.192 96.192 0 0 0 0 130.432z"
                  fill="#fff"
                  p-id="4256"
                ></path>
              </svg>
              立即登录
            </button>
            <div class="jump_box flex flex_direction_row">
              <router-link to="" class="jump_link">免费注册</router-link>
              <router-link to="" class="jump_link">忘记密码</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="login_foot flex flex_direction_column align_items_center">
    <div class="login_foot_container flex flex_direction_row">
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
#login_main {
  width: 100vw;
  min-height: 100vh;
  color: #4a4a4a;
  .el-alert {
    z-index: 1000;
    top: 150px;
    width: 300px;
    position: fixed;
  }
  .el-alert:first-child {
    margin: 0;
  }
  &::after {
    width: 100vw;
    height: 100vh;
    content: "";
    left: 0;
    top: 0;
    position: fixed;
    z-index: 0;
    overflow: hidden;

    opacity: 1;
    background: url("https://pic.imgdb.cn/item/65f82fd79f345e8d03157d27.jpg");
    background-size: cover;
    transform: scale(1.2);
    filter: blur(70px);
  }
  .login_container {
    width: 1232px;
    height: 500px;
    z-index: 1;
    align-items: flex-start;
    gap: 32px;
    transform: translateY(50px);
    // .login_left{
    //     width: 600px;
    //     height: 450px;
    //     img{
    //         width: 600px;
    //         height: 450px;
    //         object-fit:cover;
    //         border-radius: 5px;
    //         box-shadow: #2627270a 0 0 10px;
    //     }
    // }
    .login_right {
      width: 600px;
      height: 450px;
      background: #fff;
      box-shadow: #2627273c 0 0 10px;
      border-radius: 5px;
      #login_form {
        margin: 0 auto;
      }
      h2 {
        width: 540px;
        font-size: 14px;
        font-weight: 500;
        margin-left: 32px;
        margin-top: 32px;
        padding-bottom: 16px;
        border-bottom: #ff926b 1px solid;
        &::after {
          content: "";
          position: absolute;
          width: 5px;
          left: -23px;
          top: 30%;
          transform: translateY(-50%);
          height: 90%;
          background: #ff8033;
        }
      }
      .input_box {
        width: 440px;
        gap: 24px;
        margin-top: 48px;
        align-self: center;
        .jump_box {
          align-self: flex-end;
          margin-bottom: 58px;
          gap: 32px;
          .jump_link {
            color: #ff8033;
            font-weight: 900;
          }
        }
        .input_btn {
          height: 40px;
          border: none;
          width: 250px;
          outline: none;
        }
        .input_inner_box {
          border-bottom: #ff926b 2px solid;
          &:hover {
          }
          label {
            display: block;
            width: 100px;
            font-weight: 900;
            margin-left: 40px;
          }
        }
      }
      .login_btn {
        height: 50px;
        border: none;
        border-radius: 5px;
        margin-top: 8px;
        background: #ff8033;
        color: #ffff;
        box-shadow: #52545420 2px 0px 10px;
        gap: 8px;
        .login_load_icon {
          animation: load 1.5s infinite linear;
          @keyframes load {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        }
        &:active {
          border: none;
        }
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        font-weight: 900;
        &:hover {
          background: #f68664;
          color: #fff;
        }
      }
    }
  }
}
.login_foot {
  background: #262727;
  margin-top: 16px;
  z-index: 1;
  color: #fff;
  width: 100vw;
  min-height: 150px;
  .login_foot_container {
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
