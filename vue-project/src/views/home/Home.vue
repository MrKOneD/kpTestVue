<template>
  <div class="home">
    <mt-button class="begin-btn" @click.native="startEvent" type="primary">开始使用</mt-button>
    <mt-button class="begin-btn" @click.native="startMap" type="primary">查看所在位置</mt-button>
  </div>
</template>
<script>
export default {
    name: 'homePage',
    methods: {
        startEvent() {
            this.$router.push({
                name: 'loginPage'
            });
        },
        startMap() {
            this.$router.push({
                name: 'maplocation'
            });
        }
    }
};

</script>
<style lang="less" scoped>
.home {
  min-height: 100vh;
  width: 100vw;
  background-image: url(../../assets/image/home-bg.jpeg);
  background-size: cover;
}

.begin-btn {
  margin-top: 15vh;
  width: 70vw;
}

</style>
