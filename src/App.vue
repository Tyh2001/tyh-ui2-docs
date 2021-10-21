<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: '',
  setup () {

    return {}
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
pre {
  margin-top: 12px;
}
pre code.hljs {
  padding: 20px 0px;
  font-family: "微软雅黑";
  font-size: 18px;
  border-radius: 10px;
}

.title {
  font-weight: 500;
  color: #1f2f3d;
  margin-bottom: 50px;
}
.Subtitle {
  color: #515a6e;
  line-height: 60px;
}
p {
  color: #515a6e;
  line-height: 40px;
  font-size: 15px;
}
::-webkit-scrollbar {
  width: 6px;
  background-color: #ffffff;
}
::-webkit-scrollbar-thumb {
  background: #dddddd;
  border-radius: 6px;
}
</style>
