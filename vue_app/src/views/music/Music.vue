<template>
  <div>
      <aplayer autoplay
        :music="musicList[0]"
        :list="musicList"
        v-if="isShow"
      >

      </aplayer>
  </div>
</template>

<script>
  import Aplayer from 'vue-aplayer'
  import Axios from 'axios'
  export default {
    data(){
      return{
        musicList:[],
        isShow:false,
      }
    },
    created(){
      Axios.get('/data/musicdata.json')
        .then((res) => {
          // console.log(res.data);
          // this.musicList = res.data.musicData;
          var data = res.data.musicData;
          //修改对应属性的名称
          data.forEach((elem) =>{
            var obj = {};
            obj.title = elem.title;
            obj.src = elem.src;
            obj.artist = elem.author;
            obj.pic = elem.musicImgSrc;
            obj.lrc = elem.lrc;
            this.musicList.push(obj);
          });
          this.isShow = true
          console.log(this.musicList)
        })
    },

    components:{
      Aplayer
    }
  }
</script>

<style scoped>

</style>
