<template>
    <div>
        <div class="div1" @click="$router.go(-1)">返回</div>
        <router-view></router-view>
    </div>
</template>

<style scoped>
    .div1{
        cursor: pointer;
    }
</style>
