<template>
  <div class="function">
    <ol>
      <li>{{ percent(a) }}</li>
      <li>{{ number(b) }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "data1",
  data() {
    return {
      a: 12.896754,
      b: 123456789.6128534168,
    };
  },
  methods: {
    // 保留两位小数
    percent(value) {
      if (value != null) {
        return value.toFixed(2);
      } else {
        return;
      }
    },
    // 数字格式化，保留两位小数并每三位加逗号
    number(value) {
      if (value != null) {
        return value.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
      } else {
        return;
      }
    },
    //  数组去重
    distinctArr(arr) {
      return Array.from(new Set(arr));
    },
  },
};
</script>

<style scoped>
@import url(../com.css);
</style>
