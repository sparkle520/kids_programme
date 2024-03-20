<!-- @Author: LT -->
<!-- @Date: 2024-03-18 10:14:36 -->
<!-- @Description:  -->

<script setup>
import { reactive, toRefs, ref, onBeforeMount, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onBeforeMount(() => {});
onMounted(() => {
  // minute.value = paper_info.value.paper_exam_time;
  minute.value = "60";
  start_clock.value = true;
});
const paper_info = ref({
  paper_name: "测试",
  paper_id: "123456",
  paper_time: "2024-03-18 10:14:36",
  paper_type: "考试",
  paper_score: "100",
  paper_creator: "admin",
  paper_exam_time: "60",
  paper_status: "未发布",
  paper_desc: "这是一份测试试卷",
  paper_questions: [{}],
});
const paper_data = ref([
  {
    name: "第 1 题 【 单选题 】",
    question: "下面哪个是java的hello world",
    type: "单选题",
    options: ["fsss", "sss", "sssfasfas", "sadasdasd"],
    answer: "",
  },
  {
    name: "第 1 题 【 单选题 】",
    question: "下面哪个是java的hello world",
    type: "单选题",
    options: ["fsss", "sss", "sssfasfas", "sadasdasd"],
    answer: "",
  },
  {
    name: "第 1 题 【 单选题 】",
    question: "下面哪个是java的hello world",
    type: "单选题",
    options: ["fsss", "sss", "sssfasfas", "sadasdasd"],
    answer: "",
  },
  {
    name: "第 1 题 【 单选题 】",
    question: "下面哪个是java的hello world",
    type: "单选题",
    options: ["fsss", "sss", "sssfasfas", "sadasdasd"],
    answer: "",
  },
]);
const create_pre = (index) => {
  return String.fromCharCode("A".charCodeAt(0) + index);
};
const foot_nav = ref([
  { name: "校企合作" },
  { name: "会员价格" },
  { name: "帮助中心" },
  { name: "关于我们" },
  { name: "联系我们" },
  { name: "隐私协议" },
  { name: "免责声明" },
]);
const jump_nav = () => {
  const el = document.querySelectorAll(".qus_box")[0];
  window.scrollTo({
    top: el.offsetTop - 110,
    behavior: "smooth",
  });
};
const answer_paper_data = ref([
  {
    name: "第 1 题 【 单选题 】",
    question: "下面哪个是java的hello world",
    type: "单选题",
    options: ["fsss", "sss", "sssfasfas", "sadasdasd"],
    answer: "",}
]);
const hour = ref("00");
const minute = ref("00");
const second = ref("00");
const start_clock = ref(false);
let clock = null;
watch(start_clock, (newV) => {
  if (newV) {
    clock = setInterval(() => {
      let temp_hour = parseInt(hour.value.replace(/^0/, ""));
      let temp_minute = parseInt(minute.value.replace(/^0/, ""));
      let temp_second = parseInt(second.value.replace(/^0/, ""));
      temp_second -= 1;
      if (temp_second <= 0 && temp_minute > 0) {
        temp_second = 59;
        temp_minute -= 1;
        if (temp_minute <= 0 && temp_hour > 0) {
          temp_minute = 59;
          temp_hour -= 1;
        }
      } else {
        if (temp_second < 0) {
          start_clock.value = false;
        }
      }
      hour.value = temp_hour.toString().padStart(2, "0");
      minute.value = temp_minute.toString().padStart(2, "0");
      second.value = temp_second.toString().padStart(2, "0");
    }, 1000);
  } else {
    clearInterval(clock);
  }
});
const show_submit_dialog = ref(false);
const show_cover = ref(false)
</script>
<template>
  <div class="cover fixed"  v-if="show_cover"></div>
  <div
    v-if="show_submit_dialog"
    class="submit_dialog fixed  flex flex_direction_column"
  >
    <div
      class="dialog_head flex flex_direction_row justify_content_space_between align_items_center"
    >
      <h4>提交试卷</h4>
      <button
        class="relative close_btn flex align_items_center justify_content_center"
        @click="show_submit_dialog = false;show_cover = false"
      >
        <svg
          t="1710808448653"
          class="close_icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5030"
          width="24"
          height="24"
        >
          <path
            d="M851.428571 755.428571q0 22.857143-16 38.857143l-77.714285 77.714286q-16 16-38.857143 16t-38.857143-16l-168-168-168 168q-16 16-38.857143 16t-38.857143-16l-77.714285-77.714286q-16-16-16-38.857143t16-38.857142l168-168-168-168q-16-16-16-38.857143t16-38.857143l77.714285-77.714286q16-16 38.857143-16t38.857143 16l168 168 168-168q16-16 38.857143-16t38.857143 16l77.714285 77.714286q16 16 16 38.857143t-16 38.857143l-168 168 168 168q16 16 16 38.857142z"
            p-id="5031"
            fill="#a5a5a5"
          ></path>
        </svg>
      </button>
    </div>
    <div class="dialog_msg">共有试题{{ paper_data.length }}题，已完成{{ answer_paper_data.length }}题，是否提交试卷？</div>
    <div class="dialog_foot flex flex_direction_row">
      <button class="com_btn confirm_btn">确定交卷</button>
      <button class="com_btn check_btn" @click="show_submit_dialog = false;show_cover = false">
        再检查一下
      </button>
    </div>
  </div>
  <div
    id="paper_details_main"
    class="flex flex_direction_column align_items_center"
  >
    <div
      class="com_box top_box flex flex_direction_row justify_content_center align_items_center"
    >
      <div
        class="top_inner_box flex flex_direction_row justify_content_space_between"
      >
        <h2>202312 青少年软件编程等级考试Scratch四级真题</h2>
        <div
          class="top_inner_right_box flex flex_direction_row align_items_center"
        >
          <span> {{ hour }}:{{ minute }}:{{ second }} </span>
          <button class="submit_btn" @click="show_submit_dialog = true;show_cover = true">交卷</button>
        </div>
      </div>
    </div>
    <div class="paper_details_container flex flex_direction_column">
      <div class="ques_aws_box flex flex_direction_row">
        <div class="ques_aws_left_box flex flex_direction_column">
          <div
            :key="item"
            v-for="item in paper_data"
            class="com_box qus_box flex flex_direction_column"
          >
            <span class="qus_top_title relative">{{ item.name }}</span>
            <div class="question_box">{{ item.question }}</div>
            <div
              v-if="item.type == '单选题'"
              class="option_box flex flex_direction_column"
            >
              <div :key="item2" v-for="(item2, index) in item.options">
                {{ create_pre(index) }}：{{ item2 }}
              </div>
            </div>
            <div
              v-if="item.type == '单选题'"
              class="answer_box flex flex_direction_row"
            >
              <div :key="item2" v-for="(item2, index) in item.options">
                {{ create_pre(index) }}
              </div>
            </div>
          </div>
        </div>
        <div class="ques_aws_right_box com_box flex flex_direction_column">
          <ul class="ques_nav_box flex flex_direction_column">
            <span class="nav_title relative">sdasd</span>
            <li class="ques_nav_li_item_box flex flex_direction_row">
              <span class="ques_nav_li_item" @click="jump_nav(0, 0)">1</span>
              <span class="ques_nav_li_item">2</span>
            </li>
          </ul>
          <ul class="ques_nav_box flex flex_direction_column">
            <span class="nav_title relative">sdasd</span>
            <li class="ques_nav_li_item_box flex flex_direction_row">
              <span class="ques_nav_li_item">1</span>
              <span class="ques_nav_li_item">2</span>
            </li>
          </ul>
          <ul class="ques_nav_box flex flex_direction_column">
            <span class="nav_title relative">sdasd</span>
            <li class="ques_nav_li_item_box flex flex_direction_row">
              <span class="ques_nav_li_item">1</span>
              <span class="ques_nav_li_item">2</span>
            </li>
          </ul>
          <ul class="ques_nav_box flex flex_direction_column">
            <span class="nav_title relative">sdasd</span>
            <li class="ques_nav_li_item_box flex flex_direction_row">
              <span class="ques_nav_li_item">1</span>
              <span class="ques_nav_li_item">2</span>
            </li>
          </ul>
          <ul class="ques_nav_box flex flex_direction_column">
            <span class="nav_title relative">sdasd</span>
            <li class="ques_nav_li_item_box flex flex_direction_row">
              <span class="ques_nav_li_item">1</span>
              <span class="ques_nav_li_item">2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="paper_details_foot flex flex_direction_column align_items_center">
    <div class="paper_details_foot_container flex flex_direction_row">
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
.cover{
  width: 100vw;
  height: 100vh;
  background: #8481817b;
  z-index: 2147483646;

}
.submit_dialog {
  width: 500px;
  min-height: 150px;
  left: 50%;
  top: 80px;
  border-radius: 5px;
  background: #fff;
  transform: translateX(-50%);
  box-shadow: #56555541 0 0 10px;
  color: #525454;
  animation: dialog 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 2147483647;
  @keyframes dialog {
    0%{
      transform: translateY(-100%) translateX(-50%);
    }100%{
      transform: translateY(0%) translateX(-50%);

    }
  }
  .dialog_head {
    border-bottom: #a5a5a5 1px solid;
    background: #fffdfc;
    width: calc(100% - 32px);
    height: 32px;
    padding: 0 16px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    h4 {
      margin: 0;
      font-weight: 600;
      color: #ffa78d;
    }
    .close_btn {
      background: none;
      border-radius: 5px;
      border: none;
      outline: none;
      .close_btn {
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      &:hover {
        .close_icon {
          path {
            fill: #848181;
          }
        }
        &::after {
          opacity: 1;
          transform: translateX(-50%) translateY(130%);
        }
      }
      &::after {
        content: "关闭";
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        width: 150%;
        color: #868484;
        opacity: 0;
        font-size: 11px;
        background: #fdfdfd;
        box-shadow: #86848466 2px 1px 5px;
        border-radius: 5px;
        padding: 8px 4px;
        transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
    }
  }
  .dialog_msg {
    width: calc(100% - 32px);
    font-size: 20px;
    padding: 16px;
    letter-spacing: 1px;

  }
  .dialog_foot {
    margin-top: auto;
    width: calc(100% - 32px);
    padding: 16px;
    gap: 8px;
    .com_btn {
      border: none;
      border-radius: 5px;
      font-size: 14px;
      padding: 8px;
    }
    .confirm_btn {
      background: #f68664;
      color: #ffff;
      margin-left: auto;
      transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover {
        background: #ffa78d;
      }
    }
    .check_btn {
      background: #cacaca;
      color: #ffffff;
      transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover {
        background: #d9d9d9;
      }
    }
  }
}
.com_box {
  border-radius: 5px;
  background: #fff;
  box-shadow: rgba(94, 97, 95, 0.064) 0 0 10px;
}
#paper_details_main {
  width: 100vw;
  min-height: 100vh;
  color: #525454;

  .top_box {
    width: 100vw;
    height: 100px;
    margin-top: 70px;
    top: 0px;
    position: sticky;
    z-index: 10000;
    .top_inner_box {
      width: 1200px;
      .top_inner_right_box {
        gap: 64px;
        span {
          font-size: 30px;
        }
        .submit_btn {
          border: none;
          height: 50px;
          width: 150px;
          border-radius: 5px;
          font-size: 20px;
          font-weight: 900;
          color: #f68664;
          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
          background: transparent;
          &:hover {
            color: #ffaf97;
          }
        }
      }
    }
    h2 {
      margin: 16px 0;
      padding: 0;
      font-size: 30px;
      text-align: left;
      color: #ff8033;
    }
    .paper_info_box {
      width: 80%;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .btn_box {
      width: 90%;
      border-top: #e1e1e1 1px solid;
      height: 100px;
      .download_btn {
        height: 45px;
        width: 150px;
        border: none;
        border-radius: 5px;
        margin-top: 8px;
        background: #ff8033;
        box-shadow: #52545430 2px 0px 10px;
        color: #ffff;
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        font-weight: 900;
        &:hover {
          background: #f68664;
          color: #fff;
        }
      }
    }
  }

  .paper_details_container {
    width: 1200px;
    margin-top: 8px;
    z-index: 1;
    gap: 16px;

    .answer_box {
      gap: 16px;
      div:hover {
        color: #f68664;
      }
    }
    .ques_aws_box {
      width: 100%;
      border-radius: 5px;
      align-items: flex-start;
      gap: 16px;
      .ques_aws_left_box {
        width: 900px;
        gap: 16px;
        .qus_box {
          width: 868px;
          padding: 16px;
          gap: 16px;
          .question_box {
            border-bottom: #e1e1e1 1px solid;
            padding-bottom: 16px;
          }
          .qus_top_title {
            padding-bottom: 8px;
            border-bottom: #e1e1e1 1px solid;
            &::after {
              content: "";
              position: absolute;
              background: #ff8033;
              width: 30px;
              bottom: -3px;
              left: 0;
              height: 6px;
              border-radius: 5px;
            }
          }
          .option_box {
            gap: 8px;
            border-bottom: #e1e1e1 1px solid;
            padding-bottom: 16px;
          }
        }
      }
      .ques_aws_right_box {
        width: 282px;
        max-height: calc(100vh - 120px);
        overflow: scroll;
        top: 110px;
        position: sticky;
        .ques_nav_box {
          padding: 0;
          width: 250px;
          margin: 16px 0;
          margin-bottom: 0;
          padding: 0 16px;
          list-style: none;
          &:last-child {
            margin-bottom: 16px;
          }
          .nav_title {
            font-size: 14px;
            font-weight: 400;
            padding: 12px 0;
            border-bottom: #d2d2d2 solid 1px;
            &::after {
              content: "";
              position: absolute;
              background: #ff8033;
              width: 30px;
              bottom: -3px;
              left: 0;
              height: 6px;
              border-radius: 5px;
            }
          }
          .ques_nav_li_item_box {
            margin-top: 12px;
            gap: 4px;
            .ques_nav_li_item {
              padding: 8px 12px;
              user-select: none;
              transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
              &:hover {
                background: hsl(17, 21%, 94%);
              }
              border-radius: 4px;
              color: #7f7f7f;
              background: #e4e3e3;
            }
          }
        }
      }
    }
  }
}
.paper_details_foot {
  background: #262727;
  margin-top: 16px;
  z-index: 1;
  color: #fff;
  width: 100vw;
  min-height: 150px;
  .paper_details_foot_container {
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
