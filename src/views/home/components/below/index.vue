<template>
  <!-- <div class="content">
    <aside>
      One of the biggest lies ever told, Is blood makes you "FAMILY"? Nope!
      Blood makes you "related", Loyalty love and trust makes you "family"
    </aside>
    <article>右侧小功能</article>
    <footer>footer</footer>
  </div> -->
  <div class="container">
    <div @click="setActive(1)" class="item" :class="id === 1 ? 'active' : ''">
      <div class="shadow"></div>
      <div class="content">
        <div class="icon">
          <i class="fa fa-sun-o"></i>
        </div>
        <div class="text">
          <div class="tit">这是标题</div>
          <div class="sub">这是一段描述</div>
        </div>
      </div>
    </div>
    <div @click="setActive(2)" class="item" :class="id === 2 ? 'active' : ''">
      <div class="shadow"></div>
      <div class="content">
        <div class="icon">
          <i class="fa fa-cloud"></i>
        </div>
        <div class="text">
          <div class="tit">这是标题</div>
          <div class="sub">这是一段描述</div>
        </div>
      </div>
    </div>
    <div @click="setActive(3)" :class="id === 3 ? 'active' : ''" class="item">
      <div class="shadow"></div>
      <div class="content">
        <div class="icon">
          <i class="fa fa-tint"></i>
        </div>
        <div class="text">
          <div class="tit">这是标题</div>
          <div class="sub">这是一段描述</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "HelloWorld",
  // 使用setup 代替 data
  // 因为我这里使用的是typescript，因此需要给参数指定类型
  setup(props: any, context: any) {
    let id = ref(1);
    const setActive = (e: any) => {
      id.value = e;
    };
    return {
      id,
      setActive,
    };
  },
};
</script>
<style lang="scss" scoped>
// .content {
//   width: 100vw;
//   height: 100vh;
//   background: #fff;
//   color: #000;
// }
.container {
  /* 弹性布局 默认水平排列 */
  display: flex;
  width: 90vw;
  height: 400px;
  /* 溢出隐藏 */
  overflow: hidden;
}
.item {
  /* 相对定位 */
  position: relative;
  width: 60px;
  margin: 10px;
  cursor: pointer;
  border-radius: 30px;
  /* 保持原有尺寸比例，裁切长边 */
  background-size: cover;
  /* 定位背景图像为正中间 */
  background-position: center;
  /* 过渡效果：时长 贝塞尔曲线 */
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  overflow: hidden;
  background: red;
}
.item .shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
.item .content {
  display: flex;
  position: absolute;
  left: 10px;
  right: 0;
  bottom: 10px;
  height: 40px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}
.item .content .icon {
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

.item .content .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  color: #fff;
  width: 100%;
}
.item .content .text div {
  /* 超出显示省略号（需要设置width） */
  width: calc(100% - 70px);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
.item .content .text .tit {
  font-weight: bold;
  font-size: 18px;
}
.item .content .text .sub {
  /* 设置过渡效果延迟时间 */
  transition-delay: 0.1s;
}
/* 选中态样式 */
.item.active {
  flex: 1;
  border-radius: 40px;
}
.item.active .shadow {
}
.item.active .content {
  bottom: 20px;
  left: 20px;
}
.item.active .content .text div {
  opacity: 1;
}
</style>
