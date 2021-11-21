<template>
  <div class='demo'>
      <h2>这是一个demo组件</h2>
  </div>
</template>

<script>
export default {
    name:'Demo',
    data(){
        msg:'Hello Demo'
    },
    props:['msg'],
    methods:{
        send(){
            this.getData1
        }
    }
}
</script>

<style scoped>
 .demo{
     width: 200px;
     height: 200px;
     background-color:yellow;
     color: #fff;
 }
</style>