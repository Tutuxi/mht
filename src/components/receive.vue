<template>
	<div>
		<van-notice-bar text="提示：扫码或输入取货编号，进行领取" left-icon="volume-o" />
		<div class="icon">
			<div class="tips">扫描取货二维码</div>
			<van-icon name="scan" size="10rem" color="#FEA441" />
		</div>
		
		<div class="form">
			<div class="form_left">
				<van-cell-group>
 					<van-field v-model="value" placeholder="输入取货编号" />			
				</van-cell-group>
			</div>
			<div class="form_right">
				<van-button type="default">确认</van-button>
			</div>
			
			
		</div>
		
		


	</div>
</template>

<script>
	export default {
		name: 'give',
		data(){
			return {
				
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
	.icon{
		width:10rem;
		height:10rem;
		margin:0 auto;
	}
	.icon .tips{
		width:100%;
		text-align: center;
		margin-top: 3rem;
	}
	.form{
		width:16rem;
		margin:0 auto;
		margin-top: 5rem;
		display: flex;
		justify-content: space-around;

	}
	.form .form_left{
		width:12rem;
	}
	.form .form_left ::after{
		border-left: 1px solid #ebedf0
	}
	.form .form_right{
		width:4rem;
	}
</style>
