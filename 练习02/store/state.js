export default{
    // todoList: [
    //     {id:1,name:'滑雪',done:false},
    //     {id:2,name:'游泳',done:false},
    //     {id:3,name:'打球',done:false},
    // ] 
    todoList:JSON.parse(localStorage.getItem('todoList')) || []
}