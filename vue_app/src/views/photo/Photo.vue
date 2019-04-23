<template>
  <div class="photo">
    <router-link v-for="(p,index) in photoList" :to="'/photo-detail/'+index">
      <img :src="p.src" >
    </router-link>
  </div>
</template>
<script>
  import Axios from 'axios'
  export default{
      data(){
        return{
          photoList:[]
        }
      },
      created(){
        Axios.get('data/photodata.json') //public下直接请求
          .then((res) => {
            this.photoList = res.data.photoData;
            // this.$store.state.photoList =
            console.log(this.photoList );
            this.$store.dispatch('setPhoto',this.photoList)
          })
      }
  }
</script>
<style scoped>
  .photo img{
    width: 50%;
  }
</style>
