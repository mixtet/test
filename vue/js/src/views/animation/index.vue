<template>
    <div>
        <div @click="$router.go(-1)">返回</div>
        <router-view></router-view>
    </div>
</template>