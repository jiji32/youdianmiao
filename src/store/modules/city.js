import { defineStore } from 'pinia'
import { getCityAll } from '@/service/modules/city'
//state里定义变量，action里发送请求拿到数据，把拿到的数据赋给state里定义的变量；最后导出数据管理库
const useCityStore = defineStore("city", {
  state: () => {
    return {
      allCity: {},
      currentCity: { cityName: "北京" }
    }
  },
  actions: {
    async fetchAllCityData() {
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
})

export default useCityStore
