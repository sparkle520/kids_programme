<!-- @Author: LT -->
<!-- @Date: 2024-03-16 17:27:01 -->
<!-- @Description:  -->

<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onBeforeMount(() => {});
onMounted(() => {});
const subject_nav_list = ref([
  {
    name: "等级考试【scratch】",
    id: 1,
  },
  {
    name: "等级考试【scratch】",
    id: 2,
  },
  {
    name: "等级考试【scratch】",
    id: 3,
  },
  {
    name: "等级考试【scratch】",
    id: 4,
  },
  {
    name: "等级考试【scratch】",
    id: 5,
  },
  {
    name: "等级考试【scratch】",
    id: 6,
  },
]);
const cur_subject_level_list = ref([
  { name: "Python一级", id: 1 },
  { name: "Python一级" },
  { name: "Python一级" },
  { name: "Python一级" },
  { name: "Python一级" },
  { name: "Python一级" },
]);
const cur_subject_year_list = ref([
  { name: "全部", id: 1 },
  { name: "2023" },
  { name: "2022" },
  { name: "2021" },
  { name: "2020" },
  { name: "2019" },
]);
const cur_paper_list = ref([
  {
    name: "2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "202309 青少年软件编程等级考试Scratch二级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "2023年Python一级真题2023年Python一级真题2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
  {
    name: "2023年Python一级真题",
    id: 1,
    tag_list: [
      { name: "2023" },
      { name: "免费" },
      { name: "模拟" },
      { name: "vip可下载" },
    ],
  },
]);
const page_data = ref({
  current_index: 1,
  page_size: 12,
  total: 13,
});
const page_handle = () => {};
const foot_nav = ref([
  {name:"校企合作",},
  {name:"会员价格",},
  {name:"帮助中心",},
  {name:"关于我们",},
  {name:"联系我们",},
  {name:"隐私协议",},
  {name:"免责声明",},
])
</script>
<template>
  <div id="paper_main">
    <div
      class="paper_top_box relative flex flex_direction_column align_items_center justify_content_center"
    >
      <h3>试卷中心</h3>
      <span>历年考试真题</span>
    </div>
    <div class="paper_container relative flex flex_direction_row">
      <div class="paper_left_box com_box flex flex_direction_column">
        <h3 class="relative">科目导航</h3>
        <ul class="subject_nav_box flex flex_direction_row">
          <li
            :key="item"
            v-for="item in subject_nav_list"
            :class="
              item.id == 1 ? 'subject_nav_active_item' : 'subject_nav_item'
            "
            class="flex flex_direction_row align_items_center"
          >
            <router-link to="" class="subject_nav_link">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="paper_right_box com_box flex flex_direction_column">
        <div class="subject_level_box flex flex_direction_row">
          <span>科目等级：</span>
          <ul class="option_ul_box flex flex_direction_row">
            <li
              :key="item"
              v-for="item in cur_subject_level_list"
              :class="item.id == 1 ? 'option_li_active_item' : 'option_li_item'"
              class="flex align_items_center justify_content_center"
            >
              <router-link to="" class="option_li_link">{{
                item.name
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="subject_year_box flex flex_direction_row">
          <span>年份选择：</span>
          <ul class="option_ul_box flex flex_direction_row">
            <li
              :key="item"
              v-for="item in cur_subject_year_list"
              :class="item.id == 1 ? 'option_li_active_item' : 'option_li_item'"
              class="flex align_items_center justify_content_center"
            >
              <router-link to="" class="option_li_link">{{
                item.name
              }}</router-link>
            </li>
          </ul>
        </div>
        <ul class="text_paper_ul_box flex flex_direction_row">
          <li
            :key="item"
            v-for="item in cur_paper_list"
            class="text_paper_li_item flex flex_direction_column relative"
          >
            <img
              src="https://pic.imgdb.cn/item/65b3c498871b83018a856ea6.png"
              alt=""
            />
            <div class="paper_bottom_box flex flex_direction_column">
              <router-link class="paper_name" to="">{{
                item.name
              }}</router-link>
              <div class="btn_box flex justify_content_space_between">
                <button class="btn">
                  <router-link class="btn_link" to="">试卷阅览</router-link>
                </button>
                <button class="btn">
                  <router-link class="btn_link" to="">开始考试</router-link>
                </button>
              </div>
              <ul class="tag_ul_box flex flex_direction_row">
                <li
                  :key="item2"
                  v-for="item2 in item.tag_list"
                  class="tag_li_item"
                >
                  #{{ item2.name }}
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <Pagination
          :current_page="page_data.current_index"
          :page_size="page_data.page_size"
          @current_change="page_handle"
          :total="page_data.total"
        >
        </Pagination>
      </div>
    </div>
    <div class="paper_foot relative flex flex_direction_column align_items_center">
      <div class="paper_foot_container flex flex_direction_row">
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
  </div>
</template>
<style lang="scss" scoped>
#paper_main {
  width: 100vw;
  min-height: 100vh;
  color: #525454;
  &::after {
    width: 100vw;
    height: 100vh;
    content: "";
    left: 0;
    top: 0;
    position: fixed;
    z-index: 0;
    background: url("https://pic.imgdb.cn/item/65f38f9f9f345e8d03ad1fa8.png")
      repeat;

  }
  .paper_top_box {
    width: 100vw;
    margin-top: 70px;
    height: 130px;
    z-index: 1;
    background: linear-gradient(45deg, #daf8e4, #a5e3ba, #5aae76);
    gap: 8px;
    h3 {
      color: #fff;
      font-size: 22px;
      font-weight: 500;
      margin: 0;
    }
    span {
      color: #fff;
      font-size: 20px;
      font-weight: 500;
    }
  }
  .paper_container {
    width: 1200px;
    margin: 16px auto;
    z-index: 1;

    align-items: flex-start;
    gap: 16px;
    .com_box {
      padding: 16px 16px;
      border-radius: 5px;
      background: #fff;
      box-shadow: rgba(94, 97, 95, 0.064) 0 0 10px;
    }
    .paper_left_box {
      width: 268px; //300
      position: sticky;
      top: 30px;
      h3 {
        font-size: 16px;
        font-weight: 500;
        margin: 0;
        padding-bottom: 8px;
        border-bottom: #5aae76 2px solid;
        &::after{
            content: '';
            position: absolute;
            width: 5px;
            left: -10px;
            top: 40%;
            transform: translateY(-50%);
            height: 90%;
            background: #5aae76;
        }
      }
      .subject_nav_box {
        list-style: none;
        padding: 0;
        width: 100%;
        gap: 8px;
        flex-wrap: wrap;
        .subject_nav_active_item {
          width: calc(100% - 16px);
          height: 50px;
          padding: 0 8px;
          border-bottom: #bcbcbc 1px solid;
          background: linear-gradient(45deg, #5aae76, #a5e3ba);

          .subject_nav_link {
            text-decoration: none;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            color: #fff;
          }
        }
        .subject_nav_item {
          width: 100%;
          height: 50px;

          padding: 0 8px;
          border-bottom: #bcbcbc 1px solid;
          &:hover {
            .subject_nav_link {
              color: #5aae76;
            }
          }
          .subject_nav_link {
            text-decoration: none;
            color: #525454;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
    .paper_right_box {
      width: 868px; //780
      gap: 16px;
      .option_ul_box {
        margin: 0;
        gap: 16px;
        flex-wrap: wrap;
        .option_li_active_item {
          list-style: none;
          height: 32px;
          background: #a5e3ba;
          box-shadow: 0 0 1px #5aae76;
          border-radius: 4px;
          padding: 2px 8px;
          font-size: 14px;
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          .option_li_link {
            text-decoration: none;
            color: #ffffff;
          }
        }
        .option_li_item {
          list-style: none;
          height: 32px;
          box-shadow: 0 0 1px #5aae76;
          border-radius: 4px;
          padding: 2px 8px;
          font-size: 14px;
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:hover {
            background: #a5e3ba;
            .option_li_link {
              color: #fff;
            }
          }
          .option_li_link {
            text-decoration: none;
            color: #777c7c;
          }
        }
      }
      .subject_level_box {
        gap: 32px;
        span {
          flex-shrink: 0;
          transform: translateY(4px);
        }
      }
      .subject_year_box {
        gap: 32px;
        span {
          flex-shrink: 0;
          transform: translateY(4px);
        }
      }
      .text_paper_ul_box {
        margin: 0;
        padding: 0;
        list-style: none;
        gap: 16px;
        flex-wrap: wrap;
        width: 100%;
        .text_paper_li_item {
          width: calc((100% - 32px) / 3);
          height: 350px;
          border-radius: 5px;
          box-shadow: 0 0 1px #5aae76, 0 0 10px #5254541d;
          img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
          }
          .paper_bottom_box {
            width: calc(100% - 16px);
            height: calc(100% - 236px);
            padding: 8px;
            .paper_name {
              text-decoration: none;
              color: #777c7c;
              width: 100%;
              height: 40px;

              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              &:hover {
                color: #5aae76;
              }
            }
            .btn_box {
              margin-top: auto;
              width: 100%;
              .btn {
                border: none;
                background: #5aae76;
                width: 40%;
                height: 30px;
                font-size: 14px;
                font-weight: 900;
                border-radius: 5px;
                box-shadow: #0f120f24 0 0 10px;
                transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
                color: #fff;
                .btn_link {
                  color: #fff;
                  text-decoration: none;
                }
                &:hover {
                  background: #69d68e;
                }
              }
            }
            .tag_ul_box {
              margin: 0;
              padding: 0;
              margin-top: 16px;
              list-style: none;
              gap: 4px;
              .tag_li_item {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
  .paper_foot{
    background:#262727 ;
    margin-top: 16px;
    z-index: 1;

    color: #fff;
    width: 100vw;
    min-height: 150px;
    .paper_foot_container{
      width: 1016px;
      padding: 32px 32px;
      flex-wrap: wrap;
      gap: 16px;
      .foot_nav{
        text-decoration: none;
      color: #d2d2d2;
      width: 242px;
      
      }
     
    }
  }
}
</style>
