<template>
  <div>
    <ul>
       <li>id:{{id}}</li>
      <li>title:{{title}}</li>
      <li>content:{{content}}</li>
      <!-- <li>学校:{{school}}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
name:'NewsDetail',
mounted(){
  console.log('newDetail执行了',this);
},
props:['id','title','content']

}
</script>

<style>

</style>