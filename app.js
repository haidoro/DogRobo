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


// コンポーネント定義
var pageHeader = 
`<div>
<slot>
<img src = "images/${headerImage}" alt = "朝">
</slot>
</div>`

Vue.component('page-header', {
    template: pageHeader
})

new Vue({
    el: "#wrapp-page"
});