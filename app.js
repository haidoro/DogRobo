var router = new VueRouter({
    routes:[
        {
        path:'/top',
        component:{
            template:'<div>This is Top Page.</div>'
        }
    },
    {
        path:'/users',
        component:{
            template:'<div>This is users Page.</div>'
        }
    }
    ]
})

var today = new Date();
var hour = today.getHours();
var headerImage = 'header_morning.png';
if(hour > 5 && hour < 12){
    headerImage = 'header_morning.png';
}else if(hour >=12 && hour < 18){
    headerImage = 'header_noon.png';
}else {
    headerImage = 'header_night.png';
}


//コンポーネント定義
var pageHeader = 
`<div>
<slot>
<img src = "images/${headerImage}" alt = "朝">
</slot>
</div>`

Vue.component('page-header', {
    template: pageHeader
})

var app = new Vue({
    router:router
}).$mount('#wrapp-page')