// page 高度100%

var h = window.innerHeight;

window.onload = function() {
    
    var page = document.querySelectorAll('.page');
    
    Array.prototype.forEach.call(page, function(ele,index,arr){
      ele.style.height = h + 'px';
    })

    document.addEventListener('scroll',winScroll,false);

    // animation _six

    var scene_six = document.querySelector('.scene.six');

    var scene_six_skroller = [
        {key: 'data-4737', value: 'left: 100%;'},
        {key: 'data-' + ( 4737 + 2 * h ), value: 'left: -100%;'},
    ]

    attr(scene_six,scene_six_skroller)

    scene_six.style.top = - (h + 200) + 'px';

    // animation _six_girl

    var scene_six_girl = document.querySelector('.scene.six .girl');

    var scene_six_girl_skroller = [
        {key: 'data-' + ( 4737 + 1 * h ), value: 'left: 400px;'},
        {key: 'data-' + ( 4737 + 2 * h ), value: 'left: 100px;'},
    ] 

    attr(scene_six_girl,scene_six_girl_skroller)

    // animation _seven

    var scene_seven = document.querySelector('.scene.seven');

    var scene_seven_skroller = [
        {key: 'data-' + ( 4937 + 2 * h ), value: 'left: 0%;'},
        {key: 'data-' + ( 4937 + 3 * h ), value: 'left: -100%;'},
    ]

    scene_seven.style.top = - (2*h + 200) + 'px';

    attr(scene_seven,scene_seven_skroller)

    var left_con_left = document.querySelector('.left_con_left');

    left_con_left.style.top = - (3*h + 200) + 'px';

    // animation _eight

    var scene_eight = document.querySelector('.scene.eight');

    var scene_eight_skroller = [
        {key: 'data-' + ( 4937 + 3 * h ), value: 'left: 100%;'},
        {key: 'data-' + ( 4937 + 4 * h ), value: 'left: 0%;'},
    ]

    attr(scene_eight,scene_eight_skroller)

    scene_eight.style.top = - (4*h + 200) + 'px';

    // animation _nine

    var scene_nine = document.querySelector('.scene.nine');

    var scene_nine_skroller = [
        {key: 'data-' + ( 4937 + 4 * h ), value: 'left: 100%;'},
        {key: 'data-' + ( 4937 + 6 * h ), value: 'left: -100%;'},
    ]

    attr(scene_nine,scene_nine_skroller)

    scene_nine.style.top = - (5*h + 200) + 'px';

    // animation _nine_girl

    var scene_nine_girl = document.querySelector('.scene.nine .girl');

    var scene_nine_girl_skroller = [
        {key: 'data-' + ( 4937 + 4 * h ), value: 'left: -66%;'},
        {key: 'data-' + ( 4937 + 6 * h ), value: 'left: 0%;'},
    ]

    attr(scene_nine_girl,scene_nine_girl_skroller)

    // init

    var s = skrollr.init();
}

function winScroll(e) {
    e = e || window.event;

    var st = document.documentElement.scrollTop;

    var tr_one = document.querySelector('.tr_one');

    var scene_seven = document.querySelector('.scene.seven');

    var top_con_left = document.querySelector('.top_con_left');

    var left_con_left = document.querySelector('.left_con_left');

    if(st >= 4537){
        tr_one.style.position = 'fixed';
    }else {
        tr_one.style.position = 'relative';
    }

    if( st >= (4737 + h) && st < (4937 + h) ){
        scene_seven.style.left = '0px';
        top_con_left.style.left = '-100%';
    }else if( st < (4737 + h) ){
        scene_seven.style.left = '100%';
        top_con_left.style.left = '0';
    }

    if( st >= (4937 + 2 * h)){
        left_con_left.style.left = '0px';
    }else {
        left_con_left.style.left = '100%';
    }

}

function attr(obj,arr) {
    arr.forEach(function(ele){
        obj.setAttribute(ele.key,ele.value);
    })
}













