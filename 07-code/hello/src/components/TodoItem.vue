<template>
   <li >
          <label>
            <input type="checkbox" :checked='item.done' @change='change(item.id)'/>
            <span >{{item.name}}</span>
          </label>
          <button class="btn btn-danger"  @click='del(item)'>删除</button>
        </li>
</template>

<script>
export default {
 name:'TodoItem',
 props:['item'],
 methods:{
     del(id){
         this.$bus.$emit('del',id)
     },
     change(id){
         console.log(222);
         this.$bus.$emit('change',id)
     }
 }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display:none;
  margin-top: 3px;
}


li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
    background-color:yellow;
}
li:hover button{
        display:block
}
</style>