
const BoxBar={
    props:{
        boxbartitle:String
    },
    template:`
        <div>
            <h2>{{boxbartitle}}</h2>
            <slot name=s1></slot>
            <slot name=s2></slot>
        </div>
    `
}



const TabBar={
    props:{
        odertab:Array
    },
    created(){
        console.log(odertab)
    }
};


const vm = new Vue({
    el:'#box',
    data:{
        orderTabs: [
            '当前订单',
            '挂单中',
            '已付款',
            '取消的订单'
        ],
    },
    components:{
        'v-box-bar':BoxBar,
        'v-tab-bar':TabBar,
    }
});