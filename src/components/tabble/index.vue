<template>
	<view class="tabble-view">
		
		<view class="table-view-item"  v-for="(item,index) in tablist" :key="index">
			<view :class="`table_`+indexs"  v-for="(items,indexs) in renderFiled" :key="indexs">
				<view>{{item[items]}}</view>
			</view>
			
		</view>
		
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const pros = defineProps({
	renderFiled:{
		type:Array,
		default:[]
	}
})
	const tablist = ref([
		{value:1,label:'wode ',age:42342342342323422342325,sex:'man',name:'戴启乐'},
		{value:2,label:'wode',age:25,sex:'man',name:'戴启乐d'},
		{value:3,label:'wode',age:25,sex:'man',name:'戴启乐df34323423423423424234'},
	])
</script>

<style lang="scss">
	.tabble-view{
		margin: 20rpx;
	}
	.table-view-item{
		background-color: forestgreen;
		margin-bottom: 20rpx;
		padding: 20rpx;
		display: flex;
		position: relative;
	}
	.table_0{
		float: left;
		width: 100rpx;
		height: 100rpx;
		line-height: 100rpx;
		background-color: aqua;
	}
	.table_1{
		margin-left: 20rpx;
		width: 360rpx;
		white-space: nowrap;
		overflow: hidden;
		// justify-content: flex-end;
	}
	.table_2{
		float: right;
	}
	.table_3{
		position: absolute;
		bottom: 20rpx;
		left: 140rpx;
	}
</style>