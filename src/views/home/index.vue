<template>
  <div class="home">
    <van-nav-bar title="游点妙 ❀Trip" left-text="返回" left-arrow></van-nav-bar>
    <el-carousel :interval="2000" type="card" height="200px">
      <el-carousel-item v-for="(img, index) in imgs" :key="index">
    <!-- 直接绑定图片路径 -->
      <img :src="img" alt="" class="carousel-image" />
    </el-carousel-item>
    </el-carousel>

    <search-box :hot-suggests="hotSuggests" />
    <div class="content">
      <category-list :categories="categories" />
      <house-area :houselist="houselist" />
    </div>
  </div>
  <div v-show="showSearchBar" class="home-top">
    <search-bar
      start-date="07.25"
      end-date="07.26"
      height="45px"
      key-word-font-size="14px"
      :search-icon="true"
      key-word="关键字/位置/民宿"
      @search-click="handleSearchClick"
    ></search-bar>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import useReachBottom from "@/hooks/useReachBottom";
import SearchBox from "./cpns/search-box.vue";
import CategoryList from "./cpns/category-list.vue";
import HouseArea from "./cpns/house-area.vue";
import {
  getHomeHotSuggests,
  getHomeCategories,
  getHomeHouselist,
} from "@/service";
import useScroll from "@/hooks/useScroll";
const imgs = ref([
  "src/assets/img/home/banner.webp",  
  "src/assets/img/home/lunbo.webp",
  "src/assets/img/home/lunbo2.jpg"
]);

const router = useRouter();
const hotSuggests = ref([]);
getHomeHotSuggests().then((res) => {
  hotSuggests.value = res.data;
});

const categories = ref([]);
getHomeCategories().then((res) => {
  categories.value = res.data;
});

let currentPage = 1;
const houselist = ref([]);
fetchHouseListData();

// 监听点击
function itemClick(houseId) {
  console.log("itemClick", houseId);
  router.push({
    path: "/detail/" + houseId,
  });
}
const handleSearchClick = () => {
  router.push({
    path: "/search",
    query: {
      address: "广州",
      cityId: 45,
      startDate: "07-25",
      endDate: "07-26",
    },
  });
};
function fetchHouseListData() {
  getHomeHouselist(currentPage).then((res) => {
    houselist.value.push(...res.data);
    currentPage++;
  });
}

// 监听达到底部
useReachBottom(() => {
  fetchHouseListData();
});

// 监听页面的滚动
const { scrollTop } = useScroll();
const showSearchBar = computed(() => {
  return scrollTop.value >= 350;
});
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 防止图片变形 */
}

.content {
  margin-top: 20px;
  background-color: #f5f7f9;
}

.home-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 16px 10px 16px;
  background-color: white;
  z-index: 100;
}
</style>
