<template>
  <div>
    <div class="nav">
      <div class="logo">
        <p>JIAZE'S EVOLUTION</p>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li><router-link to="/Java">Java</router-link></li>
        <li><router-link to="/frontdev">前端</router-link></li>
        <li>Blog</li>
        <li>Context</li>
      </ul>
    </div>
    <div class="banner">
      <div class="desc">
        <div class="line"></div>
        <p>
          That the past is like overnight dream, scattered in the night sky,
          silent enron.
        </p>
      </div>
      <div class="name">
        <h1>
          A pipe-dream<br />
          白日梦
        </h1>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 50px;
  left: 50px;
  p {
    font-size: 30px;
    color: #cee002;
    font-weight: 800;
    color: #fff;
  }
}
.menu {
  position: absolute;
  top: 20px;
  right: 40px;
  ul {
    li {
      list-style: none;
      display: inline-block;
      padding: 40px;
      color: #fff;
      a {
        color: #fff;
      }
    }
    .active {
      color: #fff;
    }
  }
}
.banner {
  width: 60%;
  height: 100vh;
  margin: auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
  color: #fff;
  .desc {
    align-self: end;
    p {
      width: 50%;
      font-size: 30px;
      font-weight: 200;
      padding-top: 20px;
    }
  }
  .name {
    align-self: center;
    h1 {
      font-size: 100px;
    }
  }
  .line {
    width: 100px;
    height: 6px;
    background: #cee002;
  }
}
</style>
