<template>
  <div class="map">
    <mt-header title="位置">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="btn-group">
      <mt-button class="begin-btn" @click.native="getLocation" type="primary">单次定位</mt-button>
      <mt-button class="begin-btn" @click.native="startWatchLocation" type="primary">开始实时定位</mt-button>
      <mt-button class="begin-btn" @click.native="closeWatchLocation" type="primary">关闭实时定位</mt-button>
    </div>
    <div class="location-content">
    </div>
  </div>
</template>
<script>
export default {
    name: 'homePage',
    methods: {
        getLocation() {
            let self = this;
            navigator.geolocation.getCurrentPosition(function(position) {
                self.$el.querySelector('.location-content').innerHTML = "纬度: " + position.coords.latitude +
                    "<br>经度: " + position.coords.longitude;
            });
            // let timer = navigator.geolocation.getCurrentPosition(function(position) {
            //     alert(JSON.stringify(position));
            //     self.$el.innerHTML = '经度:' + position.coords.longitude + '\n'+
            //     '纬度 :' + position.coords.latitude + '\n'+
            //     '准确度 :' + position.coords.accuracy + '\n'+
            //     '海拔 :' + position.coords.altitude + '\n'+
            //     '海拔准确度 :' + position.coords.altitudeAcuracy + '\n'+
            //     '行进方向 :' + position.coords.heading + '\n'+
            //     '地面速度 :' + position.coords.speed + '\n'+
            //     '时间戳:' + new Date(position.timestamp) + '\n';
            // }, function(err) {
            //     //err.code // 失败所对应的编号
            //     navigator.geolocation.clearWatch(timer);

            // }, {
            //     enableHighAcuracy: true,
            //     timeout: 5000,
            //     maximumAge: 5000,
            //     frequency: 1000
            // });
        },
        startWatchLocation() {

        },
        closeWatchLocation() {

        }
    },
    created: function() {

    }
};

</script>
<style lang="less" scoped>
/deep/ .mint-header {
  font-size: 32px;
}

.map {
  height: 100vh;
  width: 100vw;
  background: #f5f5f5;
  font-size: 16px;
}

.begin-btn {
  margin-top: 30px;
  width: 100%;
}

.btn-group {
  padding: 0 32px;
  margin-top: 2vh;
}

</style>
