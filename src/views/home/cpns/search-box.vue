<template>
  <div class="serach-box">
    <div class="item location bottom-gray-line">
      <div class="city" >{{ cityStore.currentCity.cityName }}</div>
      <div class="current" @click="cityItemClick">
        <span class="mine" >我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <div class="item date-range bottom-gray-line" >
      <div class="start" @click="showCalendar = true">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time"> {{ startDate }} </span>
        </div>
        <div class="stay" @click="showCalendar = true">共{{ duringDay }}晚</div>
      </div>
      <div class="end" @click="showCalendar = true">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
        <van-calendar v-model:show="showCalendar" type="range" :round="false" @confirm="onConfirm" /> 
      </div>
    </div>
    <div class="item price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="item keyword bottom-gray-line">关键字/位置/民宿名</div>
    <div class="item hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <span class="tag">{{ item.tagText.text }}</span>
      </template>
    </div>

    <div class="item search-btn">
      <div class="btn" @click="startSearch">开始搜索</div>
    </div>
</template>

<script setup>
import useCityStore from "@/store/modules/city";
import { useRouter } from "vue-router";
import {ref} from "vue";
import { formatMonthDay } from "@/utils/format_date";
import { getDiffDuration } from "@/utils/format_date";

defineProps({
  hotSuggests: {
    type: Object,
    default: () => [],
  },
});
const router = useRouter();
const startSearch = () => {
  router.push({
    path: "/search",
    query: {
      address: "广州",
      cityId: 45,
      startDate: "07-23",
      endDate: "07-24",
    },
  });
};
const cityStore = useCityStore()
const cityItemClick = () => {
  router.push({
    path: "/city"
  })
}
const nowDate = new Date()
const startDate = ref(formatMonthDay(nowDate))
const newDate = new Date().setDate(nowDate.getDate() + 1)
const endDate = ref(formatMonthDay(newDate ))
const showCalendar = ref(false)
const onConfirm = (val) => {
  const selectStartDate = val[0]
  const selectEndDate = val[1]
  startDate.value = formatMonthDay(selectStartDate)
  endDate.value = formatMonthDay(selectEndDate)
  duringDay.value = getDiffDuration(selectStartDate, selectEndDate)
  showCalendar.value = false
}
const duringDay = ref(getDiffDuration(nowDate, newDate))
</script>

<style lang="less" scoped>
.serach-box {
  --van-calendar-popup-height: 100%;
}
.location {
  height: 44px;
  .city {
    flex: 1;
    font-size: 15px;
    padding: 0 10px 0 0;
    color: #333;
  }

  .current {
    display: flex;
    align-items: center;

    .mine {
      margin-right: 8px;
      font-size: 12px;
      color: #666;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  height: 44px;
  .start {
    border-right: 1px solid f8f9f9;
  }
}

.keyword {
  height: 44px;
}

.hot-suggest {
  margin: 10px 0;

  .tag {
    font-size: 12px;
    padding: 4px 8px;
    margin: 3px;
    border-radius: 14px;
    color: #3f4954;
    background-color: #ccd5ae;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(
      --tjc-theme-linear-gradient,
      linear-gradient(90deg, #fa8c1d, #fcaf3f)
    );
  }
}

.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
</style>
