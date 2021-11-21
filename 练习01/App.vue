<template>
  <section class="todoapp" id="todoapp">
		
		<TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>

		
		</section>
</template>

<script>
// 引入样式文件
import './assets/css/base.css'
import './assets/css/index.css'
// 引入其它组件
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
name:'App',
// 注册组件
components:{TodoHeader,TodoMain,TodoFooter}
}
</script>

<style>

</style>