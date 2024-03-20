<!-- @Author: LT -->
<!-- @Date: 2024-03-18 10:14:36 -->
<!-- @Description:  -->

<script setup>
import { reactive, toRefs, ref, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onBeforeMount(() => {});
onMounted(() => {});
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
    top: el.offsetTop - 80,
    behavior: "smooth",
  });
};
</script>
<template>
  <div
    id="paper_details_main"
    class="flex flex_direction_column align_items_center"
  >
    <div class="paper_details_container flex flex_direction_column">
      <div
        class="com_box top_box flex flex_direction_column align_items_center"
      >
        <h2>202312 青少年软件编程等级考试Scratch四级真题</h2>
        <div
          class="paper_info_box flex flex_direction_row justify_content_space_between"
        >
          <span>试卷总分数：{{ paper_info.paper_score }}分</span>
          <span>试卷及格分数：60分</span>
          <span>考试时长：{{ paper_info.paper_exam_time }}分钟</span>
        </div>
        <div class="btn_box flex align_items_center justify_content_center">
          <button class="download_btn">下载试卷</button>
        </div>
      </div>
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
#paper_details_main {
  width: 100vw;
  min-height: 100vh;
  color: #525454;
  .paper_details_container {
    width: 1200px;
    margin-top: 80px;
    z-index: 1;
    gap: 16px;
    .top_box {
      h2 {
        margin: 16px 0;
        padding: 0;
        font-size: 20px;
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
    .com_box {
      width: 100%;
      border-radius: 5px;
      background: #fff;
      box-shadow: rgba(94, 97, 95, 0.064) 0 0 10px;
    }
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
        max-height: calc(100vh - 100px);
        overflow: scroll;
        top: 70px;
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
