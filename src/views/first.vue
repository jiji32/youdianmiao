<template>
<body>
<div class="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
        
    <div class="container">
        <header>
            <img class="img" src="@/assets/img/home/first0.jpg" alt="">
        </header>      
        <div class="main">
            <h2>YDm Trip</h2>
            <div class="shop">
              <el-button size="large" round @click="goToHome">来到首页</el-button>
            </div>
        </div>
		     
        <div class="shell">
            <div class="content">
                <div class="item" style="background-image: url('/images/book_images/lun2.gif');"></div>
                <div class="item" style="background-image: url('/images/book_images/lun1.gif');"></div>
                <div class="item" style="background-image: url('/images/book_images/lun3.gif');"></div>
            </div>
        </div>    
    </div>
	
	<!--		测试泡泡-->
		<div class="shell">
			<div class="box">
				<div class="ball"></div>
				<div class="shadow"></div>
			</div>
			
			<div class="box">
				<div class="ball"></div>
				<div class="shadow"></div>
			</div>
			
			<div class="box">
				<div class="ball"></div>
			</div>
		</div>		
	
	 <div class="we">
        <div class="page">
            <img src="/images/book_images/guoyali.jpg">
            <span></span>
        </div>
        <div class="page">
            <img src="/images/book_images/qinyuhua.jpg">
            <span></span>
        </div>
        <div class="page">
            <img src="/images/book_images/caiyuxun.jpg">
            <span></span>
        </div>
        <div class="page">
            <img src="/images/book_images/lirui.jpg">
            <span></span>
        </div>
        <div class="page">
            <img src="/images/book_images/shiyuqing.jpg">
            <span></span>
        </div>
    </div> 
  </body>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const goToHome = () => {
  router.push({ path: '/home' })
}

onMounted(() => {
  const header = document.querySelector('header')
  const img = document.querySelector('.img')
  let scrollDistance = 0
  let requestId = null

  const updateHeaderClipPath = () => {
    const clipPercentage = 100 - (scrollDistance / 2)
    header.style.clipPath = `polygon(0 0, 100% 0, 100% ${clipPercentage}%, 0 100%)`
    const scaleValue = 1 + (scrollDistance / 150 * 0.2)
    img.style.transform = `scale(${scaleValue})`
  }

  const scrollHandler = (event) => {
    scrollDistance = Math.max(0, Math.min(150, scrollDistance + event.deltaY))
    if (!requestId) {
      requestId = requestAnimationFrame(() => {
        updateHeaderClipPath()
        requestId = null
      })
    }
  }

  window.addEventListener('wheel', scrollHandler)
})
</script>


<style scoped>
* {
    padding: 0;
    margin: 0;
}

body   {
    height: 2200px;
    background: linear-gradient(to bottom, #000000, #3f603b)!important;

}


.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    width: 100%;
    height: 460px;
    overflow: hidden;
    transition: clip-path 0.5s ease;
    z-index: 1;
}

/* .img { */
    /* width: 100%;
    height: 100%;
    background: url("src/assets/img/home/first0.jpg");
    background-size: cover;
    transform: scale(1);
    /* transition: transform 0.5s ease; */
   /* transition: clip-path 0.5s ease; /* 添加过渡效果 */
	/* z-index: 1; */ 
/* } */
header img {
  width: 100%; /* 宽度撑满父容器 */
  object-fit: cover; 
  display: block; /* 去除 img 底部默认间隙 */
  transform: scale(1); /* 初始缩放比例，可按需调整 */
  transition: clip-path 0.5s ease; /* 保留和之前一样的 clip-path 过渡效果 */
  z-index: 1; /* 层叠顺序，确保图片在上方 */
}

.main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1cm; /* 设置与上方的间距为3厘米 */
	
    position: relative; /* 设置为相对定位，为绝对定位的子元素提供参考 */
    z-index: 2; /* 确保其位于上方 */
}

