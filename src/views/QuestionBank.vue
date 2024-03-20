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
    name: "2023年Python一级真题sssssssssssssssssssssssssssss我afasfafafjiaiowfjassafasfasfsafasfasfasfasfaw",
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
  { name: "校企合作" },
  { name: "会员价格" },
  { name: "帮助中心" },
  { name: "关于我们" },
  { name: "联系我们" },
  { name: "隐私协议" },
  { name: "免责声明" },
]);
const options = ref([
  { name: "全部" },
  { name: "2023" },
  { name: "2022" },
  { name: "2021" },
  { name: "2020" },
]);
const search_text = ref("");
const value = ref("");
</script>
<template>
  <div id="paper_main">
    <div
      class="paper_top_box relative flex flex_direction_column align_items_center justify_content_center"
    >
      <h3>试题中心</h3>
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
          <div class="flex flex_direction_row justify_content_center">
            <span>科目等级：</span>
            <el-select
              v-model="value"
              placeholder="选择等级"
              style="width: 240px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </div>
          <div class="flex flex_direction_row justify_content_center">
            <span>试题类型：</span>
            <el-select
              v-model="value"
              placeholder="类型不限"
              style="width: 240px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </div>
          <div class="flex flex_direction_row justify_content_center">
            <span>知识点：</span>
            <el-select
              v-model="value"
              placeholder="选择知识点"
              style="width: 240px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
              />
            </el-select>
          </div>
        </div>
        <div
          class="subject_level_box flex flex_direction_row align_items_center"
        >
          关键字搜索：
          <el-input
            v-model="search_text"
            style="width: 240px"
            placeholder="在此键入关键字搜索"
          />
          <el-button type="primary" class="search_btn">搜索</el-button>
        </div>

        <ul class="text_paper_ul_box flex flex_direction_column">
          <li
            :key="item"
            v-for="item in cur_paper_list"
            class="text_paper_li_item flex relative"
          >
            <div
              class="paper_bottom_box relative flex flex_direction_row align_items_center justify_content_space_between"
            >
              <router-link class="paper_name" to="">{{
                item.name
              }}</router-link>

              <button class="btn">
                <router-link class="btn_link" to="">问答题</router-link>
              </button>
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
    <div
      class="paper_foot relative flex flex_direction_column align_items_center"
    >
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
  .el-input {
    --el-input-focus-border-color: #ff8033;
  }

  .el-select {
    --el-select-input-focus-border-color: #ff8033;
    .el-select-dropdown__item.selected {
      color: #ff8033;
    }
  }

  .paper_top_box {
    width: 100vw;
    margin-top: 70px;
    height: 130px;
    z-index: 1;
    background: linear-gradient(45deg, #fbc5c7, #ec6a71, #ff8033);
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
      top: 74px;
      max-height: calc(100vh - 100px);
      h3 {
        font-size: 16px;
        font-weight: 500;
        margin: 0;
        padding-bottom: 8px;
        border-bottom: #ff8033 2px solid;
        &::after {
          content: "";
          position: absolute;
          width: 5px;
          left: -10px;
          top: 40%;
          transform: translateY(-50%);
          height: 90%;
          background: #ff8033;
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
          border-bottom: #d5d5d5 1px solid;
          background: linear-gradient(45deg, #ff8033, #ec6a71);

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
              color: #ff8033;
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
      .search_btn {
        width: 120px;
        background: #ff8033;
        transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        border: none;
        &:hover {
          background: #fc9c61;
        }
      }
      .option_ul_box {
        margin: 0;
        gap: 16px;
        flex-wrap: wrap;
        .option_li_active_item {
          list-style: none;
          height: 32px;
          background: #ff8033;
          box-shadow: 0 0 1px #ff8033;
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
          box-shadow: 0 0 1px #ff8033;
          border-radius: 4px;
          padding: 2px 8px;
          font-size: 14px;
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:hover {
            background: #ff8033;
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
        gap: 16px;
        width: calc(100% - 32px);
        padding: 0 16px;
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
        gap: 0px;
        flex-wrap: wrap;
        width: 100%;
        .text_paper_li_item {
          width: 100%;
          height: 50px;
          border-radius: 5px;
          &::after {
            width: 100%;
            height: 1px;
            background: #d2d2d2;
            bottom: -1px;
            content: "";
            position: absolute;
          }
          .paper_bottom_box {
            width: calc(100%);
            padding: 8px;

            .paper_name {
              text-decoration: none;
              color: #777c7c;
              width: 80%;
              height: 20px;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              overflow: hidden;
              &:hover {
                color: #ff8033;
              }
            }

            .btn {
              border: none;
              background: #ff8033;
              width: 10%;
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
                .btn_link {
                }
                background: #e0a538;
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
  .paper_foot {
    background: #262727;
    margin-top: 16px;
    z-index: 1;

    color: #fff;
    width: 100vw;
    min-height: 150px;
    .paper_foot_container {
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
}
</style>
