<template>
  <div class="home">
    <!-- <div v-for="item of arr2">
        {{ item }}
    </div> -->
    <ol>
      <li v-for="(u, index) of urls" :key="index">
        <router-link :to="u.url">{{ u.name }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      urls: [
        { name: "函数1-25", url: "/function/function1-25" },
        { name: "函数25-48", url: "/function/function25-48" },
        { name: "常用函数数据格式化", url: "/function/dataFormat" },
        { name: "动画", url: "/animation" },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  text-align: left;
  margin-left: 6%;
}

ol li{
  margin-bottom: 15px;
}

a{
  color: mediumblue;
}
</style>
