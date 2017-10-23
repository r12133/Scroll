// 窗口高度
var win_h = window.innerHeight;
// 全局控制器
var control = {
    t: 0,
    autoplay: false,
    speed: 8,
    audio: false,
    user_scroll_speed: 48,
}
// 设置动画
function animate(obj,arr) {
    arr.forEach(function(ele){
        ele.key = 'data-' + ele.key;
        obj.setAttribute(ele.key,ele.value);
    })
}
// 开始自动滚动
function startScroll(status){
    status.innerText = 'AUTOPLAY ON';
    clearInterval(control.t)
    control.t = setInterval(() => {
        var st = document.documentElement.scrollTop;
        if(st >= ( 13 * win_h + 200 ) && st <= ( 13 * win_h + 200 + 192 + 30 )) {
            document.documentElement.scrollTop = st + 1;
        }else {
            document.documentElement.scrollTop += 2;
        }
    },control.speed)
}
// 关闭自动滚动
function stopScroll(status){
    status.innerText = 'AUTOPLAY OFF';
    clearInterval(control.t)
}
// 用户滚动的速度
function define_scroll_speed(num){
    num = num || 8;
    document.onmousewheel = function(e){
        e.preventDefault();
        e.returnValue = false;
        if(e.deltaY > 0) {
            document.documentElement.scrollTop+=num;
        }else {
            document.documentElement.scrollTop-=num;
        }
    }
}
// 初始化
function init() {
    var s = skrollr.init();
}
// 第一次转场的设置
function change_first_settings() {

    var page_first = document.querySelector('.change_first .page'),

        page_six = document.querySelector('.page_six'),

        page_seven = document.querySelector('.page_seven'),

        left_left = document.querySelector('.left_left'),

        page_eight = document.querySelector('.page_eight'),

        page_nine = document.querySelector('.page_nine'),

        page_battle = document.querySelector('.page_battle'),

        left_left_end = document.querySelector('.left_left_end'),

        page_ten = document.querySelector('.page_ten'),

        page_eleven = document.querySelector('.page_eleven'),

        page_twelve = document.querySelector('.page_twelve'),

        page_thirteen = document.querySelector('.page_thirteen'),

        page_fourteen = document.querySelector('.page_fourteen'),

        page_fiveteen = document.querySelector('.page_fiveteen'),

        page_sixteen = document.querySelector('.page_sixteen'),

        page_seventeen = document.querySelector('.page_seventeen'),

        page_eightteen = document.querySelector('.page_eightteen'),

        page_nineteen = document.querySelector('.page_nineteen'),

        page_end = document.querySelector('.page_end');

    page_first.style.paddingBottom = '100px';

    page_first.style.boxSizing = 'content-box';

    page_six.style.top = -(1 * win_h) - 100 + 'px';

    page_seven.style.marginTop = '200px';

    page_seven.style.top = -(2 * win_h) - 300 + 'px';
    

    left_left.style.top = -(3 * win_h) - 300 + 'px';

    page_eight.style.top = -(4 * win_h) - 300 + 'px';

    page_nine.style.top = -(5 * win_h) - 300 + 'px';

    page_battle.style.top = -(6 * win_h) - 330 + 'px';

    page_battle.style.marginBottom = '192px';

    left_left_end.style.top = -(7 * win_h) - 330 - 192 + 'px';

    page_ten.style.top = -(8 * win_h) - 330 - 192 + 'px';

    page_eleven.style.top = -(9 * win_h) - 330 -192 + 'px';

    page_twelve.style.top = -(11 * win_h) - 330 -192 + 'px';

    page_thirteen.style.top = -(12 * win_h) - 330 -192 + 'px';

    page_fourteen.style.top = -(14 * win_h) - 330 -192 + 'px';  // 从上到下 所以高 100%

    page_fiveteen.style.top = -(15 * win_h) - 330 -192 + 'px';  // 从上到下

    page_sixteen.style.top = -(15 * win_h) - 330 -192 + 'px';  // 从左到右 恢复正常高度

    page_seventeen.style.top = -(16 * win_h) - 330 -192 + 'px';

    page_eightteen.style.top = -(17 * win_h) - 330 -192 + 'px';

    page_nineteen.style.top = -(17 * win_h) - 330 -192 + 'px';  // 从下到上

    page_end.style.top = -(18 * win_h) - 330 -192 + 'px';  // 从下到上
}

