<template>
  <div class="box">
    <h2>这是一个HolloWorld的单文件组件</h2>
    <p>{{msg}}=={{num}}=={{car.name}}</p>
    <button @click='send'>给父组件传递数据</button>
    <Demo></Demo>
  </div>
</template>

<script>
import Demo from './Demo.vue'
export default {
  name:'Holleworld', //指定当前组件名称 这个名字最终显示在浏览器的插件中
  props:['msg','num','car','getData'],
  // props:{
  //   msg:String,
  //   num:Number,
  //   car:Object
  data(){
    return{
      childMsg:'Hello World--child',
      
    }
  },
  methods:{
      send(){
        console.log(this.msg);
        this.getData(this.childMsg)
      }
  },
  components:{Demo}
  // props:{
  //   msg:{
  //     type:String,//指定数据类型
  //     required:true,//是否必填项
  //     default:'aaa'//默认值
  //   },
  //   num:{
  //     type:Number,
  //     required:true,
  //     validatoc:value=>{ //增加校验
  //       return value > 0
  //     }
  //   },
  //   car:{
  //     type:Object
  //   }
  // }
  // }
}
</script>

<style scoped>
  .box{
    height: 200px;
    width: 300px;
    background-color:red;
    color:#fff
  }
</style>