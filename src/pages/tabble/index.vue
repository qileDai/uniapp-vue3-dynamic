<template>
    <view class="view-wrap menu">
       <Table :renderFiled="renderFiled"></Table>
	   <!-- <compents :is="BaseTable"></compents> -->
    </view>
</template>
<script lang="ts" setup>
import useIndex from './useIndex';
import Table from '@/components/tabble/index.vue'
import { ref } from 'vue';
const { menuList, navigateTo } = useIndex();
const renderFiled = ref(['label','age','sex','menuList'])

</script>
<style lang="scss" scoped>
.menu {
    &__menu-item {
        margin-bottom: 30rpx;
    }

    &__title {
        color: #2196f3;
        margin-bottom: 20rpx;
    }

    &__menu-wrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    &__submenu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 160rpx;
        height: 190rpx;
        padding: 16rpx;
        margin: 16rpx;
        color: #fff;
        background: #2196f3;
        border-radius: 10rpx;
        box-shadow: 0 2px 12px 0 rgba(33, 150, 243, 0.1);
    }

    &__icon {
        font-size: 60rpx;
    }

    &__sub-label {
        margin-top: 10rpx;
        font-size: 24rpx;
    }
}
</style>
