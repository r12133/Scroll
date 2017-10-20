
var win_h = window.innerHeight;

var control = {
    t: 0,
    autoplay: false,
    speed: 5,
    audio: false
}

function animate(obj,arr) {
    arr.forEach(function(ele){
        ele.key = 'data-' + ele.key;
        obj.setAttribute(ele.key,ele.value);
    })
}

function startScroll(status){
    status.innerText = 'AUTOPLAY ON';
    clearInterval(control.t)
    control.t = setInterval(() => {
        document.documentElement.scrollTop++;
    },control.speed)
}

function stopScroll(status){
    status.innerText = 'AUTOPLAY OFF';
    clearInterval(control.t)
}

function init() {
    var s = skrollr.init();
}

function change_first_settings() {

    var page_first = document.querySelector('.change_first .page'),

        page_six = document.querySelector('.page_six'),

        page_seven = document.querySelector('.page_seven'),

        left_left = document.querySelector('.left_left'),

        page_eight = document.querySelector('.page_eight'),

        page_nine = document.querySelector('.page_nine'),

        page_battle = document.querySelector('.page_battle');

    page_first.style.paddingBottom = '100px';

    page_first.style.boxSizing = 'content-box';

    page_six.style.top = -(1 * win_h) - 100 + 'px';

    page_seven.style.marginTop = '200px';

    page_seven.style.top = -(2 * win_h) - 300 + 'px';
    

    left_left.style.top = -(3 * win_h) - 300 + 'px';

    page_eight.style.top = -(4 * win_h) - 300 + 'px';

    page_nine.style.top = -(5 * win_h) - 300 + 'px';

    page_battle.style.top = -(6 * win_h) -300 + 'px';

    page_battle.style.marginBottom = '96px';
}

