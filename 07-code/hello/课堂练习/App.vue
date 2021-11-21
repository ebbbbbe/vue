<template>
  <div class='demo'>
    <h2 ref='foo'>hello vue</h2>
    <p>{{childMsg}}</p>
    <Holleworld :msg='msg' :num='num' :car='car' :getData='getData'></Holleworld>
    <!-- <Demo ref="demo"></Demo> -->
  </div>
</template>

<script>

import Holleworld from './components/HelloWorld.vue';
// import Demo from './components/Demo.vue'
export default {
  name:'App',
  data(){
    return{
      msg:'Hello App',
      num:200,
      childMsg:'',
      car:{
        name:'长城',
        price:60000
      }
    }
  },
  methods:{
    getData(value){
        this.childMsg = value
    }
  },
  components:{Holleworld},
  mounted(){
    // 等页面加载完毕后 要获取h2标签
    console.log(this); //指向的是VueComponent的实例对象
    console.log(this.$refs);
    console.log(this.$refs.foo);//this.$refs是用于获取ref属性所在的标签对象
  }
}
</script>

<style>
  .demo{
    width: 800px;
    height: 600px;
    background-color: pink;
  }
</style>