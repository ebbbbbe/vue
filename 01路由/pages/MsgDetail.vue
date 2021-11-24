<template>
   <div>
    <ul>
      <li>id:{{id}}</li>
      <li>title:{{title}}</li>
      <li>content:{{conyent}}</li>
    </ul>
  </div>
</template>

<script>
export default {
name:'MsgDetail',
mounted(){
  console.log('msgDeatil执行了',this);
},
computed:{
  id(){
    return this.$route.params.id
  },
  title(){
    return this.$route.params.title
  },
  content(){
    return this.$route.params.content
  }
}
}
</script>

<style>

</style>