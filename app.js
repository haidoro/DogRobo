var Top = {
    template: '#top'
}

var router = new VueRouter({
    routes: [{
            path: '/top',
            component: Top
        },
        {
            path: '/users',
            component: {
                template: '<div>This is users Page.</div>'
            }
        },
        {
            // 定義されていないパスへの対応。トップページへリダイレクトする。
            path: '*',
            redirect: '/top'
        }
    ]
})



//コンポーネント定義
var pageHeader =
`<div>
<slot>
<img v-bind:src = "headerImage" alt="時間帯">
</slot>
</div>`

Vue.component('page-header', {
    props: {
        src: {
            type: String,
            isRequired: true
        }
    },
    template: pageHeader
})

var app = new Vue({
    router: router,
    data: function () {
        var today = new Date();
        var hour = today.getHours();
         headerImage = './images/header_morning.png';
        if (hour > 5 && hour < 12) {
            headerImage = './images/header_morning.png';
        } else if (hour >= 12 && hour < 18) {
            headerImage = './images/header_noon.png';
        } else {
            headerImage = './images/header_night.png';
        }

        return {
            src: headerImage
        }
    }
}).$mount('#wrapp-page')