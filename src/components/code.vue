<template>
	<div>
		<van-notice-bar text="提示：复制链接，赠送给好友！" left-icon="volume-o" />
		<van-row>
			<van-col span="10" offset="7">
				<div class="codeImg">
					<van-image fit="contain" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568961657660&di=06181e2aaf27f34de5a9c9320c30dd21&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F8%2F856%2F505.jpg" />
				</div>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="24">
				<div class="text">34BFDF564F4D6584549D</div>
			</van-col>
		</van-row>
		<van-cell-group>
			<van-field v-model="sms" center clearable disabled placeholder="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568961657660&di=06181e2aaf27f34de5a9c9320c30dd21&imgtype=0&src=http%3A%2F%2Fimage.thepaper.cn%2Fwww%2Fimage%2F8%2F856%2F505.jpg" >
				<van-button slot="button" size="small" type="primary">复制链接</van-button>
			</van-field>
		</van-cell-group>
	</div>
</template>

<script>
	export default {
		name: 'code',
		data(){
			return {
				username:'',
				password:'',
				value1: 1,
				value2: 2,
				value3: 3
			}
		},
		methods: {
			creat(){
				this.$router.push({  //核心语句
					path: '/myGoods',   //跳转的路径
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

<style scoped>
	.codeImg{
		margin-top: 50px;
	}
	.text{
		text-align: center;
		color: #07c160;
		font-weight: bold;
		margin: 5px 0 50px 0;
	}
</style>
