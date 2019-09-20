<template>
	<div>
		<van-notice-bar text="提示：请选择数量，赠送给好友！" left-icon="volume-o" />

		<van-row>
			<van-col span="8">
				<van-cell title="红阳猕猴桃"></van-cell>
			</van-col>
			<van-col span="7">
				<van-cell-group>
					<van-field v-model="price" type="textarea" placeholder="价格" rows="1" autosize />
				</van-cell-group>
			</van-col>
			<van-col span="9">
				<van-cell>
					<van-stepper v-model="number1" input-width="30px" button-size="25px" />
				</van-cell>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="8">
				<van-cell title="红阳猕猴桃"></van-cell>
			</van-col>
			<van-col span="7">
				<van-cell-group>
					<van-field v-model="price" type="textarea" placeholder="价格" rows="1" autosize />
				</van-cell-group>
			</van-col>
			<van-col span="9">
				<van-cell>
					<van-stepper v-model="number2" input-width="30px" button-size="25px" />
				</van-cell>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="8">
				<van-cell title="红阳猕猴桃"></van-cell>
			</van-col>
			<van-col span="7">
				<van-cell-group>
					<van-field v-model="price" type="textarea" placeholder="价格" rows="1" autosize />
				</van-cell-group>
			</van-col>
			<van-col span="9">
				<van-cell>
					<van-stepper v-model="number3" input-width="30px" button-size="25px" />
				</van-cell>
			</van-col>
		</van-row>
		<div id="submit">
			<van-button round type="primary" block color="linear-gradient(to right, #35ff96, #07c160)" @click='creat'>生成</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'goods',
		data(){
			return {
				username:'',
				password:'',
				price: '',
				number1: 1,
				number2: 2,
				number3: 3,
				id: 'code'
			}
		},
		methods: {
			creat(){
				this.$router.push({  //核心语句
					path: '/code',   //跳转的路径
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
	.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
		border-top: none;
	}
	#submit{
		margin: 30px 15px
	}
</style>