.main h2 {
    font-size: 75px; /* 放大至原来的1.5倍 */
    color: #A0BF52; /* 字体颜色为 #A0BF52 */
    font-weight: bold; /* 加粗字体 */
    text-shadow: -3.5px -3.5px 0 #000,  
                 3.5px -3.5px 0 #000,
                 -3.5px 3.5px 0 #000,
                 3.5px 3.5px 0 #000; /* 白色宽度为2mm的描边 */
	padding-left: 2cm; 
}

.shop {
    position: relative; /* 设置为相对定位 */
    
	margin-left: 10cm;
}

.shop .el-button {
        /* 默认状态背景色 */
        background-color: #fbea54; /* 蓝色示例，可替换为任意颜色值 */
        /* 默认状态文本颜色 */
        color: #0b0000; /* 白色示例 */
        /* 边框颜色（可选，若按钮有边框） */
        border-color: #fff; /* 边框颜色 */;
    }

    /* 悬停状态样式（增强交互反馈） */
    .shop .el-button:hover {
        background-color: #3f603b; /* 深一度蓝色 */
        color: #ffffff; /* 文本颜色可保持一致或调整 */
    }
.shell {
    position: relative;
    width: 60vw; /* 宽度占视口宽度的60% */
    height: 40vw; /* 高度占视口宽度的40% */
    max-width: 380px; /* 最大宽度为380像素 */
    max-height: 250px; /* 最大高度为250像素 */
    margin: 3.5cm auto 0; /* 上方2厘米的外边距，水平居中 */
    color: white;
    perspective: 1000px;
    transform-origin: center;
	z-index: 1;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: translateZ(-30vw) rotateY(0);
    animation: carousel 9s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;
	z-index: 1;
}

.item {
    position: absolute;
    width: 60vw;
    height: 40vw;
    max-width: 525px;
    max-height: 350px;
    
	box-shadow: 0 15px 35px #000000, 0 0 1px 1px #000000;  
    border-radius: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-box-reflect: below 25px -webkit-linear-gradient(transparent 50%, rgba(255, 255, 255, 0.3));
	z-index: 1;
}

.item:nth-child(1) {
    transform: rotateY(0) translateZ(35vw);
}

.item:nth-child(2) {
    transform: rotateY(120deg) translateZ(35vw);
}

.item:nth-child(3) {
    transform: rotateY(240deg) translateZ(35vw);
}

@keyframes carousel {
    0%, 17.5% {
        transform: translateZ(-35vw) rotateY(0);
    }
    27.5%, 45% {
        transform: translateZ(-35vw) rotateY(-120deg);
    }
    55%, 72.5% {
        transform: translateZ(-35vw) rotateY(-240deg);
    }
    82.5%, 100% {
        transform: translateZ(-35vw) rotateY(-360deg);
    }
}

/* 萤火虫测试 */
.bubbles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3; /* 使其位于其他元素上方 */
    pointer-events: none; /* 禁止鼠标事件 */
}

.bubbles span {
    width: 10px;
    height: 10px;
    background-color: #FBFF1C;
    border-radius: 50%;
    position: absolute;
    animation: floatDown 20s linear infinite, glow 5s linear infinite;
}

@keyframes floatDown {
    0% {
        transform: translateY(0) scale(0);
    }
    50% {
        transform: translateY(50vh) scale(1);
    }
    100% {
        transform: translateY(100vh) scale(1);
    }
}

@keyframes glow {
    0%, 50%, 100% {
        box-shadow: 0 0 30px #FFFFFF, 0 0 50px #FFF8CF, 0 0 100px #FBFF1C;
    }
    25%, 75% {
        box-shadow: 0 0 50px #FFFFFF, 0 0 80px #FFF8CF, 0 0 150px #FBFF1C;
    }
}

.bubbles span:nth-child(1) {
    left: 10%;
    animation-duration: 20s;
}

.bubbles span:nth-child(2) {
    left: 30%;
    animation-duration: 20s;
}

.bubbles span:nth-child(3) {
    left: 50%;
    animation-duration: 4.5s;
}

.bubbles span:nth-child(4) {
    left: 70%;
    animation-duration: 5.5s;
}

