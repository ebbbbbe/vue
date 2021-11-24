<template>
<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" v-model='select'>
				<label for="toggle-all" v-show="hide" >Mark all as complete</label>
				<ul class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
					<li :class="{completed:item.done,editing:editId === item.id}" v-for='item in renderList' :key='item.id'>
						<div class="view">
							<input class="toggle" type="checkbox" :checked='item.done' @change='change(item.id)'>
							<label @dblclick="edit(item.id,item.name)">{{item.name}}</label>
							<button class="destroy" @click='del(item)'></button>
						</div>
						<input class="edit" value="Create a TodoMVC template" v-model='editName' @keyup.enter='update(item.id)' @blur='update(item.id)' @keyup.esc='cancel'>
					</li>
				</ul>
			</section> 
</template>

<script>
import {mapGetters, mapState,mapMutations} from 'vuex'
export default {
name:"TodoMain",
data(){
    return{
        editId:'',
        editName:''
    }
},
methods: {
    ...mapMutations(['del','change','update1']),
    // 双击选中
    edit(id,name){
        this.editId = id
        this.editName= name
    },
    // 改变done状态
    // change(id){
    //     this.$store.commit('change',{id})
    // },
    // 删除项目
    // del(id){
    //     this.$store.commit('del',{id})
    // },
    // 更新数据内容
    update(id){
        if(this.editId === ''){
            return
        }
        // this.$store.commit('update',{id,name:this.editName})
        this.updata1({id,name:this.editName})
        this.editId=''
    },
    // 撤销更改
    cancel(){
        this.editId=''
    }
},
computed:{
    ...mapState(['todoList']),
    ...mapGetters(['hide']),
    // ...mapMutations(['del','change']),
    select:{
        get(){
            return this.todoList.every(item=>item.done)
    },
    set(value){
        this.$store.commit('select',{value})
    },
},
    // 隐藏与显示
    // hide(){
    //     return this.todoList.length
    // }
     renderList(){
      // 1.获取路径
      let path = this.$route.path
      // 2.根据路径进行判断 来决定组件中显示什么 /  /active  /completed
      if(path === '/active'){
        // 显示未完成的任务
        return this.todoList.filter(item=> !item.done)
      }else if(path === '/completed'){
        return this.todoList.filter(item=>item.done)
      }else{
        return this.todoList
      }
    }

}
}
</script>

<style>

</style>