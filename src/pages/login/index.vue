<template>
    <view class="view-wrap login">
        <u-row>
            <u-col :span="12">
                <image class="image-top" :src="imageList.cloud"></image>
            </u-col>
        </u-row>

        <view class="login-box">
            <view class="login__title">
                <text>uviewPlus</text>
            </view>
            <u-form ref="formRef" :model="form" :rules="rules" label-width="120">
                <u-form-item label="用户名" required prop="account"
                    ><u-input v-model="form.account" type="text" placeholder="请输入用户名"
                /></u-form-item>
                <u-form-item label="密码" required prop="password"
                    ><u-input v-model="form.password" type="password" placeholder="请输入密码"
                /></u-form-item>
            </u-form>
            <u-button plain type="primary" @click="login">登录</u-button>
        </view>
        <u-row>
            <u-col :span="4">
                <image class="image-bottom" :src="imageList.order"></image>
            </u-col>
            <u-col :span="4">
                <image class="image-bottom" :src="imageList.sale"></image>
            </u-col>
            <u-col :span="4">
                <image class="image-bottom" :src="imageList.analysis"></image>
            </u-col>
        </u-row>
    </view>
</template>

<script setup lang="ts">
import Login from '@/api/login/index';
import useLogin from '@/pages/login/useLogin';
import { saveStorage } from '@/utils/uni-storage';
import { unknownType } from '@/utils/types';

const { formRef, form, rules, imageList } = useLogin();

// 登录
const login = async () => {
    // await formRef.value.validate();

    // const res: unknownType = await Login.login({ ...form.value, organizationId: '26b151029f7c3188a3bf920ae3eaaf22' });
    // if (!res) {
    //     return;
    // }
    // token
    // saveStorage('token', res.data.token);
    // // 登录用户的信息
    // saveStorage('userInfo', res.data);
    uni.switchTab({ url: '/pages/index/index' });
};
</script>

<style lang="scss" scoped>
.login {
    height: 100vh;
    background-color: #ecf5ff;

    &__title {
        text-align: center;
        color: #3c9cff;
        font-size: 32rpx;
        height: 100rpx;
        line-height: 100rpx;
        margin-bottom: 30rpx;
    }
}

.login-box {
    margin: 30rpx;
    padding: 30rpx;
    padding-top: 0;
    background-color: #fff;
}

.image-top {
    width: 200rpx;
    height: 120rpx;
}

.image-bottom {
    width: 100%;
    height: 200rpx;
}
</style>
