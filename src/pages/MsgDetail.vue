<template>
  <div>
      <ul>
          <li>id:{{id}}</li>
          <li>title:{{title}}</li>
          <li>contnet:{{content}}</li>
      </ul>
  </div>
</template>

<script>
export default {
name:'MsgDetail',
props:['id','title','content']
}
</script>

<style>

</style>