<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{count}}</h3>
        <div>
            <button @click="add">+</button>
            <button @click="reduce">-</button>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';  //引入mapState,mapMutations
    import store from '@/vuex/store'
    export default{
        data(){
            return{
                msg:'Hello Vuex',
 
            }
        },
        store,
        //方法一
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // },
        
        //方法二
        // computed:mapState({
        //         count:state=>state.count
        //  })
        
        //方法三
         computed:mapState(["count"]),

        // 在模板中可以直接使用我们的reduce或者add方法
         methods:mapMutations([
            'add','reduce'
        ]),
    }
</script>