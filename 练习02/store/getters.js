export default{
    leftCount(state){
        // 第一个参数是state
        return state.todoList.filter(item=>!item.done).length
    },
    hide(state){
        return state.todoList.length
    },
    incomplete(state){
        return state.todoList.filter(item=>!item.done).length
    },
    // 
    completed(state){
        return state.todoList.some(time=>time.done)
    }
}