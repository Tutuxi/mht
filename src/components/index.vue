<template>
	<div class="banner">
		<!-- <van-image width="100" height="100" src="../assets/index.png" /> -->
		<img src="../assets/index.png" alt="" style="width: 100%">
	</div>
</template>

<script>
	export default {
		name: 'login',
		data(){
			return {
				username:'',
				password:'',
				id: 88
			}
		},
		methods: {
			login(){
				// this.$toast.loading({
				// 	message: '加载中...',
				// });
				this.$router.push({  //核心语句
					path: '/goods',   //跳转的路径
					query: {           //路由传参时push和query搭配使用 ，作用时传递参数
						id: this.id ,  
					}
				})
			}
		},
		props: {
			msg: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.banner{
		background-color: #ffa821;
		height: 100vh;
		width: 100%;
	}
</style>
