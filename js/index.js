// let bg = document.getElementById('background')
let bird1 = document.getElementById('bird1')
let bird2 = document.getElementById('bird2')
let text1 = document.getElementById('title1')
let text2 = document.getElementById('title2')
let kunpeng = document.getElementById('kunpeng')
let xingzheng = document.getElementById('xingzheng')
let door = document.getElementById('door')
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header')
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    bird1.style.top = 20 + value * 0.03 + 'vh'
    bird1.style.left = -20 + value * 0.15 + 'px'
    bird2.style.top = 10 - value * 0.03 + 'vh'
    bird2.style.right = 10 + value * 0.15 + 'px'
    text1.style.opacity = value * 0.01 + 0.25
    text2.style.opacity = value * 0.02 + 0.25
    // btn.style.marginTop = value * 1.5 + 'px'
    header.style.top = value * 0.5 + 'px'
    kunpeng.style.top = 3 + value * 0.05 + 'vh'
    kunpeng.style.left = 15 + value * 0.005 + 'vw'
    xingzheng.style.right = 0 - value * 0.005 + 'vw'
    xingzheng.style.scale = 1.0 + value * 0.0005;
    // door.style.animationIterationCount = value;
    if (value <= 350) {
        door.style.transform = 'rotate(' + 20 * value / 350 + 'deg)';
    }
})
// 获取内容
let sec = document.getElementById('sec')
// 获取iframe内容
let frame = document.getElementById('frame')
btn.addEventListener('click', function () {
    sec.style.display = 'block';
    frame.style.display = 'none';



})
// 获取点击内容
let others = document.getElementsByClassName('other')


let home = document.getElementsByClassName('home')
for (let i = 0; i < others.length; i++) {
    const element = others[i];
    element.addEventListener('click', function () {
        for (let j = 0; j < others.length; j++) {
            if (others[j].className.indexOf('active') != -1) {
                toggleClass(others[j], 'active');
            }
        }
        for (let l = 0; l < home.length; l++) {
            if (home[l].className.indexOf('active') != -1) {
                toggleClass(home[l], 'active');
            }
        }
        toggleClass(element, 'active');
        sec.style.display = 'none';
        frame.style.display = 'block';


    })

}

// 获取首页

for (let i = 0; i < home.length; i++) {

    const element = home[i];
    element.addEventListener('click', function () {
        for (let j = 0; j < others.length; j++) {
            if (others[j].className.indexOf('active') != -1) {
                toggleClass(others[j], 'active');
            }
        }
        toggleClass(this, 'active');
        frame.style.display = 'none';
        sec.style.display = 'block';
    })
}

function toggleClass(ele, className) {
    if (!ele || !className) {
        return
    }
    let classString = ele.className
    const nameIndex = classString.indexOf(className)
    if (nameIndex === -1) {
        classString += ' ' + className
    } else {
        classString =
            classString.substr(0, nameIndex) +
            classString.substr(nameIndex + className.length)
    }
    ele.className = classString
}




; (function () {
    function DropMenu() { }

    DropMenu.prototype = {
        init: function () {
            document.querySelector('.drop-menu ul').style.display = 'none';
            document.querySelector('.drop-menu > a').addEventListener('click', this.toggle, false);
        },
        toggle: function () {
            this.parentNode.classList.toggle('active');
        }
    };

    var dropMenu = new DropMenu();
    dropMenu.init();
})();