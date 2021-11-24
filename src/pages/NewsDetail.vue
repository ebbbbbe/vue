<template>
  <div>
      <ul>
       <li>id:{{id}}</li>
      <li>title:{{title}}</li>
      <li>content:{{content}}</li>
      </ul>
  </div>
</template>

<script>
export default {
name:'NewsDetail',
mounted(){
    
},
props:['id','title','content']
}
</script>

<style>

</style>