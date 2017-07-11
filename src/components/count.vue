<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{count}}</h3>
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
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
         computed:mapState(["count"])
    }
</script>