window.onload = function() {

    // controll

    var status = document.querySelector('.status');

    control.autoplay && startScroll(status);

    status.onclick = function () {
        control.autoplay = !control.autoplay;
        control.autoplay && startScroll(this);
        !control.autoplay && stopScroll(this);
    }
    
    var page = document.querySelectorAll('.page');
    
    Array.prototype.forEach.call(page, function(ele,index,arr){
      ele.style.height = win_h + 'px';
    })

    document.addEventListener('scroll',winScroll,false);

    // page_one_animation   滚动高度为 h
    
    var page_one = document.querySelector('.page_one');

    page_one.style.marginBottom = '-100px';

    var page_one_control = [
        {key: win_h, value: 'top:0px;' },
        {key: win_h * 1.5 - 50, value: 'top:-100px;'},
    ];
    
    animate(page_one,page_one_control)

    // page_two_animation ( girl )  滚动高度为 2h - 100 ( margin-bottom )

    var page_two_girl = document.querySelector('.page_two .girl');

    var page_two_girl_control = [
        {key: win_h * 1.5 + 100, value: 'right: 150px;' },
        {key: win_h * 2, value: 'right: 100px;'},
    ];

    animate(page_two_girl,page_two_girl_control)

    // page_three_animation ( verre )  滚动高度为 4h - 100 ( margin-bottom )

    var page_three_verre = document.querySelector('.page_three .verre');

    var page_three_verre_control = [
        {key: win_h * 3 - 100, value: 'left: 100px;top:-150px;' },
        {key: win_h * 5 - 100, value: 'left: 400px;top: -200px;'},
    ];

    animate(page_three_verre,page_three_verre_control)

    // page_four_animation ( girl )  滚动高度为 5h - 100 ( margin-bottom )

    var page_four_girl = document.querySelector('.page_four .girl');

    var page_four_girl_control = [
        {key: win_h * 4.5 - 100, value: 'left: 50%' },
        {key: win_h * 5.5 - 100, value: 'left: 52%'},
    ];

    animate(page_four_girl,page_four_girl_control)

    // page_five_animation ( dog_left dog_right )  滚动高度为 6h - 100 ( margin-bottom )

    var page_five_dog_left = document.querySelector('.page_five .dog_left'),
        page_five_dog_right = document.querySelector('.page_five .dog_right');

    var page_five_dog_left_control = [
        {key: win_h * 5 - 100, value: 'left: -400px' },
        {key: win_h * 7 - 100, value: 'left: -100px'},
    ],
        page_five_dog_right_control = [
        {key: win_h * 5 - 100, value: 'right: 0px' },
        {key: win_h * 7 - 100, value: 'right: -300px'},
    ];
    
    animate(page_five_dog_left,page_five_dog_left_control)

    animate(page_five_dog_right,page_five_dog_right_control)

    // change_first 初始化

    change_first_settings();

    // page_six_animation ( self girl )  滚动高度为 8h ( margin-bottom 和 padding-bottom 抵消 )

    var page_six_ = document.querySelector('.page_six'),
        page_six_girl = document.querySelector('.page_six .girl');

    var page_six_control = [
        {key: win_h * 7, value: 'left: 100%' },
        {key: win_h * 9, value: 'left: -100%'},
    ],
        page_six_girl_control = [
        {key: win_h * 7.5, value: 'right: -300px' },
        {key: win_h * 9, value: 'right: 0px'},
    ];

    animate(page_six_,page_six_control)

    animate(page_six_girl,page_six_girl_control)

    // page_seven_animation  滚动高度为 9h + 200 ( margin-top )

    var page_seven_ = document.querySelector('.page_seven');

    var page_seven_control = [
        {key: win_h * 9 + 200, value: 'left: 0%;' },
        {key: win_h * 10 + 200, value: 'left: -100%;'},
    ]

    animate(page_seven_,page_seven_control)

    // page_eight_animation  滚动高度为 11h + 200 ( margin-top )

    var page_eight = document.querySelector('.page_eight');

    var page_eight_control = [
        {key: win_h * 10 + 200, value: 'left: 100%;transform: rotateZ(-5deg);' },
        {key: win_h * 12 + 200, value: 'left: -100%;transform: rotateZ(5deg);'},
    ]

    animate(page_eight,page_eight_control)

    // page_nine_animation ( self girl )  滚动高度为 12h + 200 ( margin-top )

    var page_nine = document.querySelector('.page_nine'),
        page_nine_girl = document.querySelector('.page_nine .girl');

    var page_nine_control = [
        {key: win_h * 11 + 200, value: 'left: 100%' },
        {key: win_h * 13 + 200, value: 'left: -100%'},
    ],
        page_nine_girl_control = [
        {key: win_h * 11 + 200, value: 'left: -800px' },
        {key: win_h * 13 + 200, value: 'left: 0px'},
    ];

    animate(page_nine,page_nine_control)

    animate(page_nine_girl,page_nine_girl_control)

    // page_battle_animation 滚动高度为 13h + 200 ( margin-top )

    var page_battle = document.querySelector('.page_battle');

    var page_battle_control = [
        {key: win_h * 12 + 200, value: 'left: 20%' },
        {key: win_h * 12.5 + 200, value: 'left: 0%'},
    ]

    animate(page_battle,page_battle_control)

    // init

    init();
}

function winScroll(e) {

    var st = document.documentElement.scrollTop;

    var change_first = document.querySelector('.change_first');

    var page_seven = document.querySelector('.page_seven');

    var page_eight = document.querySelector('.page_eight');

    var left_left = document.querySelector('.left_left');

    var page_battle = document.querySelector('.page_battle');

    // 固定 change_first

    if(st >= ( 7 * win_h - 100 ) ) {

        change_first.style.position = 'fixed';

    }else {

        change_first.style.position = 'relative';

    }

    // 固定 page_seven & left_left ||  st < ( 9 * win_h + 300 ) + else if --> 让回滚时不出现闪烁
    
    if(st >= ( 8 * win_h ) && st < ( 9 * win_h + 300 ) ) {

        page_seven.style.left = '0%';

        left_left.style.left = '0px';

    }else if(st < ( 8 * win_h )) {

        page_seven.style.left = '100%';

        left_left.style.left = '100%';

    }

    // 固定 battle 

    if(st >= ( win_h * 12 + 200 ) ) {
        page_eight.style.transform = 'rotateY(0deg)'
    }else {
        page_battle.style.left = '100%';
    }

    // 切换battle状态图片 此时滚动高度为 13h + 200

    if(st >= ( 13 * win_h + 200 ) && st <= ( 13 * win_h + 200 + 96 )) {

                var img = page_battle.children[0];

                var delta = st - ( 13 * win_h + 200 );

                var i = img.src.indexOf('img/');

                var now_index = parseInt(img.src.substr(i + 4));

                var will_index = Math.floor(delta / 4);

                var t = 0;

    }

}


