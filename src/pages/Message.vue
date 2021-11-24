<template>
  <div>
    <ul>
      <li v-for="m in msgList" :key="m.id">
        <router-link :to="{name:'msgxiangqing',params:m}">{{ m.title }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      msgList: [
        { id: "001", title: "猜谜语", content: "胸前挂钥匙" },
        { id: "002", title: "歇后语", content: "猪八戒照镜子" },
        { id: "003", title: "打一字", content: "王姑娘白姑娘坐在石头上" },
      ],
    };
  },
};
</script>

<style></style>
