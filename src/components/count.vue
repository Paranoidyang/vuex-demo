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
//引入mapState,mapMutations,mapGetters
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex'; 
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
        //computed:mapState(["count"]),
        //
        //注意三个点是ES6中的展开运算符，在vue 的构造器里边只能有一个computed属性，如果你写多个，只有最后一个computed属性可用
         computed:{
            ...mapState(["count"]),
            ...mapGetters(["count"])
        },

        // 在模板中可以直接使用我们的reduce或者add方法
        //  methods:mapMutations([
        //     'add','reduce'
        // ]),
        
          methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction','reduceAction'])
        }
        
    }
</script>