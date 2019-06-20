<template>
	<div class="main-downloads">
		<div class="main-download-pure">
			<template v-for="(item,i) in list">
				<div class="main-downloads-centered" :key="i">
					<a href="" class="preview">
						<template v-if="i == 3">
							<img src="https://static.zhihu.com/liukanshan/images/downloads/icon-ime-b2ebf8b0.svg" alt="">
						</template>
						<template v-else>
							<img src="../assets/svg/icon-pc.svg" class="">
							<img :src="item.img" class="screw-wallpaper">
						</template>
						<span class="button-paint">{{item.text}}</span>
					</a>
				</div>
			</template>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			list: [
			{text:'表情', img:require('../assets/images/dl-emotion.gif')},
			{text:'壁纸', img:require('../assets/images/dl-wallpaper.png')},
			{text:'头像', img:require('../assets/images/dl-avatar-257fd72a.png')},
			{text:'输入法'}
			]
		};
	},
	mounted(){
	},
	watch:{
	},
	computed:{
	},
	methods:{
	}
};
</script>