.bubbles span:nth-child(5) {
    left: 90%;
    animation-duration: 4s;
}

.bubbles span:nth-child(6) {
    left: 20%;
    animation-duration: 5.8s;
}
.bubbles span:nth-child(7) {
    left: 95%;
    animation-duration: 10s;
}
.bubbles span:nth-child(8) {
    left: 80%;
    animation-duration: 7s;
}
.bubbles span:nth-child(9) {
    left: 60%;
    animation-duration: 7s;
}
.bubbles span:nth-child(10) {
    left: 65%;
    animation-duration: 20s;
}

/*测试泡泡*/
.box {
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 300px; /* Adjusted height */
	top: 5%; /* Align vertically center */
	left: calc(-140% + 100px + 60px); /* Align to the right of cart image */
	transform: translateY(-60%) scale(0.6); /* Vertical center alignment and scale down */
}




.ball {
	animation: float 3.5s ease-in-out infinite; 
	height: 300px;
	width:300px;
	border-radius: 50%;
	position: relative;
	/* 为球的背景添加径向渐变，渐变中心在 77% 水平、30% 垂直位置*/
	background: radial-gradient(circle at 77% 30%,
/*	渐变起点颜色为白色，半径为 5 像素*/
		white 8px,
	/*	渐变颜色从白色平滑过渡到淡蓝色，半径为 8%*/
		#A0BF52 6%,
	/*	渐变颜色从淡蓝色平滑过渡到深蓝色，半径为 60%*/
		#353a26 50%,
	/*	渐交颜色从深蓝色平滑过波到淡蓝色，半径为 100% */
		#3D6036 100%);
	
	/* 为球添加多重内阴影效果 */
	/* 内部白色阴影，宽度 20 像素*/
	box-shadow: inset 0 0 20px #425539,
/*
				10px 0 46px #c3d6b5,
				88px 0px 60px #96a782,
*/
				inset -20px -40px 60px #3D6036,
				0 20px 70px #A0BF52;
/*				0 0 30px #fff;*/
	}
.box:nth-child(2){
	z-index:-999;
}
.box:nth-child(2) .ball {
	left: -80px;
	top: 35px;
	width: 100px; 
	height: 100px;
	z-index: -999; 
	opacity: .5;
}
.box:nth-child(3) .ball{
	left: 80px;
	top: -80px;
	width: 20px; 
	height: 20px;
	opacity: .1;	
}

.shadow {
	background:#233321;
	width: 200px;
	height: 40px;
	top: 85%;
	animation: expand 4s infinite;
	position: absolute;
	border-radius: 50%;
}
.box:nth-child(2) .shadow {
	width: 90px;
	height: 30px; 
	top: 72.5%;
	left: -75px;
	opacity: .4;
}
/* 添加飘浮动画*/
@keyframes float {
	0%{
transform: translatey(0px) rotate(-10deg);
	}
	50%{
transform: translatey(-80px) rotate(10deg);
	}
	100% {
transform: translatey(0px) rotate(-10deg);
	}
}

@keyframes expand {
	0%,
	
	100% {
	transform: scale(0.5);
	}
	50%{
	transform: scale(1);
	}
}

/*手风琴个人名片*/
.we {
            width: 90%;
            height: 600px;
            display: flex;
			margin-left: 2cm;
			margin-top: 1cm;
        }
        .page{
            flex: 1;
            overflow: hidden;
            transition: .5s;
            margin: 0 20px;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, .5);
            border-radius: 20px;
            border: 10px solid #fff;
            background-color: #fff;
        }
        .page>img{
            width: 200%;
            height: 85%;
            object-fit: cover;
            transition: .5s;
        }
        .page>span{
            font: 100 25px '优设标题黑';
            text-align: center;
            height: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .page:hover{
            flex-basis: 40%;
        }
        .page:hover>img{
            width: 100%;
            height: 100%;
        } 
hr{
	height: 25px;
	background-color: #353a26;
	border: 0;
}
</style>