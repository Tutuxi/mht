<template>
	<div>
		<h1>二维码生成</h1>
		<div id="form">
			<van-cell-group>
				<van-field
					v-model="username"
					clearable
					label="用户名"
					left-icon="contact"
					placeholder="请输入用户名"
					@click-right-icon="$toast('question')"
				/>

				<van-field
					v-model="password"
					type="password"
					label="密码"
					left-icon="browsing-history-o"
					placeholder="请输入密码"
				/>
			</van-cell-group>
		</div>
		<div id="submit">
			<van-button round type="primary" block color="linear-gradient(to right, #35ff96, #07c160)" @click='login'>登录</van-button>
		</div>
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
	h1{
		text-align: center
	}
	#form{
		margin: 50px 15px
	}
	#submit{
		margin: 0 15px
	}
</style>