window.onload = function() {

    // 刷新回顶部

    setTimeout(function(){
        document.documentElement.scrollTop = 0;
    }, 0);

    define_scroll_speed(control.user_scroll_speed)

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

    // page_battle_animation 滚动高度为 13h + 200 ( page_seven -> margin-top ) 结束时（呈现最后一帧）滚动高度为 13h + 200 + 192 ( margin-bottom ) + 30 ( page-battle -> margin-top )

    var page_battle = document.querySelector('.page_battle');

    var page_battle_control = [
        {key: win_h * 13 + 200 + 192 + 30, value: 'left: 0%' },
        {key: win_h * 14 + 200 + 192 + 30, value: 'left: -100%'},
    ]
    
    animate(page_battle,page_battle_control)

    // page_nine_animation ( self girl )  滚动高度为 15h + 200 + 192 + 30
    
    var page_ten = document.querySelector('.page_ten'),

        page_ten_girl = document.querySelector('.page_ten .girl');
        
    var page_ten_control = [
        {key: win_h * 14 + 200 + 192 + 30, value: 'left: 100%' },
        {key: win_h * 16 + 200 + 192 + 30, value: 'left: -100%'},
    ],

        page_ten_girl_control = [
        {key: win_h * 14 + 200 + 192 + 30, value: 'top: 13%;left:26%;' },
        {key: win_h * 16 + 200 + 192 + 30, value: 'top:18%;left:36%'},
    ];

    animate(page_ten,page_ten_control)

    animate(page_ten_girl,page_ten_girl_control)

    // page_eleven_animation ( self girl )  滚动高度为 16h + 200 + 192 + 30

    var page_eleven = document.querySelector('.page_eleven'),

        page_eleven_girl = document.querySelector('.page_eleven .girl');

    var page_eleven_control = [
        {key: win_h * 15 + 200 + 192 + 30, value: 'left: 100%' },
        {key: win_h * 17 + 200 + 192 + 30, value: 'left: -100%'},
    ],

        page_eleven_girl_control = [
        {key: win_h * 15 + 200 + 192 + 30, value: 'top: 12%;left:36%;transform: rotateZ(-7deg);' },
        {key: win_h * 17 + 200 + 192 + 30, value: 'top:8%;left:24%;transform: rotateZ(7deg);'},
    ];

    animate(page_eleven,page_eleven_control)

    animate(page_eleven_girl,page_eleven_girl_control)

    // page_twelve_animation ( self girl )  滚动高度为 18h + 200 + 192 + 30

    var page_twelve = document.querySelector('.page_twelve'),

        page_twelve_car = document.querySelector('.page_twelve .car');

    var page_twelve_control = [
        {key: win_h * 17 + 200 + 192 + 30, value: 'left: 100%' },
        {key: win_h * 19 + 200 + 192 + 30, value: 'left: -100%'},
    ],

        page_twelve_car_control = [
        {key: win_h * 17 + 200 + 192 + 30, value: 'left: 27%' },
        {key: win_h * 19 + 200 + 192 + 30, value: 'left: 33%'},
    ];

    animate(page_twelve,page_twelve_control)

    animate(page_twelve_car,page_twelve_car_control)

    // page_thirteen_animation ( self girl )  滚动高度为 19h + 200 + 192 + 30

    var page_thirteen = document.querySelector('.page_thirteen'),

        page_thirteen_girl = document.querySelector('.page_thirteen .girl');

    var page_thirteen_control = [
        {key: win_h * 18 + 200 + 192 + 30, value: 'left: 100%' },
        {key: win_h * 20 + 200 + 192 + 30, value: 'left: -100%'},
    ],

        page_thirteen_girl_control = [
        {key: win_h * 18 + 200 + 192 + 30, value: 'left: 45%' },
        {key: win_h * 20 + 200 + 192 + 30, value: 'left: 55%'},
    ];

    animate(page_thirteen,page_thirteen_control)

    animate(page_thirteen_girl,page_thirteen_girl_control)

    // page_fourteen_animation ( self girl )  滚动高度为 21h + 200 + 192 + 30

    var page_fourteen = document.querySelector('.page_fourteen'),

        page_fourteen_girl = document.querySelector('.page_fourteen .girl');

    var page_fourteen_control = [
        {key: win_h * 20 + 200 + 192 + 30, value: 'top: ' + ( -(14 * win_h) - 330 -192 ) + 'px;' },
        {key: win_h * 22 + 200 + 192 + 30, value: 'top: ' + ( -(12 * win_h) - 330 -192 ) + 'px;' },
    ],

        page_fourteen_girl_control = [
        {key: win_h * 20 + 200 + 192 + 30, value: 'top: 0%' },
        {key: win_h * 22 + 200 + 192 + 30, value: 'top: 20%'},
    ];

    animate(page_fourteen,page_fourteen_control)

    animate(page_fourteen_girl,page_fourteen_girl_control)

    // page_fiveteen_animation  滚动高度为 22h + 200 + 192 + 30

    var page_fiveteen = document.querySelector('.page_fiveteen');

    var page_fiveteen_control = [
        {key: win_h * 21 + 200 + 192 + 30, value: 'top: ' + ( -(15 * win_h) - 330 -192 ) + 'px;' },
        {key: win_h * 23 + 200 + 192 + 30, value: 'top: ' + ( -(13 * win_h) - 330 -192 ) + 'px;'},
    ];

    animate(page_fiveteen,page_fiveteen_control)

    // page_sixteen_animation  滚动高度为 24h + 200 + 192 + 30

    var page_sixteen = document.querySelector('.page_sixteen');

    var page_sixteen_control = [
        {key: win_h * 23 + 200 + 192 + 30, value: 'left: 100%' },
        {key: win_h * 25 + 200 + 192 + 30, value: 'left: -100%'},
    ];

    animate(page_sixteen,page_sixteen_control)

    // page_seventeen_animation  滚动高度为 25h + 200 + 192 + 30

    var page_seventeen = document.querySelector('.page_seventeen');

    var page_seventeen_control = [
        {key: win_h * 24 + 200 + 192 + 30, value: 'left: 100%' },
        {key: win_h * 26 + 200 + 192 + 30, value: 'left: -100%'},
    ];

    animate(page_seventeen,page_seventeen_control)

    // page_eightteen_animation  滚动高度为 26h + 200 + 192 + 30

    var page_eightteen = document.querySelector('.page_eightteen'),

        page_eightteen_girl = document.querySelector('.page_eightteen .girl');

    var page_eightteen_control = [
        {key: win_h * 25 + 200 + 192 + 30, value: 'left: 100%' },
        {key: win_h * 27 + 200 + 192 + 30, value: 'left: -100%'},
    ],
        page_eightteen_girl_control = [
        {key: win_h * 25 + 200 + 192 + 30, value: 'left: -500px' },
        {key: win_h * 27 + 200 + 192 + 30, value: 'left: 0px'},
    ];

    animate(page_eightteen,page_eightteen_control)

    animate(page_eightteen_girl,page_eightteen_girl_control)

    // page_nineteen_animation  滚动高度为 28h + 200 + 192 + 30

    var page_nineteen = document.querySelector('.page_nineteen');

    var page_nineteen_control = [
        {key: win_h * 27 + 200 + 192 + 30, value: 'top: ' + ( -(17 * win_h) - 330 -192 ) + 'px;' },
        {key: win_h * 29 + 200 + 192 + 30, value: 'top: ' + ( -(19 * win_h) - 330 -192 ) + 'px;' },
    ];

    animate(page_nineteen,page_nineteen_control);

    // page_end_animation  滚动高度为 29h + 200 + 192 + 30

    var page_end = document.querySelector('.page_end');

    var page_end_control = [
        {key: win_h * 28 + 200 + 192 + 30, value: 'top: ' + ( -(18 * win_h) - 330 -192 ) + 'px;' },
        {key: win_h * 29 + 200 + 192 + 30, value: 'top: ' + ( -(19 * win_h) - 330 -192 ) + 'px;' },
    ];

    animate(page_end,page_end_control);

    // init

    init();
}
// 监听滚动事件
function winScroll(e) {

    var st = document.documentElement.scrollTop;

    var change_first = document.querySelector('.change_first');

    var page_seven = document.querySelector('.page_seven');

    var page_eight = document.querySelector('.page_eight');

    var left_left = document.querySelector('.left_left');

    var page_battle = document.querySelector('.page_battle');

    var left_left_end = document.querySelector('.left_left_end');

    var page_eightteen = document.querySelector('.page_eightteen');

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

    if(st >= ( win_h * 12 + 200 ) && st <= ( 13 * win_h + 200 + 192 + 30 ) ) {
        if(page_eight.style.transform != 'rotateY(0deg)'){
            page_eight.style.transform = 'rotateY(0deg)'
        }
        page_battle.style.left = '0%';
    }else {
        page_battle.style.left = '100%';
    }

    // 切换battle状态图片 此时滚动高度为 13h + 200 | delta 30 是缓冲 ( margin-top )

    if(st >= ( 13 * win_h + 200 ) && st <= ( 13 * win_h + 200 + 192 + 30 ) ) {

        (function(){

            define_scroll_speed();

            var img = page_battle.children[0];

            var delta = st - ( 13 * win_h + 200 + 30);

            var will_index = delta / 8;

            if(Math.floor(will_index) != will_index){
                will_index = Math.floor(will_index) + 1;
            }

            if(will_index <= 0) {
                will_index = 1;
            }

            img.src = 'img/' + will_index + '.jpg';

        }())
        
    }else {
        define_scroll_speed(control.user_scroll_speed)
    }

    // 固定 left_left_end    battle 出现到结束时都可以固定
    
    if(st >= ( 13 * win_h + 200 + 192 + 30 ) ) {
        left_left_end.style.left = '0%';
        page_battle.style.left = '100%'
    }else {
        left_left_end.style.left = '100%';
    }

    // 固定 page_eightteen 开灯效果 滚动高度为 26h + 200 + 192 + 30

    if(st >= ( 25.3 * win_h + 200 + 192 + 30 ) && st < ( 27 * win_h + 200 + 192 + 30 ) ) {

        (function(){

            var delta = st - ( 25.3 * win_h + 200 + 192 + 30 );

            var op = parseInt( delta / 48 );

            if(op == 0) {
                page_eightteen.style.backgroundImage = "url('img/bg(16).jpg')";
                page_eightteen.style.opacity = 0.4;
            }
            
            if(op >= 2) {
                page_eightteen.style.opacity = op * 2 / 10;
                page_eightteen.style.backgroundImage = "url('img/bg(16_2).jpg')";
            }

        }())

    }
}

