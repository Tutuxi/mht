<template>
	<div id="app">
		<!-- <header class="header">
			<router-link to="/login">登录</router-link>
			<router-link to="/goods">商品</router-link>
		</header>
		<hr> -->
		<router-view></router-view>
	</div>
</template>

<script>
	import login from "./components/login.vue";

	export default {
		data () { 
			return {   
				msg:'你好vue'
			}
		} 
	};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
	}
</style>
