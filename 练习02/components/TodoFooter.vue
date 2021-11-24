<template>
  <footer class="footer" v-show="hide">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"
      ><strong>{{ leftCount }}</strong> item left</span
    >
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <router-link class="/TodoFooter" to="/all">All</router-link>
      </li>
      <li>
        <router-link to="/active">Active</router-link>
      </li>
      <li>
        <router-link to="/CompletedQ">Completed</router-link>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" v-show="completed" @click="clear">
      Clear completed
    </button>
  </footer>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "TodoFooter",
  computed: {
    ...mapState(["todoList"]),
    ...mapGetters(["leftCount", "hide", "incomplete", "completed"]),
    // hide(){
    //     return this.todoList.length
    // },
    // 未完成个数
    // incomplete(){
    //     return this.todoList.filter(item=>!item.done).length
    // },
    // //
    // completed(){
    //     return this.todoList.some(time=>time.done)
    // }
   
  },
  methods: {
    // clear(){
    //     // this.$store.commit('perfect')
    // 	// this.$store.dispatch('clear')//分发给action去

    // }
    ...mapActions(["clear"]),
  },
};
</script>

<style></style>
