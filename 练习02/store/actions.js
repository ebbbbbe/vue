    export default{
        clear({commit}){
            setTimeout(()=>{
                commit('clear')
            },2000)
    
        }
    }
