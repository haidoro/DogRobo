var router = new VueRouter({
    routes:[
        {
        path:'/top',
        component:{
            template:`<main><section class="about">
<h2 class="heading-secondary">我輩は犬ロボットである</h2>
<img class="about__picture" src=" images/morning.jpg" alt="朝のDogRobo">
<div class="about__discription">
<p class="paragraph">どこで生れたかとんと見当がつかぬ。</p>
<p class="paragraph">何でも薄暗いじめじめした所でGya,Guwaと奇怪な声で泣いていた事だけは記憶している。</p>
<p class="paragraph">吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれはプー太郎という人間中で一番獰悪な種族であったそうだ。このプー太郎というのは時々我々を捕えて壊してしまうという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌のひらに載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。</p>
</div>
</section>
<section class="walk">
<h2 class="heading-secondary"><img src="images/heading2.png" alt="正しくDogRoboと散歩する方法"></h2>
<img class="walk__picture-1" src="images/dog2.jpg" alt="犬の休憩と理想の主人">
<img class="walk__picture-2" src="images/dog1.jpg" alt="正当な犬の散歩">
<img class="walk__picture-3" src="images/dog3.png" alt="おすわりの姿勢">
<img class="walk__picture-4" src="images/dog4.png" alt="リラックスした姿勢">
<div class="walk__description">
<p class="paragraph">主人は我輩に何でもやらせたがる。俳句をやって伊藤園へ投書をさせようとしたり、新体操をやらせて全国大会の予選の予選へ出させたり、間違いだらけの英文を書かせたり、時によると弓に凝ったり、謡いを習わせたり、またあるときはヴァイオリンなどをブーブー鳴らせたりするが、気の毒な事には、どれもこれも物になるはずがない。</p>
<p class="paragraph">ようやく、我輩に教えるのにも飽きた主人がプイと外出したので、茶の木の根を一本一本嗅ぎながら、西側の杉垣のそばまでくると、枯菊を押し倒してその上に大きな猫が前後不覚に寝ている。彼は吾輩の近づくのも一向心付かざるごとく、また心付くも無頓着なるごとく、大きな鼾をして長々と体を横たえて眠っている。他の庭内に忍び入りたるものがかくまで平気に睡ねむられるものかと、吾輩は窃かにその大胆なる度胸に驚かざるを得なかった。彼は純粋の黒猫である。わずかに午を過ぎたる太陽は、透明なる光線を彼の皮膚の上に抛げかけて、きらきらする柔毛にこげの間より眼に見えぬ炎でも燃え出いずるように思われた。彼は猫中の大王とも云うべきほどの偉大なる体格を有している。</p>
<p class="paragraph">決闘の時は近い。</p>
</div>
</section></main>`
        }
    },
    {
        path:'/users',
        component:{
            template:'<div>This is users Page.</div>'
        }
    },
    {
        // 定義されていないパスへの対応。トップページへリダイレクトする。
        path: '*',
        redirect: '/top'
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